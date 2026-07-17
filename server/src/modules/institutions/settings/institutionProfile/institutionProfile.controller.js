const asyncHandler = require("../../../../utils/asyncHandler");

const profileService = require("./institutionProfile.service");

// ======================================================
// GET PROFILE
// ======================================================

exports.getProfile = asyncHandler(async (req, res) => {

    const profileData = await profileService.getProfile(
        req.params.institutionId
    );

    res.status(200).json({
        success: true,
        message: "Institution profile fetched successfully.",
        data: profileData,
    });

});

// ======================================================
// SAVE PROFILE
// ======================================================

exports.saveProfile = asyncHandler(async (req, res) => {

    const profileData = await profileService.saveProfile(
        req.params.institutionId,
        req.body,
        req.user._id
    );

    res.status(200).json({
        success: true,
        message: "Institution profile saved successfully.",
        data: profileData,
    });

});