const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
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
            trim: true,
            uppercase: true,
        },

        description: {
            type: String,
            default: "",
            trim: true,
        },

        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE",
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

departmentSchema.index(
    {
        organizationId: 1,
        name: 1,
    },
    {
        unique: true,
    }
);

departmentSchema.index(
    {
        organizationId: 1,
        code: 1,
    },
    {
        unique: true,
    }
);

module.exports = mongoose.model(
    "Department",
    departmentSchema
);