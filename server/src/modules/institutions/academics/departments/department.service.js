const Department = require("./department.model");
const Organization = require("../../organization.model");

const getDepartments = async (organizationId) => {

    const organization = await Organization.findById(
        organizationId
    );

    if (!organization) {
        throw new Error("Institution not found.");
    }

    return await Department.find({
        organizationId,
    }).sort({
        name: 1,
    });

};

const createDepartment = async (
    organizationId,
    data,
    userId
) => {

    const organization = await Organization.findById(
        organizationId
    );

    if (!organization) {
        throw new Error("Institution not found.");
    }

    const existingName = await Department.findOne({
        organizationId,
        name: data.name,
    });

    if (existingName) {
        throw new Error(
            "Department name already exists."
        );
    }

    const existingCode = await Department.findOne({
        organizationId,
        code: data.code.toUpperCase(),
    });

    if (existingCode) {
        throw new Error(
            "Department code already exists."
        );
    }

    const department = await Department.create({

        organizationId,

        name: data.name,

        code: data.code.toUpperCase(),

        description: data.description,

        status: data.status || "ACTIVE",

        createdBy: userId,

        updatedBy: userId,

    });

    return department;

};

const updateDepartment = async (
    organizationId,
    departmentId,
    data,
    userId
) => {

    const department = await Department.findOne({
        _id: departmentId,
        organizationId,
    });

    if (!department) {
        throw new Error("Department not found.");
    }

    const existingName = await Department.findOne({

        _id: {
            $ne: departmentId,
        },

        organizationId,

        name: data.name,

    });

    if (existingName) {
        throw new Error(
            "Department name already exists."
        );
    }

    const existingCode = await Department.findOne({

        _id: {
            $ne: departmentId,
        },

        organizationId,

        code: data.code.toUpperCase(),

    });

    if (existingCode) {
        throw new Error(
            "Department code already exists."
        );
    }

    department.name = data.name;
    department.code = data.code.toUpperCase();
    department.description = data.description;
    department.status = data.status;
    department.updatedBy = userId;

    await department.save();

    return department;

};

const deleteDepartment = async (
    organizationId,
    departmentId
) => {

    const department = await Department.findOne({
        _id: departmentId,
        organizationId,
    });

    if (!department) {
        throw new Error("Department not found.");
    }

    await department.deleteOne();

};

module.exports = {

    getDepartments,

    createDepartment,

    updateDepartment,

    deleteDepartment,

};