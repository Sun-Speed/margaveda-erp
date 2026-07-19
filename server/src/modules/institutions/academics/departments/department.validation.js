const Joi = require("joi");

const departmentSchema = Joi.object({

    name: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Department name is required.",
        }),

    code: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Department code is required.",
        }),

    description: Joi.string()
        .allow("")
        .optional(),

    status: Joi.string()
        .valid(
            "ACTIVE",
            "INACTIVE"
        )
        .optional(),

});

module.exports = departmentSchema;