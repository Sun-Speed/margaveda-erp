import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { useSetup } from "@/contexts/SetupContext";

export default function OrganizationTypePage() {
  const navigate = useNavigate();
  const { updateSection } = useSetup();

  useEffect(() => {
    updateSection("customer", {
      type: "GROUP",
    });
  }, []);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-4xl font-black text-white tracking-tight">
          Create Your Education Group
        </h2>

        <p className="text-blue-400 max-w-2xl">
          Your management account can manage one or multiple institutions.
          Start with your first institution today and add more whenever your
          organization grows.
        </p>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
            <Building2 className="text-white" size={28} />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">
              Education Group
            </h3>

            <p className="text-gray-400">
              One management account for all your institutions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Start with one institution",
            "Add unlimited institutions later",
            "Centralized management",
            "Group reports & analytics",
            "Shared users & permissions",
            "Future-ready architecture",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="text-blue-400" size={20} />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <div className="flex justify-end border-t border-white/5 pt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/setup/customer")}
          className="px-10 py-4 rounded-2xl bg-white text-black font-bold tracking-wider uppercase hover:bg-blue-400 transition-all"
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
}