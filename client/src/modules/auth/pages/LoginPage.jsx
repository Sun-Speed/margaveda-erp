import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { loginUser } from "../services/auth.service";
import { useAuth } from "@/contexts/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ login: "", password: "" });

  const features = [
    { title: "Blockchain Records", desc: "Immutable, secure academic credentials." },
    { title: "AI Career Paths", desc: "Intelligent roadmap for every student." },
    { title: "Cloud-Native ERP", desc: "Manage institutions with modern speed." }
  ];

  async function submit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await loginUser(form);
      login(response);
      navigate("/app/dashboard", { replace: true });
    } catch (error) {
      alert(error?.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col md:flex-row overflow-hidden relative">
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Left: Value Proposition Section */}
      <div className="hidden md:flex flex-1 flex-col justify-center px-20 z-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-6xl font-extrabold tracking-tighter leading-tight">
            MargaVeda <br/> <span className="text-gray-500">ERP Suite</span>
          </h1>
          <p className="mt-8 text-xl text-gray-400 max-w-md">
            The next generation of institutional management. Secure, decentralized, and built for the future of learning.
          </p>
          
          <div className="mt-12 space-y-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * i }}>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right: Login Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="w-full max-w-md bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-10 rounded-[32px] shadow-2xl"
        >
          <h2 className="text-2xl font-bold">Sign In</h2>
          <p className="text-gray-400 mt-2 text-sm">Enter your credentials to continue.</p>

          <form onSubmit={submit} className="space-y-6 mt-8">
            <input 
              name="login" placeholder="Email or Phone" value={form.login} onChange={(e) => setForm({...form, login: e.target.value})}
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" 
            />
            <input 
              type="password" name="password" placeholder="Password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})}
              className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all" 
            />
            <button 
              type="submit" disabled={loading}
              className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-all active:scale-[0.98]"
            >
              {loading ? "Authorizing..." : "Access MargaVeda"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}