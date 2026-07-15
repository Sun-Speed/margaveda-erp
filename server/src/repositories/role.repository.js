const Role = require("../models/auth/Role.model");

class RoleRepository {

    async create(data, session = null) {

        const [role] = await Role.create(
            [data],
            { session }
        );

        return role;

    }

    async insertMany(data, session = null) {

        return Role.insertMany(
            data,
            {
                session,
            }
        );

    }

    async findByName(customerId, name) {

        return Role.findOne({
            customerId,
            name,
        });

    }

}

module.exports = new RoleRepository();