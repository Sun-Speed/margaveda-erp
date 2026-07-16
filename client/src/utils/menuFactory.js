import superAdminMenu from "@/menus/superAdmin.menu";
import adminMenu from "@/menus/admin.menu";
import teacherMenu from "@/menus/teacher.menu";
import studentMenu from "@/menus/student.menu";

export default function menuFactory(role) {

    switch (role) {

        case "SUPER_ADMIN":
            return superAdminMenu;

        case "ADMIN":
            return adminMenu;

        case "TEACHER":
            return teacherMenu;

        case "STUDENT":
            return studentMenu;

        default:
            return [];
    }

}