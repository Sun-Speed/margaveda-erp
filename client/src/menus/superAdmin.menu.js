import {
    LayoutDashboard,
    Building2,
    Users,
    GraduationCap,
    UserCog,
    ClipboardCheck,
    IndianRupee,
    BarChart3,
    Settings,
} from "lucide-react";

const superAdminMenu = [
    {
        title: "Dashboard",
        path: "/app/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Institutions",
        path: "/app/institutions",
        icon: Building2,
    },
    {
        title: "Users",
        path: "/app/users",
        icon: Users,
    },
    {
        title: "Students",
        path: "/app/students",
        icon: GraduationCap,
    },
    {
        title: "Teachers",
        path: "/app/teachers",
        icon: UserCog,
    },
    {
        title: "Attendance",
        path: "/app/attendance",
        icon: ClipboardCheck,
    },
    {
        title: "Fees",
        path: "/app/fees",
        icon: IndianRupee,
    },
    {
        title: "Reports",
        path: "/app/reports",
        icon: BarChart3,
    },
    {
        title: "Settings",
        path: "/app/settings",
        icon: Settings,
    },
];

export default superAdminMenu;