import { Routes, Route, Navigate } from "react-router-dom";

import SetupLayout from "@/layouts/SetupLayout";

import ProtectedRoute from "./ProtectedRoute";

// Auth Pages
import WelcomePage from "@/modules/auth/pages/WelcomePage";
import LoginPage from "@/modules/auth/pages/LoginPage";
import OrganizationTypePage from "@/modules/auth/pages/OrganizationTypePage";
import CustomerInfoPage from "@/modules/auth/pages/CustomerInfoPage";
import OrganizationInfoPage from "@/modules/auth/pages/OrganizationInfoPage";
import AdminInfoPage from "@/modules/auth/pages/AdminInfoPage";
import ReviewPage from "@/modules/auth/pages/ReviewPage";

// Dashboard
import FounderDashboard from "@/modules/dashboard/pages/FounderDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Welcome */}

      <Route path="/" element={<WelcomePage />} />

      {/* Login */}

      <Route path="/login" element={<LoginPage />} />

      {/* Setup Wizard */}

      <Route element={<SetupLayout />}>
        <Route path="/setup/type" element={<OrganizationTypePage />} />

        <Route path="/setup/customer" element={<CustomerInfoPage />} />

        <Route path="/setup/organization" element={<OrganizationInfoPage />} />

        <Route path="/setup/admin" element={<AdminInfoPage  />} />

        <Route path="/setup/review" element={<ReviewPage />} />
      </Route>

      {/* Dashboard */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <FounderDashboard />
          </ProtectedRoute>
        }
      />

      {/* 404 */}

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
