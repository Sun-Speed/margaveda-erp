import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Layers, Users, Calendar } from "lucide-react";
import AcademicTabs from "../components/AcademicTabs";

export default function AcademicPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Academics</h1>
        <p className="text-gray-400 mt-2">Manage the academic core of your institution.</p>
      </div>

      {/* The new consistent Academic Tabs */}
      <AcademicTabs />

      {/* Sub-pages render here */}
      <Outlet />
    </div>
  );
}