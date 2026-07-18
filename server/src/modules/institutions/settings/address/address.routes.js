const express = require("express");

const authenticate = require("../../../../middleware/auth.middleware");

const {
    getAddressController,
    updateAddressController,
} = require("./address.controller");

const router = express.Router({
    mergeParams: true,
});

router.get("/", authenticate, getAddressController);

router.put("/", authenticate, updateAddressController);

module.exports = router;