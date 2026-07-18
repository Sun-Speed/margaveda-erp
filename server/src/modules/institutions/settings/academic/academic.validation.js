const Joi = require("joi");

const academicSchema = Joi.object({
    currentAcademicYear: Joi.string()
        .trim()
        .required()
        .messages({
            "string.empty": "Academic year is required.",
            "any.required": "Academic year is required.",
        }),

    academicCode: Joi.string()
        .trim()
        .uppercase()
        .required()
        .messages({
            "string.empty": "Academic code is required.",
            "any.required": "Academic code is required.",
        }),

    startDate: Joi.date()
        .required()
        .messages({
            "date.base": "Invalid start date.",
            "any.required": "Start date is required.",
        }),

    expectedEndDate: Joi.date()
        .allow(null, "")
        .greater(Joi.ref("startDate"))
        .messages({
            "date.greater":
                "Expected end date must be after the start date.",
        }),

    semesterPattern: Joi.string()
        .valid(
            "YEARLY",
            "SEMESTER",
            "TRIMESTER",
            "QUARTER"
        )
        .required()
        .messages({
            "any.only": "Invalid semester pattern.",
            "any.required": "Semester pattern is required.",
        }),

    gradingSystem: Joi.string()
        .valid(
            "PERCENTAGE",
            "CGPA",
            "GPA"
        )
        .required()
        .messages({
            "any.only": "Invalid grading system.",
            "any.required": "Grading system is required.",
        }),

    attendanceRequirement: Joi.number()
        .min(0)
        .max(100)
        .required()
        .messages({
            "number.base": "Attendance must be a number.",
            "number.min": "Attendance cannot be less than 0%.",
            "number.max": "Attendance cannot exceed 100%.",
            "any.required": "Attendance requirement is required.",
        }),

    workingDays: Joi.number()
        .min(1)
        .required()
        .messages({
            "number.base": "Working days must be a number.",
            "number.min": "Working days must be greater than zero.",
            "any.required": "Working days are required.",
        }),

    description: Joi.string()
        .trim()
        .allow(""),
});

module.exports = academicSchema;