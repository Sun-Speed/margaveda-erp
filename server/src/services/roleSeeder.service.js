const roleRepository = require("../repositories/role.repository");

const defaultRoles = require("../constants/defaultRoles");

class RoleSeederService {

    async seed(customerId, session) {

        const roles = defaultRoles.map(role => ({

            customerId,

            name: role.name,

            description: role.description,

            isSystem: true,

        }));

        return await roleRepository.insertMany(
            roles,
            session
        );

    }

}

module.exports = new RoleSeederService();