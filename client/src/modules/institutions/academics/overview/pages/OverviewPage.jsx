import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Layers, Users, Calendar } from "lucide-react";
// import AcademicTabs from "../components/AcademicTabs";


export default function OverviewPage() {
  const stats = [
    { label: "Departments", value: "12", icon: Layers, color: "text-blue-400" },
    { label: "Active Courses", value: "48", icon: BookOpen, color: "text-indigo-400" },
    { label: "Faculty", value: "156", icon: Users, color: "text-purple-400" },
    { label: "Academic Year", value: "2026-27", icon: Calendar, color: "text-emerald-400" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      {/* <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Academic Structure</h1>
        <p className="mt-2 text-gray-400">Manage your institution's curriculum, departments, and academic workflow.</p>
      </div> */}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[#111111]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors">
            <stat.icon className={`mb-3 ${stat.color}`} size={24} />
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* <AcademicTabs/> */}

      {/* Main Content Card - The "Core" of Academics */}
      <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/5 rounded-[32px] p-10">
        <h2 className="text-xl font-bold text-white mb-6">Program Overview</h2>
        
        {/* Placeholder for your academic data list or tree view */}
        <div className="space-y-4">
          <div className="h-20 flex items-center justify-center border border-dashed border-white/10 rounded-2xl text-gray-600">
            Academic structure visualization will appear here...
          </div>
        </div>
      </div>
    </motion.div>
  );
}
