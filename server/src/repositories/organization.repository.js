const Organization = require("../models/tenant/Organization.model");

class OrganizationRepository {

    async create(data, session = null) {

        const organization = new Organization(data);

        return await organization.save({ session });

    }

    async findById(id) {

        return await Organization.findById(id);

    }

    async findByCustomer(customerId) {

        return await Organization.find({
            customerId,
        }).sort({
            createdAt: -1,
        });

    }

    async findByCode(code) {

        return await Organization.findOne({
            code,
        });

    }

    async update(id, data) {

        return await Organization.findByIdAndUpdate(
    id,
    { $set: data },
    {
        returnDocument: "after",
        runValidators: true,
    }
);

    }

    async existsByCode(customerId, code) {

        return await Organization.exists({
            customerId,
            code,
        });

    }

    async existsByEmail(customerId, email) {

        return await Organization.exists({
            customerId,
            email,
        });

    }

    async existsByPhone(customerId, phone) {

        return await Organization.exists({
            customerId,
            phone,
        });

    }

    async delete(id) {

        return await Organization.findByIdAndDelete(id);

    }

}

module.exports = new OrganizationRepository();