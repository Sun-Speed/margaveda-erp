const asyncHandler = require("../../utils/asyncHandler");

const authService = require("./auth.service");

exports.login = asyncHandler(async (req, res) => {

    const result = await authService.login(req.body);

    res.status(200).json({
        success: true,
        message: "Login Successful",
        ...result,
    });

});