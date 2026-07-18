const express = require("express");

const authenticate = require("../../../../middleware/auth.middleware");

const {
    getGeneralController,
    updateGeneralController,
} = require("./general.controller");

const router = express.Router({
    mergeParams: true,
});

router.get(
    "/",
    authenticate,
    getGeneralController
);

router.put(
    "/",
    authenticate,
    updateGeneralController
);

module.exports = router;