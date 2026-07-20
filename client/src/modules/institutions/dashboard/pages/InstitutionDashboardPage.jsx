import { useInstitution } from "@/contexts/InstitutionContext";
import { motion } from "framer-motion";
import { GraduationCap, Users, Building2, BookOpen, IndianRupee, ClipboardCheck, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext"; 

// Ensure you update your StatCard component to use the same backdrop-blur classes
import StatCard from "../components/StatCard"; 
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";

export default function InstitutionDashboardPage() {
  const { institution, loading } = useInstitution();

  const navigate = useNavigate();
  const { organizationCount } = useAuth();

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


      {/* Expand Your Education Group */}

{organizationCount === 1 && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-[32px] p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
  >
    <div>
      <h2 className="text-2xl font-bold text-white">
        🚀 Expand Your Education Group
      </h2>

      <p className="text-gray-400 mt-3 max-w-2xl">
        You're currently managing a single institution. Add another school,
        college, academy or training center under the same management account
        and manage everything from one place.
      </p>
    </div>

    <button
      onClick={() => navigate("/app/institutions/add")}
      className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white text-black font-semibold hover:bg-blue-400 transition whitespace-nowrap"
    >
      <Plus size={20} />
      Add Institution
    </button>
  </motion.div>
)}

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