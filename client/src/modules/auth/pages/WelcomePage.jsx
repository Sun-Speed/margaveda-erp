import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative selection:bg-blue-500/30">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Floating Glass Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-8 py-4 flex items-center justify-between shadow-xl">
        <h2 className="text-xl font-bold tracking-tighter">MargaVeda</h2>
        <div className="flex gap-6 text-sm font-medium text-gray-300">
          <button className="hover:text-white transition-colors">Features</button>
          <button className="hover:text-white transition-colors">Solutions</button>
          <button onClick={() => navigate("/login")} className="hover:text-white transition-colors">Login</button>
        </div>
        <button 
          onClick={() => navigate("/setup/type")}
          className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform"
        >
          Register
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
            Education, <br />Re-engineered.
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            The intelligent, cloud-native ERP designed to bring clarity, transparency, and structure to the modern academic experience.
          </p>

          <div className="flex gap-4 justify-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/setup/type")}
              className="px-8 py-4 bg-white text-black font-semibold rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Get Started Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}