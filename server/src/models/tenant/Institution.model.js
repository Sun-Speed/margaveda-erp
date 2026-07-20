const mongoose = require("mongoose");

const institutionSchema = new mongoose.Schema(
    {
        // Owner (Education Group)
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
            index: true,
        },

        // Basic Information
        name: {
            type: String,
            required: true,
            trim: true,
        },

        code: {
            type: String,
            required: true,
            uppercase: true,
            trim: true,
        },

        // Permanent Institution Type
        type: {
            type: String,
            enum: [
                "NURSERY",
                "SCHOOL",
                "PU_COLLEGE",
                "DEGREE_COLLEGE",
                "UNIVERSITY",
                "ACADEMY",
                "SKILL_CENTER",
                "OTHER",
            ],
            required: true,
        },

        // Academic Blueprint (Generated Automatically)
        academicSetup: {
    structure: {
        type: String,
        enum: ["CLASS_BASED", "DEPARTMENT_BASED"],
        default: "CLASS_BASED"
    },

    courseManagement: {
        type: Boolean,
        default: false
    },

    labManagement: {
        type: Boolean,
        default: false
    }
},

        // Installed Optional Services
        services: {
            type: [String],
            default: [],
        },

        // Contact Details
        email: {
            type: String,
            lowercase: true,
            trim: true,
            default: "",
        },

        phone: {
            type: String,
            default: "",
        },

        website: {
            type: String,
            default: "",
        },

        principalName: {
            type: String,
            default: "",
        },

        // Branding
        logo: {
            type: String,
            default: "",
        },

        // Address
        address: {
            type: String,
            default: "",
        },

        // Institution Status
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("Organization", institutionSchema);