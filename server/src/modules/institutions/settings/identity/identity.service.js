const path = require("path");

const InstitutionIdentity = require("./identity.model");

const Organization = require("../../../../models/tenant/Institution.model");

const getIdentity = async (organizationId) => {

    const organization = await Organization.findById(
        organizationId
    );

    if (!organization) {
        throw new Error("Organization not found.");
    }

    let identity = await InstitutionIdentity.findOne({
        organizationId,
    });

    if (!identity) {

        identity = await InstitutionIdentity.create({
            organizationId,
        });

    }

    return {
        organization,
        identity,
    };
};

const updateIdentity = async (
    organizationId,
    data,
    files,
    userId
) => {

    const organization = await Organization.findById(organizationId);

    if (!organization) {
        throw new Error("Organization not found.");
    }

    let identity = await InstitutionIdentity.findOne({
        organizationId,
    });

    if (!identity) {

        identity = await InstitutionIdentity.create({
            organizationId,
            createdBy: userId,
        });

    }

    Object.assign(identity, data);

    const getRelativePath = (file) => {

        return path
            .relative(process.cwd(), file.path)
            .replace(/\\/g, "/");

    };

    if (files.logo?.[0]) {
        identity.logo = getRelativePath(files.logo[0]);
    }

    if (files.collegeSeal?.[0]) {
        identity.collegeSeal = getRelativePath(files.collegeSeal[0]);
    }

    if (files.principalSignature?.[0]) {
        identity.principalSignature = getRelativePath(files.principalSignature[0]);
    }

    if (files.letterHead?.[0]) {
        identity.letterHead = getRelativePath(files.letterHead[0]);
    }

    if (files.watermark?.[0]) {
        identity.watermark = getRelativePath(files.watermark[0]);
    }

    identity.updatedBy = userId;

    await identity.save();

    return {
        organization,
        identity,
    };

};


module.exports = {
    getIdentity,
    updateIdentity,
};