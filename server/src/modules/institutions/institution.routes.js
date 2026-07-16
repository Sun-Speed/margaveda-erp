const express = require("express");

const router = express.Router();

const authMiddleware = require("../../middleware/auth.middleware");
const authorize = require("../../middleware/authorize.middleware");

const ROLES = require("../../constants/roles");

const institutionController = require("./institution.controller");

router.use(authMiddleware);

router.get(
    "/",
    authorize(ROLES.SUPER_ADMIN),
    institutionController.getAllInstitutions
);

router.get(
    "/:id",
    authorize(ROLES.SUPER_ADMIN),
    institutionController.getInstitutionById
);

router.post(
    "/",
    authorize(ROLES.SUPER_ADMIN),
    institutionController.createInstitution
);

router.put(
    "/:id",
    authorize(ROLES.SUPER_ADMIN),
    institutionController.updateInstitution
);

router.patch(
    "/:id/status",
    authorize(ROLES.SUPER_ADMIN),
    institutionController.updateInstitutionStatus
);

router.delete(
    "/:id",
    authorize(ROLES.SUPER_ADMIN),
    institutionController.deleteInstitution
);

module.exports = router;