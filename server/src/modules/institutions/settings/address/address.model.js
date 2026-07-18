const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            unique: true,
        },

        addressLine1: {
            type: String,
            trim: true,
            default: "",
        },

        addressLine2: {
            type: String,
            trim: true,
            default: "",
        },

        landmark: {
            type: String,
            trim: true,
            default: "",
        },

        area: {
            type: String,
            trim: true,
            default: "",
        },

        country: {
            type: String,
            trim: true,
            default: "",
        },

        state: {
            type: String,
            trim: true,
            default: "",
        },

        district: {
            type: String,
            trim: true,
            default: "",
        },

        city: {
            type: String,
            trim: true,
            default: "",
        },

        taluk: {
            type: String,
            trim: true,
            default: "",
        },

        pincode: {
            type: String,
            trim: true,
            default: "",
        },

        officePhone: {
            type: String,
            trim: true,
            default: "",
        },

        alternatePhone: {
            type: String,
            trim: true,
            default: "",
        },

        fax: {
            type: String,
            trim: true,
            default: "",
        },

        latitude: {
            type: String,
            trim: true,
            default: "",
        },

        longitude: {
            type: String,
            trim: true,
            default: "",
        },

        googleMapsUrl: {
            type: String,
            trim: true,
            default: "",
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
    "InstitutionAddress",
    addressSchema
);