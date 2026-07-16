const organizationRepository = require("../../repositories/organization.repository");
const { createInstitutionSchema } = require("./institution.validation");

class InstitutionService {

    // ==================================================
    // GET ALL
    // ==================================================

    async getAllInstitutions(req) {

        const customerId = req.currentMembership.customerId;

        return await organizationRepository.findByCustomer(
            customerId
        );

    }

    // ==================================================
    // GET ONE
    // ==================================================

    async getInstitutionById(id) {

        return await organizationRepository.findById(id);

    }

    // ==================================================
    // CREATE
    // ==================================================

async createInstitution(data, req) {

    const { error, value } =
        createInstitutionSchema.validate(
            data,
            {
                abortEarly: false,
                stripUnknown: true,
            }
        );

    if (error) {

        throw new Error(
            error.details
                .map(item => item.message)
                .join(", ")
        );

    }

    const customerId =
        req.currentMembership.customerId;

    value.customerId = customerId;

    const codeExists =
        await organizationRepository.existsByCode(
            customerId,
            value.code
        );

    if (codeExists) {
        throw new Error(
            "Institution code already exists."
        );
    }

    const emailExists =
        await organizationRepository.existsByEmail(
            customerId,
            value.email
        );

    if (emailExists) {
        throw new Error(
            "Institution email already exists."
        );
    }

    const phoneExists =
        await organizationRepository.existsByPhone(
            customerId,
            value.phone
        );

    if (phoneExists) {
        throw new Error(
            "Institution phone already exists."
        );
    }

    value.type = value.organizationType;
delete value.organizationType;

    return await organizationRepository.create(value);

}

    // ==================================================
    // UPDATE
    // ==================================================

    async updateInstitution(id, data) {

        return await organizationRepository.update(
            id,
            data
        );

    }

    // ==================================================
    // STATUS
    // ==================================================

    async updateInstitutionStatus(id, status) {

        return await organizationRepository.update(
            id,
            {
                status,
            }
        );

    }

    // ==================================================
    // DELETE
    // ==================================================

    async deleteInstitution(id) {

        return await organizationRepository.delete(id);

    }

}

module.exports = new InstitutionService();