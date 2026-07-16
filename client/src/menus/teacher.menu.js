import {
    LayoutDashboard,
    ClipboardCheck,
    GraduationCap,
    User,
} from "lucide-react";

const teacherMenu = [
    {
        title: "Dashboard",
        path: "/app/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Attendance",
        path: "/app/attendance",
        icon: ClipboardCheck,
    },
    {
        title: "Students",
        path: "/app/students",
        icon: GraduationCap,
    },
    {
        title: "Profile",
        path: "/app/profile",
        icon: User,
    },
];

export default teacherMenu;