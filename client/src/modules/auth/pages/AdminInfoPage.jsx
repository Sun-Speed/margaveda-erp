import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSetup } from "@/contexts/SetupContext";

export default function FounderInfoPage() {
  const navigate = useNavigate();
  const { setupData, updateSection } = useSetup();
  const admin = setupData.admin;

  const handleChange = (e) => {
    updateSection("admin", { [e.target.name]: e.target.value });
  };

  const next = () => {
    if (!admin.firstName || !admin.email || !admin.phone || !admin.password) {
      alert("Please fill all required fields.");
      return;
    }
    if (admin.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
    if (admin.password !== admin.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    navigate("/setup/review");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6"
    >
      <div className="w-full max-w-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-10 rounded-[32px] shadow-2xl">
        <h2 className="text-3xl font-bold text-white">Founder Information</h2>
        <p className="text-gray-400 mt-2">Create the first account that will manage your ERP.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {["firstName", "lastName", "email", "phone", "password", "confirmPassword"].map((field) => (
            <div key={field} className={field === "confirmPassword" || field === "password" ? "" : ""}>
              <label className="block text-sm text-gray-400 mb-2 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                value={admin[field] || ""}
                onChange={handleChange}
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors"
              />
            </div>
          ))}
        </div>

        <AnimatePresence>
          {admin.confirmPassword && (
            <motion.p 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className={`mt-4 text-sm ${admin.password === admin.confirmPassword ? "text-green-500" : "text-red-500"}`}
            >
              {admin.password === admin.confirmPassword ? "✓ Passwords match" : "✗ Passwords do not match"}
            </motion.p>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-10">
          <button onClick={() => navigate("/setup/organization")} className="text-gray-400 hover:text-white transition-colors">Previous</button>
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            onClick={next} 
            className="px-8 py-3 bg-white text-black font-semibold rounded-xl"
          >
            Continue
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}