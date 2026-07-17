const express = require("express");

const router = express.Router({
    mergeParams: true,
});

const authMiddleware = require("../../../../middleware/auth.middleware");

const {
    getProfile,
    saveProfile,
} = require("./institutionProfile.controller");

router.get(
    "/",
    authMiddleware,
    getProfile
);

router.put(
    "/",
    authMiddleware,
    saveProfile
);

module.exports = router;