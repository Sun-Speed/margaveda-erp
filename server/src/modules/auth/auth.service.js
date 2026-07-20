const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const env = require("../../config/env");

const userRepository = require("../../repositories/user.repository");
const membershipRepository = require("../../repositories/membership.repository");
const organizationRepository = require("../../repositories/organization.repository");

const userResponse = require("../../utils/userResponse");

class AuthService {

    async login(data) {

        const { login, password } = data;

        if (!login || !password) {
            throw new Error("Login and Password are required.");
        }

        let user;

        if (login.includes("@")) {
            user = await userRepository.findByEmail(login);
        } else {
            user = await userRepository.findByPhone(login);
        }

        if (!user) {
            throw new Error("Invalid Credentials.");
        }

        const matched = await bcrypt.compare(
            password,
            user.password
        );

        if (!matched) {
            throw new Error("Invalid Credentials.");
        }

        const memberships = await membershipRepository.findByUser(
            user._id
        );

        if (memberships.length === 0) {
            throw new Error("No Membership Found.");
        }

        const currentOrganization = memberships[0].organizationId;

        // Count all institutions under this customer
        const organizationCount =
            await organizationRepository.countByCustomer(
                currentOrganization.customerId
            );

        const token = jwt.sign(
            {
                userId: user._id,
            },
            env.JWT_SECRET,
            {
                expiresIn: env.JWT_EXPIRES_IN,
            }
        );

        return {
            success: true,
            message: "Login Successful",

            token,

            user: userResponse(user),

            memberships,

            currentOrganization,

            organizationCount,
        };
    }
}

module.exports = new AuthService();