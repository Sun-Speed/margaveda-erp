const Academic = require("./academic.model");
const Organization = require("../../../../models/tenant/Institution.model");
const getAcademic = async (organizationId) => {
    const organization = await Organization.findById(organizationId);

    if (!organization) {
        throw new Error("Institution not found.");
    }

    let academic = await Academic.findOne({
        organizationId,
    });

    if (!academic) {
        academic = await Academic.create({
            organizationId,

            currentAcademicYear: "",

            academicCode: "",

            startDate: new Date(),

            expectedEndDate: null,

            semesterPattern: "SEMESTER",

            gradingSystem: "PERCENTAGE",

            attendanceRequirement: 75,

            workingDays: 220,

            description: "",

            createdBy: null,

            updatedBy: null,
        });
    }

    return academic;
};

const updateAcademic = async (
    organizationId,
    data,
    userId
) => {
    const organization = await Organization.findById(organizationId);

    if (!organization) {
        throw new Error("Institution not found.");
    }

    let academic = await Academic.findOne({
        organizationId,
    });

    if (!academic) {
        academic = new Academic({
            organizationId,
            createdBy: userId,
        });
    }

    academic.currentAcademicYear = data.currentAcademicYear;
    academic.academicCode = data.academicCode;
    academic.startDate = data.startDate;
    academic.expectedEndDate = data.expectedEndDate;
    academic.semesterPattern = data.semesterPattern;
    academic.gradingSystem = data.gradingSystem;
    academic.attendanceRequirement = data.attendanceRequirement;
    academic.workingDays = data.workingDays;
    academic.description = data.description;

    academic.updatedBy = userId;

    await academic.save();

    return academic;
};

module.exports = {
    getAcademic,
    updateAcademic,
};