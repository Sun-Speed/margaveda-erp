const {
    getDepartments,
    createDepartment,
    updateDepartment,
    deleteDepartment,
} = require("./department.service");

const departmentSchema = require("./department.validation");

const getDepartmentsController = async (
    req,
    res
) => {

    try {

        const { institutionId } = req.params;

        const departments =
            await getDepartments(
                institutionId
            );

        return res.status(200).json({
            success: true,
            data: departments,
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

const createDepartmentController = async (
    req,
    res
) => {

    try {

        const { institutionId } = req.params;

        const { error } =
            departmentSchema.validate(
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
                        field:
                            err.path.join("."),
                        message:
                            err.message.replace(
                                /"/g,
                                ""
                            ),
                    })
                ),
            });

        }

        const department =
            await createDepartment(

                institutionId,

                req.body,

                req.user.id

            );

        return res.status(201).json({

            success: true,

            message:
                "Department created successfully.",

            data: department,

        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

const updateDepartmentController = async (
    req,
    res
) => {

    try {

        const {
            institutionId,
            departmentId,
        } = req.params;

        const { error } =
            departmentSchema.validate(
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
                        field:
                            err.path.join("."),
                        message:
                            err.message.replace(
                                /"/g,
                                ""
                            ),
                    })
                ),
            });

        }

        const department =
            await updateDepartment(

                institutionId,

                departmentId,

                req.body,

                req.user.id

            );

        return res.status(200).json({

            success: true,

            message:
                "Department updated successfully.",

            data: department,

        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

const deleteDepartmentController = async (
    req,
    res
) => {

    try {

        const {
            institutionId,
            departmentId,
        } = req.params;

        await deleteDepartment(

            institutionId,

            departmentId

        );

        return res.status(200).json({

            success: true,

            message:
                "Department deleted successfully.",

        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

module.exports = {

    getDepartmentsController,

    createDepartmentController,

    updateDepartmentController,

    deleteDepartmentController,

};