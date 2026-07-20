const General = require("./general.model");
const Organization = require("../../../../models/tenant/Institution.model");

const getGeneral = async (organizationId) => {

    const organization =
        await Organization.findById(
            organizationId
        );

    if (!organization) {
        throw new Error(
            "Institution not found."
        );
    }

    let general =
        await General.findOne({
            organizationId,
        });

    if (!general) {

        general = await General.create({
            organizationId,
        });

    }

    return general;
};

const updateGeneral = async (
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

    let general =
        await General.findOne({
            organizationId,
        });

    if (!general) {

        general = new General({
            organizationId,
            createdBy: userId,
        });

    }

    Object.assign(general, data);

    general.updatedBy = userId;

    await general.save();

    return general;
};

module.exports = {
    getGeneral,
    updateGeneral,
};