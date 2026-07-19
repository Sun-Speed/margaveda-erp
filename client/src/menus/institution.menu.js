import {
    LayoutDashboard,
    GraduationCap,
    UserCog,
    Building,
    BookOpen,
    ClipboardCheck,
    IndianRupee,
    BarChart3,
    Settings,
} from "lucide-react";

const institutionMenu = [

    {
        title: "Dashboard",
        path: "dashboard",
        icon: LayoutDashboard,
    },

    {
        title: "Academics",
        path: "academics",
        icon: GraduationCap,
    },

    {
        title: "Students",
        path: "students",
        icon: GraduationCap,
    },

    {
        title: "Teachers",
        path: "teachers",
        icon: UserCog,
    },

    {
        title: "Departments",
        path: "departments",
        icon: Building,
    },

    {
        title: "Courses",
        path: "courses",
        icon: BookOpen,
    },

    {
        title: "Attendance",
        path: "attendance",
        icon: ClipboardCheck,
    },

    {
        title: "Fees",
        path: "fees",
        icon: IndianRupee,
    },

    {
        title: "Reports",
        path: "reports",
        icon: BarChart3,
    },

    {
        title: "Settings",
        path: "settings",
        icon: Settings,
    },

];

export default institutionMenu;