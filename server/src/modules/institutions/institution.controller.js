const asyncHandler = require("../../utils/asyncHandler");

const institutionService = require("./institution.service");

// ======================================================
// GET ALL
// ======================================================

exports.getAllInstitutions = asyncHandler(async (req, res) => {

    const institutions =
        await institutionService.getAllInstitutions(req);

    res.status(200).json({
        success: true,
        message: "Institutions fetched successfully.",
        data: institutions,
    });

});

// ======================================================
// GET ONE
// ======================================================

exports.getInstitutionById = asyncHandler(async (req, res) => {

    const institution =
        await institutionService.getInstitutionById(
            req.params.id
        );

    res.status(200).json({
        success: true,
        message: "Institution fetched successfully.",
        data: institution,
    });

});

// ======================================================
// CREATE
// ======================================================

exports.createInstitution = asyncHandler(async (req, res) => {

    const institution =
        await institutionService.createInstitution(
    req.body,
    req
);

    res.status(201).json({
        success: true,
        message: "Institution created successfully.",
        data: institution,
    });

});

// ======================================================
// UPDATE
// ======================================================

exports.updateInstitution = asyncHandler(async (req, res) => {

    const institution =
        await institutionService.updateInstitution(
            req.params.id,
            req.body
        );

    res.status(200).json({
        success: true,
        message: "Institution updated successfully.",
        data: institution,
    });

});

// ======================================================
// STATUS
// ======================================================

exports.updateInstitutionStatus = asyncHandler(async (req, res) => {

    const institution =
        await institutionService.updateInstitutionStatus(
            req.params.id,
            req.body.status
        );

    res.status(200).json({
        success: true,
        message: "Institution status updated.",
        data: institution,
    });

});

// ======================================================
// DELETE
// ======================================================

exports.deleteInstitution = asyncHandler(async (req, res) => {

    await institutionService.deleteInstitution(
        req.params.id
    );

    res.status(200).json({
        success: true,
        message: "Institution deleted successfully.",
    });

});