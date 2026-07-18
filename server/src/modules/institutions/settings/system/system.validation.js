const Joi = require("joi");

const systemSchema = Joi.object({

    studentPrefix: Joi.string().required(),

    teacherPrefix: Joi.string().required(),

    employeePrefix: Joi.string().required(),

    admissionPrefix: Joi.string().required(),

    receiptPrefix: Joi.string().required(),

    certificatePrefix: Joi.string().required(),

    financialYear: Joi.string().allow(""),

    gstNumber: Joi.string().allow(""),

    taxPercentage: Joi.number()
        .min(0)
        .max(100),

    paymentDueDays: Joi.number().min(0),

    senderName: Joi.string().allow(""),

    senderEmail: Joi.string()
        .email()
        .allow(""),

    emailNotifications: Joi.boolean(),

    smsNotifications: Joi.boolean(),

    whatsappNotifications: Joi.boolean(),

    minimumPasswordLength: Joi.number()
        .min(4)
        .max(30),

    sessionTimeout: Joi.number()
        .min(5),

    maximumLoginAttempts: Joi.number()
        .min(1),

    twoFactorAuthentication:
        Joi.boolean(),

});

module.exports = systemSchema;