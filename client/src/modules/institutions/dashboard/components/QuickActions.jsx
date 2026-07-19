import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, Building2, BookOpen, ArrowRight } from "lucide-react";
import { useInstitution } from "@/contexts/InstitutionContext";

export default function QuickActions() {
  const navigate = useNavigate();
  const { institutionId } = useInstitution();

  const actions = [
    { title: "Add Student", desc: "Register new student", icon: GraduationCap, path: `/institution/${institutionId}/students/add` },
    { title: "Add Teacher", desc: "Create teacher profile", icon: Users, path: `/institution/${institutionId}/teachers/add` },
    { title: "Add Department", desc: "Define department", icon: Building2, path: `/institution/${institutionId}/departments/add` },
    { title: "Add Course", desc: "Create academic course", icon: BookOpen, path: `/institution/${institutionId}/courses/add` },
  ];

  return (
    <div className="bg-[#111111]/60 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
        <p className="text-gray-400 text-sm mt-1">Frequently used management tools.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {actions.map((action, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(action.path)}
            className="group relative flex items-center justify-between bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-blue-400 group-hover:text-white transition-colors">
                <action.icon size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">{action.title}</h3>
                <p className="text-xs text-gray-400">{action.desc}</p>
              </div>
            </div>
            <ArrowRight size={18} className="text-gray-600 group-hover:text-white transition-colors" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}