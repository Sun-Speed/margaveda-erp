const asyncHandler = require("../../utils/asyncHandler");
const setupService = require("./setup.service");

exports.setupERP = asyncHandler(async (req, res) => {

    const result = await setupService.setup(req.body);

    res.status(201).json({
        success: true,
        message: "ERP Created Successfully",
        data: result,
    });

});