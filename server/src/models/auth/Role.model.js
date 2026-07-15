const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
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
            uppercase: true,
            trim: true,
        },

        description: {
            type: String,
            default: "",
        },

        isSystem: {
            type: Boolean,
            default: false,
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model(
    "Role",
    roleSchema
);