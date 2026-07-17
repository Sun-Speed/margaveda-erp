import { GraduationCap, Users, Building2, BookOpen, IndianRupee, ClipboardCheck } from "lucide-react";
import { useInstitution } from "@/contexts/InstitutionContext";
import { motion } from "framer-motion";

// Ensure you update your StatCard component to use the same backdrop-blur classes
import StatCard from "../components/dashboard/StatCard"; 
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function InstitutionDashboardPage() {
  const { institution, loading } = useInstitution();


if (loading) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center gap-6">
      {/* Decorative Prism Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-24 h-24 rounded-full bg-blue-600 blur-[60px]"
      />

      {/* Loading Text with Shimmer Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <h2 className="text-xl font-bold text-white tracking-widest uppercase">MargaVeda</h2>
        <motion.p 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-[10px] text-blue-400 mt-2 tracking-[0.2em] uppercase"
        >
          Initializing Secure Gateway
        </motion.p>
      </motion.div>
    </div>
  );
}

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="p-8 space-y-8 bg-[#0A0A0A] min-h-screen text-white"
    >
      {/* Header with Glass Effect */}
      <div className="backdrop-blur-xl bg-[#111111]/60 border border-white/10 p-8 rounded-[32px]">
        <h1 className="text-4xl font-extrabold tracking-tight">{institution?.name}</h1>
        <p className="text-gray-400 mt-2 flex items-center gap-2">
          <Building2 size={16} /> {institution?.address}
        </p>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { title: "Students", value: "0", icon: GraduationCap, color: "blue" },
          { title: "Teachers", value: "0", icon: Users, color: "emerald" },
          { title: "Departments", value: "0", icon: Building2, color: "orange" },
          { title: "Courses", value: "0", icon: BookOpen, color: "purple" },
          { title: "Pending Fees", value: "₹0", icon: IndianRupee, color: "red" },
          { title: "Today's Attendance", value: "0%", icon: ClipboardCheck, color: "amber" },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: i * 0.05 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Bottom Section: Quick Actions & Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[32px]">
          <QuickActions />
        </div>
        <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[32px]">
          <RecentActivity />
        </div>
      </div>
    </motion.div>
  );
}