const Organization = require("../../../../models/tenant/Organization.model");
const InstitutionAddress = require("./address.model");

const getAddress = async (organizationId) => {

    const organization = await Organization.findById(
        organizationId
    );

    if (!organization) {
        throw new Error("Organization not found.");
    }

    let address = await InstitutionAddress.findOne({
        organizationId,
    });

    if (!address) {

        address = await InstitutionAddress.create({
            organizationId,
        });

    }

    return {
        organization,
        address,
    };
};

const updateAddress = async (
    organizationId,
    data,
    userId
) => {

    const organization = await Organization.findById(
        organizationId
    );

    if (!organization) {
        throw new Error("Organization not found.");
    }

    let address = await InstitutionAddress.findOne({
        organizationId,
    });

    if (!address) {

        address = await InstitutionAddress.create({
            organizationId,
            createdBy: userId,
        });

    }

    Object.assign(address, data);

    address.updatedBy = userId;

    await address.save();

    return {
        organization,
        address,
    };
};

module.exports = {
    getAddress,
    updateAddress,
};