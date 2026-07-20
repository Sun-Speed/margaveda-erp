const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
    {
        // Management / Education Group Name
        name: {
            type: String,
            required: true,
            trim: true,
        },

        // Unique URL Slug
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        // Account Status
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE", "SUSPENDED"],
            default: "ACTIVE",
        },

        // Subscription Plan
        subscription: {
            type: String,
            enum: ["FREE", "STANDARD", "PRO", "ENTERPRISE"],
            default: "FREE",
        },

        // Branding
        logo: {
            type: String,
            default: "",
        },

        website: {
            type: String,
            default: "",
        },

        // Contact Details
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

        // Regional Settings
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