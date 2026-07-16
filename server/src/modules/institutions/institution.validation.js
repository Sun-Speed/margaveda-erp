const Joi = require("joi");

exports.createInstitutionSchema = Joi.object({

    name: Joi.string()
        .trim()
        .min(3)
        .max(150)
        .required(),

    code: Joi.string()
        .trim()
        .uppercase()
        .min(2)
        .max(20)
        .required(),

    organizationType: Joi.string()
        .valid(
            "SCHOOL",
            "PU_COLLEGE",
            "DEGREE_COLLEGE",
            "UNIVERSITY",
            "COACHING_CENTER",
            "SKILL_CENTER",
            "ACADEMY",
            "OTHER"
        )
        .required(),

    email: Joi.string()
        .email()
        .required(),

    phone: Joi.string()
        .trim()
        .required(),

    website: Joi.string()
        .allow("", null),

    principalName: Joi.string()
        .trim()
        .allow("", null),

    establishedYear: Joi.number()
        .integer()
        .min(1900)
        .max(new Date().getFullYear())
        .allow(null),

    logo: Joi.string()
        .allow("", null),

    address: Joi.string()
        .trim()
        .required(),

    status: Joi.string()
        .valid(
            "ACTIVE",
            "INACTIVE",
            "ARCHIVED"
        )
        .default("ACTIVE"),

});