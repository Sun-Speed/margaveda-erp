const customerService = require("../services/customer.service");
const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

exports.createCustomer = asyncHandler(async (req, res) => {

    const customer = await customerService.createCustomer(req.body);

    res.status(201).json(
        new ApiResponse(
            true,
            "Customer created successfully",
            customer
        )
    );

});