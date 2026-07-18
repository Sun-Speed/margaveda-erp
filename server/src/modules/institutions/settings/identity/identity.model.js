const mongoose = require("mongoose");

const identitySchema = new mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            unique: true,
            index: true,
        },

        logo: {
            type: String,
            default: "",
        },

        collegeSeal: {
            type: String,
            default: "",
        },

        principalSignature: {
            type: String,
            default: "",
        },

        letterHead: {
            type: String,
            default: "",
        },

        watermark: {
            type: String,
            default: "",
        },

        receiptFooter: {
            type: String,
            trim: true,
            default: "",
        },

        website: {
            type: String,
            trim: true,
            default: "",
        },

        officialEmail: {
            type: String,
            trim: true,
            default: "",
        },

        officialPhone: {
            type: String,
            trim: true,
            default: "",
        },

        tagline: {
            type: String,
            trim: true,
            default: "",
        },

        motto: {
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
    "InstitutionIdentity",
    identitySchema
);