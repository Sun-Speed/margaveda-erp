const mongoose = require("mongoose");

const institutionProfileSchema = new mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            unique: true,
            index: true,
        },

        shortName: {
            type: String,
            trim: true,
            default: "",
        },

        registrationNumber: {
            type: String,
            trim: true,
            default: "",
        },

        affiliatedUniversity: {
            type: String,
            trim: true,
            default: "",
        },

        accreditation: {
            type: String,
            trim: true,
            default: "",
        },

        description: {
            type: String,
            trim: true,
            default: "",
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },

        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model(
    "InstitutionProfile",
    institutionProfileSchema
);