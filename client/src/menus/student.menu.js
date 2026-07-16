import {
    LayoutDashboard,
    ClipboardCheck,
    BookOpen,
    User,
} from "lucide-react";

const studentMenu = [
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
        title: "Academics",
        path: "/app/academics",
        icon: BookOpen,
    },
    {
        title: "Profile",
        path: "/app/profile",
        icon: User,
    },
];

export default studentMenu;