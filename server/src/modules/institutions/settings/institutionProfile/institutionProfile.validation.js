const Joi = require("joi");

exports.profileSchema = Joi.object({

    shortName: Joi.string()
        .trim()
        .max(100)
        .allow("", null),

    registrationNumber: Joi.string()
        .trim()
        .max(100)
        .allow("", null),

    affiliatedUniversity: Joi.string()
        .trim()
        .max(255)
        .allow("", null),

    accreditation: Joi.string()
        .trim()
        .max(255)
        .allow("", null),

    description: Joi.string()
        .trim()
        .max(2000)
        .allow("", null),

});