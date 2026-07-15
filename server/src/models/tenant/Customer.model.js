const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        type: {
            type: String,
            enum: ["SINGLE", "GROUP"],
            required: true,
        },

        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE", "SUSPENDED"],
            default: "ACTIVE",
        },

        subscription: {
            type: String,
            enum: ["FREE", "STANDARD", "PRO", "ENTERPRISE"],
            default: "FREE",
        },

        logo: {
            type: String,
            default: "",
        },

        website: {
            type: String,
            default: "",
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        country: {
            type: String,
            default: "India",
        },

        timezone: {
            type: String,
            default: "Asia/Kolkata",
        },

        currency: {
            type: String,
            default: "INR",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("Customer", customerSchema);