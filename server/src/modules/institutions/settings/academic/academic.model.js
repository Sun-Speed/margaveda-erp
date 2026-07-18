const mongoose = require("mongoose");

const academicSchema = new mongoose.Schema(
    {
        organizationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Organization",
            required: true,
            unique: true,
            index: true,
        },

        currentAcademicYear: {
            type: String,
            required: true,
            trim: true,
        },

        academicCode: {
            type: String,
            required: true,
            trim: true,
            uppercase: true,
        },

        startDate: {
            type: Date,
            required: true,
        },

        expectedEndDate: {
            type: Date,
            default: null,
        },

        semesterPattern: {
            type: String,
            enum: [
                "YEARLY",
                "SEMESTER",
                "TRIMESTER",
                "QUARTER",
            ],
            default: "SEMESTER",
        },

        gradingSystem: {
            type: String,
            enum: [
                "PERCENTAGE",
                "CGPA",
                "GPA",
            ],
            default: "PERCENTAGE",
        },

        attendanceRequirement: {
            type: Number,
            default: 75,
            min: 0,
            max: 100,
        },

        workingDays: {
            type: Number,
            default: 220,
        },

        description: {
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

module.exports = mongoose.model("Academic", academicSchema);