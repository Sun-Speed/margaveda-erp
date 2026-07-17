import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import institutionMenu from "@/menus/institution.menu";
import { useInstitution } from "@/contexts/InstitutionContext";

export default function InstitutionSidebar() {
  const { institutionId } = useParams();
  const { institution } = useInstitution();

  return (
    <aside className="w-72 h-screen bg-[#0A0A0A] border-r border-white/5 flex flex-col">
      {/* Brand Header */}
      <div className="h-[80px] flex flex-col justify-center px-8 border-b border-white/5">
        <h2 className="font-bold text-white tracking-tight">
          {institution?.name || "Institution"}
        </h2>
        <p className="text-[10px] text-blue-400 uppercase tracking-widest mt-0.5">
          {institution?.type?.replace("_", " ") || "Management"}
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        {institutionMenu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={`/institution/${institutionId}/${item.path}`}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span className="font-medium tracking-wide">{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
      
      {/* Footer Branding or Version */}
      <div className="p-6 border-t border-white/5">
        <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">MargaVeda v1.0</p>
      </div>
    </aside>
  );
}