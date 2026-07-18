const {
    getGeneral,
    updateGeneral,
} = require("./general.service");

const generalSchema = require("./general.validation");

const getGeneralController = async (req, res) => {
    try {
        const { institutionId } = req.params;

        const general = await getGeneral(
            institutionId
        );

        return res.status(200).json({
            success: true,
            data: general,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const updateGeneralController = async (
    req,
    res
) => {
    try {
        const { institutionId } = req.params;

        const { error } = generalSchema.validate(
            req.body,
            {
                abortEarly: false,
            }
        );

        if (error) {
            return res.status(400).json({
                success: false,
                message: "Validation failed.",
                errors: error.details.map(
                    (err) => ({
                        field: err.path.join("."),
                        message: err.message.replace(
                            /"/g,
                            ""
                        ),
                    })
                ),
            });
        }

        const general =
            await updateGeneral(
                institutionId,
                req.body,
                req.user.id
            );

        return res.status(200).json({
            success: true,
            message:
                "General settings updated successfully.",
            data: general,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getGeneralController,
    updateGeneralController,
};