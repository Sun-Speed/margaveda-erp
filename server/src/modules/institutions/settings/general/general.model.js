const mongoose = require("mongoose");

const generalSchema = new mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            unique: true,
            index: true,
        },

        email: {
            type: String,
            trim: true,
            default: "",
        },

        alternateEmail: {
            type: String,
            trim: true,
            default: "",
        },

        phone: {
            type: String,
            trim: true,
            default: "",
        },

        alternatePhone: {
            type: String,
            trim: true,
            default: "",
        },

        website: {
            type: String,
            trim: true,
            default: "",
        },

        openingTime: {
            type: String,
            default: "",
        },

        closingTime: {
            type: String,
            default: "",
        },

        weeklyHoliday: {
            type: String,
            default: "SUNDAY",
        },

        workingDays: {
            type: [String],
            default: [
                "MONDAY",
                "TUESDAY",
                "WEDNESDAY",
                "THURSDAY",
                "FRIDAY",
                "SATURDAY",
            ],
        },

        language: {
            type: String,
            default: "English",
        },

        timezone: {
            type: String,
            default: "Asia/Kolkata",
        },

        dateFormat: {
            type: String,
            default: "DD/MM/YYYY",
        },

        timeFormat: {
            type: String,
            default: "12_HOURS",
        },

        currency: {
            type: String,
            default: "INR",
        },

        currencySymbol: {
            type: String,
            default: "₹",
        },

        studentPortal: {
            type: Boolean,
            default: true,
        },

        teacherPortal: {
            type: Boolean,
            default: true,
        },

        parentPortal: {
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
    "InstitutionGeneral",
    generalSchema,
    "institutiongenerals"
);