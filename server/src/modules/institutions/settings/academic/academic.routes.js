const express = require("express");

const authenticate = require("../../../../middleware/auth.middleware");

const {
    getAcademicController,
    updateAcademicController,
} = require("./academic.controller");

const router = express.Router({
    mergeParams: true,
});

router.get("/", authenticate, getAcademicController);

router.put("/", authenticate, updateAcademicController);

module.exports = router;