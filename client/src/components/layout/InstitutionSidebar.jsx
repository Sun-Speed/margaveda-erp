import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import institutionMenu from "@/menus/institution.menu";
import { useInstitution } from "@/contexts/InstitutionContext";

export default function InstitutionSidebar() {
  const { institutionId } = useParams();
  const { institution } = useInstitution();

  return (
    <aside className="w-72 h-screen bg-[#0A0A0A] border-r border-white/5 flex flex-col">
      {/* Sidebar Header */}
      <div className="h-[72px] flex flex-col justify-center px-6 border-b border-white/5">
        <h2 className="text-base font-bold text-white tracking-tight truncate">
          {institution?.name || "Institution"}
        </h2>
        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">
          {institution?.type?.replace("_", " ") || "Management"}
        </p>
      </div>

      {/* Navigation Area */}
      <nav className="flex-1 p-4 space-y-1">
        {institutionMenu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={`/institution/${institutionId}/${item.path}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  isActive
                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    : "text-white/40 hover:text-white/80 hover:bg-white/5"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-6 border-t border-white/5">
        <p className="text-[10px] text-white/20 uppercase tracking-widest font-semibold">
          MargaVeda v1.0
        </p>
      </div>
    </aside>
  );
}