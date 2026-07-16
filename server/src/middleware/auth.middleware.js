const jwt = require("jsonwebtoken");

const env = require("../config/env");

const userRepository = require("../repositories/user.repository");
const membershipRepository = require("../repositories/membership.repository");

module.exports = async function (req, res, next) {

    try {

        const authorization = req.headers.authorization;

        if (!authorization) {

            return res.status(401).json({
                success: false,
                message: "Authorization token missing.",
            });

        }

        const token = authorization.replace(
            "Bearer ",
            ""
        );

        const decoded = jwt.verify(
            token,
            env.JWT_SECRET
        );

        const user =
            await userRepository.findById(
                decoded.userId
            );

        if (!user) {

            return res.status(401).json({
                success: false,
                message: "User not found.",
            });

        }

        const memberships =
            await membershipRepository.findByUser(
                user._id
            );

        if (!memberships.length) {

            return res.status(403).json({
                success: false,
                message: "No memberships found.",
            });

        }

        req.user = user;

        req.memberships = memberships;

        req.currentMembership = memberships[0];

        next();

    } catch (error) {

        return res.status(401).json({

            success: false,

            message: "Invalid or expired token.",

        });

    }

};