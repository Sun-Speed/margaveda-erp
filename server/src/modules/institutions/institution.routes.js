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
const academicRoutes = require("./settings/academic/academic.routes");
const institutionProfileRoutes = require("./settings/institutionProfile/institutionProfile.routes");
const identityRoutes = require("./settings/identity/identity.routes");
const addressRoutes = require("./settings/address");
const generalRoutes = require("./settings/general")
const systemRoutes = require("./settings/system")

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

router.use(
    "/:institutionId/settings/academic",
    academicRoutes
);

router.use(
    "/:institutionId/settings/general",
    generalRoutes
);

router.use(
    "/:institutionId/settings/system",
    systemRoutes
);

router.use(
    "/:institutionId/settings/profile",
    institutionProfileRoutes
);

router.use(
    "/:institutionId/settings/identity",
    identityRoutes
);

router.use(
    "/:institutionId/settings/address",
    addressRoutes
);

module.exports = router;