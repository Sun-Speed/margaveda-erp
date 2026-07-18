const mongoose = require("mongoose");

const systemSchema = new mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            unique: true,
            index: true,
        },

        // Document Numbering
        studentPrefix: {
            type: String,
            default: "STD",
        },

        teacherPrefix: {
            type: String,
            default: "TEA",
        },

        employeePrefix: {
            type: String,
            default: "EMP",
        },

        admissionPrefix: {
            type: String,
            default: "ADM",
        },

        receiptPrefix: {
            type: String,
            default: "REC",
        },

        certificatePrefix: {
            type: String,
            default: "CERT",
        },

        // Financial

        financialYear: {
            type: String,
            default: "",
        },

        gstNumber: {
            type: String,
            default: "",
        },

        taxPercentage: {
            type: Number,
            default: 0,
        },

        paymentDueDays: {
            type: Number,
            default: 30,
        },

        // Communication

        senderName: {
            type: String,
            default: "",
        },

        senderEmail: {
            type: String,
            default: "",
        },

        emailNotifications: {
            type: Boolean,
            default: true,
        },

        smsNotifications: {
            type: Boolean,
            default: false,
        },

        whatsappNotifications: {
            type: Boolean,
            default: false,
        },

        // Security

        minimumPasswordLength: {
            type: Number,
            default: 8,
        },

        sessionTimeout: {
            type: Number,
            default: 30,
        },

        maximumLoginAttempts: {
            type: Number,
            default: 5,
        },

        twoFactorAuthentication: {
            type: Boolean,
            default: false,
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "InstitutionSystem",
    systemSchema,
    "institutionsystems"
);