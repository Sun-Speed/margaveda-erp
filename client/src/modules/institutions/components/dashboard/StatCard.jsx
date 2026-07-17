import React from "react";
import { motion } from "framer-motion";

export default function StatCard({ title, value, icon: Icon, color = "blue", subtitle }) {
  // Refined palette for glass-morphism
  const colorStyles = {
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    red: "text-red-400 bg-red-500/10 border-red-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] shadow-2xl transition-all duration-300 hover:border-white/20"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400 tracking-wide uppercase">{title}</p>
          <h2 className="text-4xl font-bold text-white mt-3 tracking-tight">{value}</h2>
          {subtitle && <p className="text-xs mt-3 text-gray-500 font-medium">{subtitle}</p>}
        </div>

        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${colorStyles[color] || colorStyles.blue}`}>
          <Icon size={24} />
        </div>
      </div>
    </motion.div>
  );
}