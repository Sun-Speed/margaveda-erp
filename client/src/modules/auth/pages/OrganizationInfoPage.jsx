import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSetup } from "@/contexts/SetupContext";

const organizationTypes = [
  { value: "SCHOOL", label: "School" },
  { value: "PU_COLLEGE", label: "PU College" },
  { value: "DEGREE_COLLEGE", label: "Degree College" },
  { value: "UNIVERSITY", label: "University" },
  { value: "ACADEMY", label: "Academy" },
  { value: "SKILL_CENTER", label: "Skill Center" },
  { value: "OTHER", label: "Other" },
];

export default function OrganizationInfoPage() {
  const navigate = useNavigate();
  const { setupData, updateSection } = useSetup();
  const { customer, organization } = setupData;

  useEffect(() => {
    if (customer.type === "SINGLE" && customer.name && !organization.name) {
      updateSection("organization", { name: customer.name });
    }
  }, []);

  const handleChange = (e) => {
    updateSection("organization", { [e.target.name]: e.target.value });
  };

  const generateCode = () => {
    if (!organization.name) return;
    const words = organization.name.trim().split(" ");
    const code = words.length === 1 ? words[0].substring(0, 3) : words.map((w) => w[0]).join("");
    updateSection("organization", { code: code.toUpperCase() });
  };

  const next = () => {
    if (!organization.name.trim() || !organization.code.trim() || !organization.type) {
      alert("Please complete all required fields.");
      return;
    }
    navigate("/setup/admin");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6"
    >
      <div className="w-full max-w-3xl bg-[#111111]/80 border border-white/10 backdrop-blur-xl p-10 rounded-[32px] shadow-2xl">
        <h2 className="text-3xl font-bold text-white">Organization Information</h2>
        <p className="text-gray-400 mt-2">Configure your first institution.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Organization Name */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-400 mb-2">Organization Name</label>
            <input name="name" value={organization.name} onChange={handleChange} className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none" />
          </div>

          {/* Type Select */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Organization Type</label>
            <select name="type" value={organization.type} onChange={handleChange} className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-blue-500">
              <option value="">Select Type</option>
              {organizationTypes.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </div>

          {/* Code Generation */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">Organization Code</label>
            <div className="flex gap-2">
              <input name="code" value={organization.code} onChange={handleChange} className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white" />
              <button type="button" onClick={generateCode} className="px-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-white transition-colors">Gen</button>
            </div>
          </div>
          
          {/* Other Fields */}
          <input name="email" placeholder="Organization Email" onChange={handleChange} className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white" />
          <input name="phone" placeholder="Organization Phone" onChange={handleChange} className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white" />
          <div className="md:col-span-2">
            <input name="address" placeholder="Address" onChange={handleChange} className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-white" />
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <button onClick={() => navigate("/setup/customer")} className="text-gray-400 hover:text-white transition-colors">Previous</button>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={next} className="px-8 py-3 bg-white text-black font-semibold rounded-xl">Continue</motion.button>
        </div>
      </div>
    </motion.div>
  );
}