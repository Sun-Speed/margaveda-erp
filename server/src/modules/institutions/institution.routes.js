const express = require("express");

const router = express.Router();

// Existing Institution Controllers
const {
    createInstitution,
    getAllInstitutions,
    getInstitutionById,
    updateInstitution,
    deleteInstitution,
} = require("./institution.controller");

// Existing Middleware
const authMiddleware = require("../../middleware/auth.middleware");

// ===== Institution Settings Routes =====
// const generalRoutes = require("./settings/general/general.routes");
// const brandingRoutes = require("./settings/branding/branding.routes");
// const addressRoutes = require("./settings/address/address.routes");
// const academicRoutes = require("./settings/academic/academic.routes");
// const structureRoutes = require("./settings/structure/structure.routes");
// const featureRoutes = require("./settings/features/feature.routes");
const institutionProfileRoutes = require(
    "./settings/institutionProfile/institutionProfile.routes"
);

// -----------------------------------------------------------------------------
// Institution CRUD
// -----------------------------------------------------------------------------

router.post("/", authMiddleware, createInstitution);

router.get("/", authMiddleware, getAllInstitutions);

router.get("/:institutionId", authMiddleware, getInstitutionById);

router.put("/:institutionId", authMiddleware, updateInstitution);

router.delete("/:institutionId", authMiddleware, deleteInstitution);

// -----------------------------------------------------------------------------
// Institution Settings
// -----------------------------------------------------------------------------

// router.use(
//     "/:institutionId/settings/general",
//     generalRoutes
// );

// router.use(
//     "/:institutionId/settings/branding",
//     brandingRoutes
// );

// router.use(
//     "/:institutionId/settings/address",
//     addressRoutes
// );

// router.use(
//     "/:institutionId/settings/academic",
//     academicRoutes
// );

// router.use(
//     "/:institutionId/settings/structure",
//     structureRoutes
// );

// router.use(
//     "/:institutionId/settings/features",
//     featureRoutes
// );

router.use(
    "/:institutionId/settings/profile",
    institutionProfileRoutes
);

module.exports = router;