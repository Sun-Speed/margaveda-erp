const {
    getAcademic,
    updateAcademic,
} = require("./academic.service");

const academicSchema = require("./academic.validation");

const getAcademicController = async (req, res) => {
    try {
        const { institutionId } = req.params;

        const academic = await getAcademic(institutionId);

        return res.status(200).json({
            success: true,
            data: academic,
        });
    } catch (error) {
        console.error("Get Academic Error:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch academic settings.",
        });
    }
};

const updateAcademicController = async (req, res) => {
    try {
        const { institutionId } = req.params;

        const { error } = academicSchema.validate(req.body, {
            abortEarly: false,
        });

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

        const academic = await updateAcademic(
            institutionId,
            req.body,
            req.user.id
        );

        return res.status(200).json({
            success: true,
            message: "Academic settings updated successfully.",
            data: academic,
        });
    } catch (error) {
        console.error("Update Academic Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message || "Something went wrong.",
        });
    }
};

module.exports = {
    getAcademicController,
    updateAcademicController,
};