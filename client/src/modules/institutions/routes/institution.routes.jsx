import { Routes, Route, Navigate } from "react-router-dom";

import InstitutionLayout from "@/layouts/InstitutionLayout";

// pages...
import InstitutionDashboardPage from "../pages/InstitutionDashboardPage";

import InstitutionSettingsPage from "../../institution-settings/pages/InstitutionSettingsPage";
import ProfileSettingsPage from "../../institution-settings/pages/ProfileSettingsPage";

export default function InstitutionRoutes() {
    return (
        <Routes>

            <Route element={<InstitutionLayout />}>

                <Route
                    index
                    element={<Navigate to="dashboard" replace />}
                />

                <Route
                    path="dashboard"
                    element={<InstitutionDashboardPage />}
                />

                {/* Students */}

                {/* <Route path="students" element={<StudentListPage />} /> */}

                {/* Teachers */}

                {/* Departments */}

                {/* Courses */}

                {/* Attendance */}

                {/* Fees */}

                {/* Reports */}

                <Route
                    path="settings"
                    element={<InstitutionSettingsPage />}
                >
                    <Route
                        index
                        element={<Navigate to="profile" replace />}
                    />

                    <Route
                        path="profile"
                        element={<ProfileSettingsPage />}
                    />
                </Route>

            </Route>

        </Routes>
    );
}