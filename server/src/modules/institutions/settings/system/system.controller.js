const {
    getSystem,
    updateSystem,
} = require("./system.service");

const systemSchema = require("./system.validation");

const getSystemController = async (req, res) => {

    try {

        const { institutionId } = req.params;

        const system = await getSystem(
            institutionId
        );

        return res.status(200).json({
            success: true,
            data: system,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

const updateSystemController = async (
    req,
    res
) => {

    try {

        const { institutionId } = req.params;

        const { error } = systemSchema.validate(
            req.body,
            {
                abortEarly: false,
            }
        );

        if (error) {

            return res.status(400).json({
                success: false,
                message: "Validation failed.",
                errors: error.details.map((err) => ({
                    field: err.path.join("."),
                    message: err.message.replace(/"/g, ""),
                })),
            });

        }

        const system = await updateSystem(
            institutionId,
            req.body,
            req.user.id
        );

        return res.status(200).json({
            success: true,
            message:
                "System settings updated successfully.",
            data: system,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {
    getSystemController,
    updateSystemController,
};