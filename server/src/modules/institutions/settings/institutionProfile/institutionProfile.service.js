const Organization = require("../../../../models/tenant/Organization.model");
const InstitutionProfile = require("./institutionProfile.model");
const ApiError = require("../../../../utils/ApiError");

class ProfileService {

    // ==================================================
    // GET PROFILE
    // ==================================================

    async getProfile(organizationId) {

        const organization = await Organization.findById(organizationId);

        if (!organization) {
            throw new ApiError(404, "Institution not found.");
        }

        let profile = await InstitutionProfile.findOne({
            organizationId,
        });

        // Create an empty profile if it doesn't exist
        if (!profile) {

            profile = await InstitutionProfile.create({
                organizationId,
            });

        }

        return {
            organization,
            profile,
        };

    }

    // ==================================================
    // SAVE PROFILE
    // ==================================================

    async saveProfile(organizationId, data, userId) {

        const organization = await Organization.findById(organizationId);

        if (!organization) {
            throw new ApiError(404, "Institution not found.");
        }

        let profile = await InstitutionProfile.findOne({
            organizationId,
        });

        if (!profile) {

            profile = await InstitutionProfile.create({
                organizationId,
                ...data,
                createdBy: userId,
                updatedBy: userId,
            });

        } else {

            Object.assign(profile, data);

            profile.updatedBy = userId;

            await profile.save();

        }

        return {
            organization,
            profile,
        };

    }

}

module.exports = new ProfileService();