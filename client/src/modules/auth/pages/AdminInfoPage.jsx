import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useSetup } from "@/contexts/SetupContext";

export default function FounderInfoPage() {
  const navigate = useNavigate();
  const { setupData, updateSection } = useSetup();

  const admin = setupData.admin;

  const handleChange = (e) => {
    updateSection("admin", {
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (
      !admin.firstName?.trim() ||
      !admin.email?.trim() ||
      !admin.phone?.trim() ||
      !admin.password
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (admin.password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (admin.password !== admin.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    navigate("/setup/review");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-4xl rounded-[32px] border border-white/10 bg-[#111111]/80 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        {/* Header */}

        <div className="border-b border-white/10 p-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
              <ShieldCheck size={28} className="text-white" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">
                Create Administrator Account
              </h2>

              <p className="text-gray-400 mt-1">
                This will be the first administrator account for your
                management. You can invite additional users later.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}

        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                First Name *
              </label>

              <input
                type="text"
                name="firstName"
                value={admin.firstName || ""}
                onChange={handleChange}
                placeholder="Sunil"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={admin.lastName || ""}
                onChange={handleChange}
                placeholder="R"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                value={admin.email || ""}
                onChange={handleChange}
                placeholder="admin@example.com"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Phone Number *
              </label>

              <input
                type="text"
                name="phone"
                value={admin.phone || ""}
                onChange={handleChange}
                placeholder="+91 9876543210"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Password *
              </label>

              <input
                type="password"
                name="password"
                value={admin.password || ""}
                onChange={handleChange}
                placeholder="Minimum 8 characters"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Confirm Password *
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={admin.confirmPassword || ""}
                onChange={handleChange}
                placeholder="Re-enter password"
                className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password Status */}

          <AnimatePresence>
            {admin.confirmPassword && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-5"
              >
                {admin.password === admin.confirmPassword ? (
                  <p className="text-green-400 text-sm">✓ Passwords match</p>
                ) : (
                  <p className="text-red-400 text-sm">
                    ✗ Passwords do not match
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Information Card */}

          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">
            <h4 className="text-white font-semibold">Administrator Account</h4>

            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              This account will have full access to manage your education group
              and all institutions. Additional administrators, staff, teachers,
              and other users can be added after setup.
            </p>
          </div>

          {/* Footer */}

          <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
            <button
              onClick={() => navigate("/setup/organization")}
              className="text-gray-400 hover:text-white transition"
            >
              ← Previous
            </button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={next}
              className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-blue-400 transition"
            >
              Continue →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
