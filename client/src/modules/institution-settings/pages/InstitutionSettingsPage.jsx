import { Outlet } from "react-router-dom";

import SettingsTabs from "../components/SettingsTabs";

export default function InstitutionSettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Institution Settings
        </h1>

        <p className="mt-2 text-gray-400">
          Configure your institution profile, branding, academic structure,
          and system preferences.
        </p>
      </div>

      <SettingsTabs />

      <Outlet />
    </div>
  );
}