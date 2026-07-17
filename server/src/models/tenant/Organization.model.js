const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
    {

        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer",
            required: true,
            index: true,
        },

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

        type: {
            type: String,
            enum: [
                "SCHOOL",
                "PU_COLLEGE",
                "DEGREE_COLLEGE",
                "UNIVERSITY",
                "ACADEMY",
                "SKILL_CENTER",
                "OTHER"
            ],
            required: true,
        },

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


        logo: {
            type: String,
            default: "",
        },

        address: {
            type: String,
            default: "",
        },

        status: {
            type: String,
            enum: [
                "ACTIVE",
                "INACTIVE"
            ],
            default: "ACTIVE",
        },
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model(
    "Organization",
    organizationSchema
);