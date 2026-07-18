const asyncHandler = require("../../../../utils/asyncHandler");
const {
    getIdentity,
    updateIdentity,
} = require("./identity.service");
const { identitySchema } = require("./identity.validation");

const getIdentityController = asyncHandler(async (req, res) => {

    const { institutionId } = req.params;

    const data = await getIdentity(institutionId);

    res.status(200).json({
        success: true,
        message: "Institution identity fetched successfully.",
        data,
    });

});

const updateIdentityController = asyncHandler(async (req, res) => {

    const { institutionId } = req.params;

    const { error } = identitySchema.validate(req.body);

    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details[0].message,
        });
    }

    const data = await updateIdentity(
        institutionId,
        req.body,
        req.files || {},
        req.user.id
    );

    res.status(200).json({
        success: true,
        message: "Institution identity updated successfully.",
        data,
    });

});

module.exports = {
    getIdentityController,
    updateIdentityController,
};