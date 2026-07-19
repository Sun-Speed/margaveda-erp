const express = require("express");

const authenticate = require("../../../middleware/authenticate");

const {

    getDepartmentsController,

    createDepartmentController,

    updateDepartmentController,

    deleteDepartmentController,

} = require("./department.controller");

const router = express.Router({
    mergeParams: true,
});

router.get(
    "/",
    authenticate,
    getDepartmentsController
);

router.post(
    "/",
    authenticate,
    createDepartmentController
);

router.put(
    "/:departmentId",
    authenticate,
    updateDepartmentController
);

router.delete(
    "/:departmentId",
    authenticate,
    deleteDepartmentController
);

module.exports = router;