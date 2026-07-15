const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const customerRepository = require("../../repositories/customer.repository");
const organizationRepository = require("../../repositories/organization.repository");
const userRepository = require("../../repositories/user.repository");
const membershipRepository = require("../../repositories/membership.repository");

const roleSeederService = require("../../services/roleSeeder.service");

class SetupService {
    async setup(data) {
        const session = await mongoose.startSession();

        try {
            session.startTransaction();

            // Check Customer Slug

            const existingCustomer = await customerRepository.findBySlug(
                data.customer.slug
            );

            if (existingCustomer) {
                throw new Error("Customer slug already exists.");
            }

            // Check Administrator Email

            const existingUser = await userRepository.findByEmail(
                data.admin.email
            );

            if (existingUser) {
                throw new Error("Email already registered.");
            }

            // Create Customer

            const customer = await customerRepository.create(
                data.customer,
                session
            );

            // Create First Organization

            const organization = await organizationRepository.create(
                {
                    ...data.organization,
                    customerId: customer._id,
                },
                session
            );

            // Seed Default Roles

            const roles = await roleSeederService.seed(
                customer._id,
                session
            );

            // Get Super Admin Role

            const superAdminRole = roles.find(
                (role) => role.name === "SUPER_ADMIN"
            );

            // Encrypt Password

            const hashedPassword = await bcrypt.hash(
                data.admin.password,
                10
            );

            // Create Administrator

            const admin = await userRepository.create(
                {
                    ...data.admin,
                    password: hashedPassword,
                },
                session
            );

            // Create Membership

            await membershipRepository.create(
                {
                    customerId: customer._id,
                    organizationId: organization._id,
                    userId: admin._id,
                    roleId: superAdminRole._id,
                    isPrimary: true,
                    status: "ACTIVE",
                },
                session
            );

            await session.commitTransaction();

            return {
                customer,
                organization,
                admin,
            };
        } catch (error) {
            await session.abortTransaction();
            throw error;
        } finally {
            session.endSession();
        }
    }
}

module.exports = new SetupService();