const Joi = require("joi");

const identitySchema = Joi.object({

    receiptFooter: Joi.string()
        .allow("")
        .max(500),

    website: Joi.string()
        .allow("")
        .max(255),

    officialEmail: Joi.string()
        .email()
        .allow(""),

    officialPhone: Joi.string()
        .allow("")
        .max(20),

    tagline: Joi.string()
        .allow("")
        .max(255),

    motto: Joi.string()
        .allow("")
        .max(500),

});

module.exports = {
    identitySchema,
};