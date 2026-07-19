import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import SetupLayout from "@/layouts/SetupLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

// ================= PUBLIC =================

import WelcomePage from "@/modules/auth/pages/WelcomePage";
import LoginPage from "@/modules/auth/pages/LoginPage";

// ================= SETUP =================

import OrganizationTypePage from "@/modules/auth/pages/OrganizationTypePage";
import CustomerInfoPage from "@/modules/auth/pages/CustomerInfoPage";
import OrganizationInfoPage from "@/modules/auth/pages/OrganizationInfoPage";
import AdminInfoPage from "@/modules/auth/pages/AdminInfoPage";
import ReviewPage from "@/modules/auth/pages/ReviewPage";

// ================= GROUP ERP =================

import DashboardPage from "@/modules/groups/dashboard/pages/DashboardPage";
// import DashboardPage from "../modules/groups/dashboard/pages/DashboardPage";

import InstitutionListPage from "@/modules/groups/Institutions/pages/InstitutionListPage";
import AddInstitutionPage from "@/modules/groups/Institutions/pages/AddInstitutionPage";
import EditInstitutionPage from "@/modules/groups/Institutions/pages/EditInstitutionPage";

// ================= MODULE ROUTES =================

import InstitutionRoutes from "@/modules/institutions/routes/institution.routes";

export default function AppRoutes() {
    return (
        <Routes>

            {/* ================= PUBLIC ================= */}

            <Route
                path="/"
                element={<WelcomePage />}
            />

            <Route
                path="/login"
                element={<LoginPage />}
            />

            {/* ================= SETUP ================= */}

            <Route element={<SetupLayout />}>

                <Route
                    path="/setup/type"
                    element={<OrganizationTypePage />}
                />

                <Route
                    path="/setup/customer"
                    element={<CustomerInfoPage />}
                />

                <Route
                    path="/setup/organization"
                    element={<OrganizationInfoPage />}
                />

                <Route
                    path="/setup/admin"
                    element={<AdminInfoPage />}
                />

                <Route
                    path="/setup/review"
                    element={<ReviewPage />}
                />

            </Route>

            {/* ================= PROTECTED ================= */}

            <Route element={<ProtectedRoute />}>

                {/* ========= GROUP ERP ========= */}

                <Route
                    path="/app"
                    element={<DashboardLayout />}
                >

                    <Route
                        index
                        element={<Navigate to="dashboard" replace />}
                    />

                    <Route
                        path="dashboard"
                        element={<DashboardPage />}
                    />

                    <Route
                        path="institutions"
                        element={<InstitutionListPage />}
                    />

                    <Route
                        path="institutions/add"
                        element={<AddInstitutionPage />}
                    />

                    <Route
                        path="institutions/edit/:id"
                        element={<EditInstitutionPage />}
                    />

                    <Route
                        path="users"
                        element={<h1>Users</h1>}
                    />

                    <Route
                        path="reports"
                        element={<h1>Reports</h1>}
                    />

                    <Route
                        path="settings"
                        element={<h1>Group Settings</h1>}
                    />

                </Route>

                {/* ========= INSTITUTION ERP ========= */}

                <Route
                    path="/institution/:institutionId/*"
                    element={<InstitutionRoutes />}
                />

            </Route>

            {/* ================= 404 ================= */}

            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />

        </Routes>
    );
}