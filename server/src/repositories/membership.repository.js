const Membership = require("../models/auth/Membership.model");

class MembershipRepository {

    async create(data, session = null) {

        const [membership] = await Membership.create(
            [data],
            { session }
        );

        return membership;

    }

    async findByUser(userId) {

        return Membership.find({

            userId,

            status: "ACTIVE",

        })

            .populate("organizationId")

            .populate("roleId");

    }

}

module.exports = new MembershipRepository();