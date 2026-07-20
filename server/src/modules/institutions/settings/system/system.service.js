const System = require("./system.model");

const Organization = require("../../../../models/tenant/Institution.model");

const getSystem = async (
    organizationId
) => {

    const organization =
        await Organization.findById(
            organizationId
        );

    if (!organization) {
        throw new Error(
            "Institution not found."
        );
    }

    let system =
        await System.findOne({
            organizationId,
        });

    if (!system) {

        system =
            await System.create({
                organizationId,
            });

    }

    return system;

};

const updateSystem = async (
    organizationId,
    data,
    userId
) => {

    const organization =
        await Organization.findById(
            organizationId
        );

    if (!organization) {
        throw new Error(
            "Institution not found."
        );
    }

    let system =
        await System.findOne({
            organizationId,
        });

    if (!system) {

        system = new System({
            organizationId,
            createdBy: userId,
        });

    }

    Object.assign(system, data);

    system.updatedBy = userId;

    await system.save();

    return system;

};

module.exports = {
    getSystem,
    updateSystem,
};