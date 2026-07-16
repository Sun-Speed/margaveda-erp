const ROLES = [
    {
        name: "SUPER_ADMIN",
        description: "Education Group Super Administrator",
    },
    {
        name: "ADMIN",
        description: "Organization Administrator",
    },
    {
        name: "PRINCIPAL",
        description: "Principal",
    },
    {
        name: "HOD",
        description: "Head Of Department",
    },
    {
        name: "TEACHER",
        description: "Teacher",
    },
    {
        name: "ACCOUNTANT",
        description: "Accountant",
    },
    {
        name: "LIBRARIAN",
        description: "Librarian",
    },
    {
        name: "CLERK",
        description: "Clerk",
    },
    {
        name: "RECEPTIONIST",
        description: "Receptionist",
    },
    {
        name: "STUDENT",
        description: "Student",
    },
    {
        name: "PARENT",
        description: "Parent",
    },
];

ROLES.SUPER_ADMIN = "SUPER_ADMIN";
ROLES.ADMIN = "ADMIN";
ROLES.PRINCIPAL = "PRINCIPAL";
ROLES.HOD = "HOD";
ROLES.TEACHER = "TEACHER";
ROLES.ACCOUNTANT = "ACCOUNTANT";
ROLES.LIBRARIAN = "LIBRARIAN";
ROLES.CLERK = "CLERK";
ROLES.RECEPTIONIST = "RECEPTIONIST";
ROLES.STUDENT = "STUDENT";
ROLES.PARENT = "PARENT";

module.exports = ROLES;