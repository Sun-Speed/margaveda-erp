const Joi = require("joi");

const generalSchema = Joi.object({
    email: Joi.string()
        .email()
        .allow("")
        .messages({
            "string.email": "Invalid email address.",
        }),

    alternateEmail: Joi.string()
        .email()
        .allow("")
        .messages({
            "string.email":
                "Invalid alternate email.",
        }),

    phone: Joi.string()
        .allow(""),

    alternatePhone: Joi.string()
        .allow(""),

    website: Joi.string()
        .allow(""),

    openingTime: Joi.string()
        .allow(""),

    closingTime: Joi.string()
        .allow(""),

    weeklyHoliday: Joi.string()
        .required(),

    workingDays: Joi.array()
        .items(Joi.string())
        .required(),

    language: Joi.string().required(),

    timezone: Joi.string().required(),

    dateFormat: Joi.string().required(),

    timeFormat: Joi.string().required(),

    currency: Joi.string().required(),

    currencySymbol: Joi.string().required(),

    studentPortal: Joi.boolean(),

    teacherPortal: Joi.boolean(),

    parentPortal: Joi.boolean(),
});

module.exports = generalSchema;