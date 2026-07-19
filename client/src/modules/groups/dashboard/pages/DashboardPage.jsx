import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { Users, GraduationCap, Building2, Wallet } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    { label: "Students", value: "0", icon: Users, color: "text-blue-400" },
    { label: "Teachers", value: "0", icon: GraduationCap, color: "text-emerald-400" },
    { label: "Institutions", value: "1", icon: Building2, color: "text-purple-400" },
    { label: "Revenue", value: "₹0", icon: Wallet, color: "text-amber-400" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] p-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Welcome back, <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{user?.firstName}</span>
        </h1>
        <p className="text-gray-400 mt-2">Your MargaVeda ERP Command Center</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] overflow-hidden hover:border-white/20 transition-all"
          >
            {/* Subtle Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
              <p className="text-gray-400 font-medium">{stat.label}</p>
              <h2 className="text-4xl font-bold text-white mt-2 tracking-tight">{stat.value}</h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for future charts or activity */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
        className="mt-8 bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] h-64 flex items-center justify-center border-dashed border-white/10"
      >
        <p className="text-gray-500 font-medium">Activity graph data will render here</p>
      </motion.div>
    </div>
  );
}