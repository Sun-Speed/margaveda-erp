import React from "react";
import { motion } from "framer-motion";

const SettingsCard = ({ title, description, children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 rounded-[32px] overflow-hidden shadow-2xl"
    >
      {/* Header Section */}
      <div className="border-b border-white/5 p-8">
        <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
        <p className="mt-1 text-sm text-gray-400">{description}</p>
      </div>

      {/* Content Section */}
      <div className="p-8">
        {children}
      </div>
    </motion.div>
  );
};

export default SettingsCard;