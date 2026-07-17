import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, School } from "lucide-react"; // Added icons for visual weight
import { useSetup } from "@/contexts/SetupContext";

export default function OrganizationTypePage() {
  const navigate = useNavigate();
  const { setupData, updateSection } = useSetup();
  const selectedType = setupData.customer?.type;

  const options = [
    { id: "SINGLE", title: "Single Institution", desc: "For independent schools, colleges, or academies.", icon: School },
    { id: "GROUP", title: "Education Group", desc: "For multi-campus management and university networks.", icon: Building2 }
  ];

  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="space-y-2">
        <h2 className="text-4xl font-black text-white tracking-tighter">Organization Type</h2>
        <p className="text-blue-400 font-medium tracking-wide">Select your infrastructure scope to initialize system modules.</p>
      </div>

      {/* Selection Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {options.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedType === item.id;
          
          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => updateSection("customer", { type: item.id })}
              className={`relative p-8 rounded-[24px] cursor-pointer border transition-all duration-500 overflow-hidden ${
                isSelected 
                  ? "bg-blue-600/10 border-blue-500/50" 
                  : "bg-white/5 border-white/5 hover:border-white/10"
              }`}
            >
              {/* Subtle background glow effect */}
              {isSelected && <div className="absolute inset-0 bg-blue-500/5 blur-2xl" />}
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${isSelected ? "bg-blue-600 text-white" : "bg-[#1A1A1A] text-gray-500"}`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-xl text-white">{item.title}</h3>
                <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Action Area */}
      <div className="flex justify-end pt-6 border-t border-white/5">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/setup/customer")}
          disabled={!selectedType}
          className={`px-10 py-4 rounded-2xl font-bold tracking-widest uppercase transition-all duration-300 ${
            !selectedType 
              ? "bg-white/5 text-gray-700 cursor-not-allowed" 
              : "bg-white text-black hover:bg-blue-400 hover:shadow-[0_0_40px_-10px_rgba(96,165,250,0.6)]"
          }`}
        >
          Initialize Setup
        </motion.button>
      </div>
    </div>
  );
}