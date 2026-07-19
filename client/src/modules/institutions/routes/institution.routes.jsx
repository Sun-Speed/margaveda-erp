import { Routes, Route, Navigate } from "react-router-dom";

import InstitutionLayout from "@/layouts/InstitutionLayout";

// settings pages...
import InstitutionDashboardPage from "../dashboard/pages/InstitutionDashboardPage";

import InstitutionSettingsPage from "../settings/dashboard/pages/InstitutionSettingsPage";
import ProfileSettingsPage from "../settings/profile/pages/ProfileSettingsPage";
import IdentityPage from "@/modules/institutions/settings/identity/pages/IdentityPage";
import AddressPage from "@/modules/institutions/settings/address/pages/AddressPage";
import AcademicPage from "@/modules/institutions/settings/academic/pages/AcademicPage";
import GeneralPage from "@/modules/institutions/settings/general/pages/GeneralPage";
import SystemPage from "@/modules/institutions/settings/system/pages/SystemPage";

// academic pages
import AcademicOverviewPage from "../academics/dashboard/pages/AcademicPage";
import OverviewPage from "../academics/overview/pages/OverviewPage";

export default function InstitutionRoutes() {
  return (
    <Routes>
      <Route element={<InstitutionLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<InstitutionDashboardPage />} />

        <Route path="settings" element={<InstitutionSettingsPage />}>
          <Route index element={<Navigate to="profile" replace />} />

          <Route path="profile" element={<ProfileSettingsPage />} />

          <Route path="identity" element={<IdentityPage />} />

          <Route path="address" element={<AddressPage />} />

          <Route path="academic" element={<AcademicPage />} />

          <Route path="general" element={<GeneralPage />} />

          <Route path="system" element={<SystemPage />} />
        </Route>

        <Route path="academics" element={<AcademicOverviewPage />}>
          <Route index element={<Navigate to="overview" replace />} />

          <Route path="overview" element={<OverviewPage />} />

          {/* <Route path="identity" element={<IdentityPage />} />

          <Route path="address" element={<AddressPage />} />

          <Route path="academic" element={<AcademicPage />} />

          <Route path="general" element={<GeneralPage />} />

          <Route path="system" element={<SystemPage />} /> */}
        </Route>


      </Route>
    </Routes>
  );
}
