const Joi = require("joi");

const addressSchema = Joi.object({
    addressLine1: Joi.string()
        .trim()
        .max(255)
        .allow("")
        .default(""),

    addressLine2: Joi.string()
        .trim()
        .max(255)
        .allow("")
        .default(""),

    landmark: Joi.string()
        .trim()
        .max(255)
        .allow("")
        .default(""),

    area: Joi.string()
        .trim()
        .max(255)
        .allow("")
        .default(""),

    country: Joi.string()
        .trim()
        .max(100)
        .allow("")
        .default(""),

    state: Joi.string()
        .trim()
        .max(100)
        .allow("")
        .default(""),

    district: Joi.string()
        .trim()
        .max(100)
        .allow("")
        .default(""),

    city: Joi.string()
        .trim()
        .max(100)
        .allow("")
        .default(""),

    taluk: Joi.string()
        .trim()
        .max(100)
        .allow("")
        .default(""),

    pincode: Joi.string()
        .trim()
        .max(20)
        .allow("")
        .default(""),

    officePhone: Joi.string()
        .trim()
        .max(20)
        .allow("")
        .default(""),

    alternatePhone: Joi.string()
        .trim()
        .max(20)
        .allow("")
        .default(""),

    fax: Joi.string()
        .trim()
        .max(20)
        .allow("")
        .default(""),

    latitude: Joi.string()
        .trim()
        .max(50)
        .allow("")
        .default(""),

    longitude: Joi.string()
        .trim()
        .max(50)
        .allow("")
        .default(""),

    googleMapsUrl: Joi.string()
        .trim()
        .uri()
        .allow("")
        .default(""),
});

module.exports = {
    addressSchema,
};