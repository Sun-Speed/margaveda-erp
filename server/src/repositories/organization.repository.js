const Organization = require("../models/tenant/Organization.model");

class OrganizationRepository {

    async create(data, session = null) {
        const [organization] = await Organization.create([data], { session });
        return organization;
    }

    async findById(id) {
        return Organization.findById(id);
    }

    async update(id, data) {
        return Organization.findByIdAndUpdate(id, data, {
            new: true,
        });
    }

    async delete(id) {
        return Organization.findByIdAndDelete(id);
    }

}

module.exports = new OrganizationRepository();