const asyncHandler = require("../../../../utils/asyncHandler");

const {
    getAddress,
    updateAddress,
} = require("./address.service");

const {
    addressSchema,
} = require("./address.validation");

const getAddressController = asyncHandler(async (req, res) => {

    const { institutionId } = req.params;

    const data = await getAddress(institutionId);

    res.status(200).json({
        success: true,
        message: "Institution address fetched successfully.",
        data,
    });

});

const updateAddressController = asyncHandler(async (req, res) => {



    const { institutionId } = req.params;

    console.log("Params:", req.params);
    console.log("User:", req.user);

    // const { error } = addressSchema.validate(req.body);

   const { error } = addressSchema.validate(req.body, {
    abortEarly: false,
});

if (error) {

    return res.status(400).json({
        success: false,
        message: "Validation failed.",
        errors: error.details.map(err => ({
            field: err.path.join("."),
            message: err.message.replace(/"/g, ""),
        })),
    });

}

    const data = await updateAddress(
        institutionId,
        req.body,
        req.user.id
    );

    res.status(200).json({
        success: true,
        message: "Institution address updated successfully.",
        data,
    });

});

module.exports = {
    getAddressController,
    updateAddressController,
};