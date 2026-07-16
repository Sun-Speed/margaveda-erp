import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import SetupLayout from "@/layouts/SetupLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import InstitutionLayout from "@/layouts/InstitutionLayout";

// Public Pages
import WelcomePage from "@/modules/auth/pages/WelcomePage";
import LoginPage from "@/modules/auth/pages/LoginPage";

// Setup Pages
import OrganizationTypePage from "@/modules/auth/pages/OrganizationTypePage";
import CustomerInfoPage from "@/modules/auth/pages/CustomerInfoPage";
import OrganizationInfoPage from "@/modules/auth/pages/OrganizationInfoPage";
import AdminInfoPage from "@/modules/auth/pages/AdminInfoPage";
import ReviewPage from "@/modules/auth/pages/ReviewPage";

// Group Dashboard
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";

// Institution Module
import InstitutionListPage from "@/modules/institutions/pages/InstitutionListPage";
import AddInstitutionPage from "@/modules/institutions/pages/AddInstitutionPage";
import EditInstitutionPage from "@/modules/institutions/pages/EditInstitutionPage";
import InstitutionDashboardPage from "@/modules/institutions/pages/InstitutionDashboardPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ================= PUBLIC ================= */}

      <Route path="/" element={<WelcomePage />} />

      <Route path="/login" element={<LoginPage />} />

      {/* ================= SETUP ================= */}

      <Route element={<SetupLayout />}>
        <Route path="/setup/type" element={<OrganizationTypePage />} />

        <Route path="/setup/customer" element={<CustomerInfoPage />} />

        <Route path="/setup/organization" element={<OrganizationInfoPage />} />

        <Route path="/setup/admin" element={<AdminInfoPage />} />

        <Route path="/setup/review" element={<ReviewPage />} />
      </Route>

      {/* ================= PROTECTED ================= */}

      <Route element={<ProtectedRoute />}>
        {/* -------- GROUP ERP -------- */}

        <Route path="/app" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<DashboardPage />} />

          <Route path="institutions" element={<InstitutionListPage />} />

          <Route path="institutions/add" element={<AddInstitutionPage />} />

          <Route
            path="institutions/edit/:id"
            element={<EditInstitutionPage />}
          />

          <Route path="users" element={<h1>Users</h1>} />

          <Route path="reports" element={<h1>Reports</h1>} />

          <Route path="settings" element={<h1>Settings</h1>} />
        </Route>

        {/* -------- INSTITUTION ERP -------- */}

        <Route
          path="/institution/:institutionId"
          element={<InstitutionLayout />}
        >
          <Route index element={<Navigate to="dashboard" replace />} />

          <Route path="dashboard" element={<InstitutionDashboardPage />} />

          <Route path="students" element={<h1>Students</h1>} />

          <Route path="teachers" element={<h1>Teachers</h1>} />

          <Route path="departments" element={<h1>Departments</h1>} />

          <Route path="courses" element={<h1>Courses</h1>} />

          <Route path="attendance" element={<h1>Attendance</h1>} />

          <Route path="fees" element={<h1>Fees</h1>} />

          <Route path="reports" element={<h1>Reports</h1>} />

          <Route path="settings" element={<h1>Settings</h1>} />
        </Route>
      </Route>

      {/* ================= 404 ================= */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
