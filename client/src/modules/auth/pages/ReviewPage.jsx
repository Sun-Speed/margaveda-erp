import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSetup } from "@/contexts/SetupContext";
import { createERP } from "../services/setup.service";

export default function ReviewPage() {
  const navigate = useNavigate();
  const { setupData } = useSetup();
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    try {
      setLoading(true);
      const payload = {
        customer: setupData.customer,
        organization: setupData.organization,
        admin: {
          firstName: setupData.admin.firstName,
          lastName: setupData.admin.lastName,
          email: setupData.admin.email,
          phone: setupData.admin.phone,
          password: setupData.admin.password,
        },
      };
      const response = await createERP(payload);
      alert(response.message);
    } catch (error) {
      alert(error?.response?.data?.message || "ERP Creation Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6"
    >
      <div className="w-full max-w-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-10 rounded-[32px] shadow-2xl">
        <h2 className="text-3xl font-bold text-white">Review Details</h2>
        <p className="text-gray-400 mt-2">Verify everything before creating your MargaVeda ERP.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-8 text-sm">
          {[
            { title: "Customer", data: setupData.customer },
            { title: "Organization", data: setupData.organization },
            { title: "Founder", data: setupData.admin }
          ].map((section) => (
            <div key={section.title} className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5">
              <h3 className="font-bold text-white mb-4 text-lg">{section.title}</h3>
              <div className="space-y-2 text-gray-400">
                {Object.entries(section.data).slice(0, 3).map(([key, value]) => (
                  <p key={key}><span className="capitalize">{key}</span>: {value}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <button onClick={() => navigate("/setup/admin")} className="text-gray-400 hover:text-white transition-colors">Previous</button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={submit}
            disabled={loading}
            className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
          >
            {loading ? "Creating..." : "Create ERP"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}