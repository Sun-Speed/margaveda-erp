import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function SetupLayout() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden p-6">
      
      {/* BACKGROUND DEPTH: Floating Ambient Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px]" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px]" 
      />

      {/* CENTRALIZED FORM CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-[#0A0A0A]/50 backdrop-blur-2xl border border-white/5 rounded-[48px] p-12 shadow-[0_0_80px_-20px_rgba(0,0,0,0.5)]"
      >
        {/* Subtle Inner Glow Border */}
        <div className="absolute inset-0 rounded-[48px] border border-white/5" />
        
        {/* Form Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-block px-4 py-1.5 mb-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            MargaVeda Setup Sequence
          </motion.div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Configure Institution</h1>
          <p className="text-gray-500 mt-2">Initializing the foundation of your digital campus.</p>
        </div>

        {/* Dynamic Outlet */}
        <div className="relative z-10">
          <Outlet />
        </div>

        {/* Minimal Footer */}
        <div className="mt-16 text-center">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
          <p className="mt-6 text-[9px] text-gray-700 uppercase tracking-[0.4em] font-semibold">
            SECURE. DECENTRALIZED. INTELLIGENT.
          </p>
        </div>
      </motion.div>
    </div>
  );
}