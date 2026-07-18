const express = require("express");

const authenticate = require("../../../../middleware/auth.middleware");

const {
    getSystemController,
    updateSystemController,
} = require("./system.controller");

const router = express.Router({
    mergeParams: true,
});

router.get(
    "/",
    authenticate,
    getSystemController
);

router.put(
    "/",
    authenticate,
    updateSystemController
);

module.exports = router;