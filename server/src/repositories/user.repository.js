const User = require("../models/auth/User.model");

class UserRepository {

    async create(data, session = null) {

        const [user] = await User.create(
            [data],
            { session }
        );

        return user;

    }

    async findByEmail(email) {

        return User.findOne({

            email,

            status: "ACTIVE",

        });

    }

    async findByPhone(phone) {

        return User.findOne({

            phone,

            status: "ACTIVE",

        });

    }

    async findById(id) {

        return User.findById(id);

    }

}

module.exports = new UserRepository();