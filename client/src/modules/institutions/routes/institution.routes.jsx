import { Routes, Route, Navigate } from "react-router-dom";

import InstitutionLayout from "@/layouts/InstitutionLayout";

// pages...
import InstitutionDashboardPage from "../pages/InstitutionDashboardPage";

import InstitutionSettingsPage from "../../institution-settings/pages/InstitutionSettingsPage";
import ProfileSettingsPage from "../../institution-settings/pages/ProfileSettingsPage";
import IdentityPage from "@/modules/institution-settings/identity/pages/IdentityPage";
import AddressPage from "@/modules/institution-settings/address/pages/AddressPage";
import AcademicPage from "../../institution-settings/academic/pages/AcademicPage";
import GeneralPage from "../../institution-settings/general/pages/GeneralPage";
import SystemPage from "../../institution-settings/system/pages/SystemPage";


export default function InstitutionRoutes() {
  return (
    <Routes>
      <Route element={<InstitutionLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<InstitutionDashboardPage />} />

        {/* Students */}

        {/* <Route path="students" element={<StudentListPage />} /> */}

        {/* Teachers */}

        {/* Departments */}

        {/* Courses */}

        {/* Attendance */}

        {/* Fees */}

        {/* Reports */}

        <Route path="settings" element={<InstitutionSettingsPage />}>
          <Route index element={<Navigate to="profile" replace />} />

          <Route path="profile" element={<ProfileSettingsPage />} />

          <Route path="identity" element={<IdentityPage />} />

          <Route path="address" element={<AddressPage />} />

          <Route path="academic" element={<AcademicPage />} />

          <Route path="general" element={<GeneralPage />} />

          <Route path="system" element={<SystemPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
