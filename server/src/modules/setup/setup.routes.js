const express = require("express");
const router = express.Router();

const { setupERP } = require("./setup.controller");

router.post("/", setupERP);

module.exports = router;