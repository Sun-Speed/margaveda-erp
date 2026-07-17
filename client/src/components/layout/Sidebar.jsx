import { NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import menuFactory from "@/utils/menuFactory";

export default function Sidebar() {
  const { currentRole } = useAuth();
  const menus = menuFactory(currentRole);

  return (
    <aside className="w-72 h-screen bg-[#0A0A0A] border-r border-white/5 flex flex-col">
      {/* Sidebar Header */}
      <div className="h-[72px] flex items-center px-6 border-b border-white/5">
        <h1 className="text-xl font-bold text-white tracking-tight">MargaVeda</h1>
      </div>

      {/* Navigation Area */}
      <nav className="flex-1 p-4 space-y-1">
        {menus.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
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

      {/* Sidebar Footer (Optional - useful for version or help) */}
      <div className="p-6 border-t border-white/5">
        <p className="text-[10px] text-white/20 uppercase tracking-widest font-semibold">
          System v1.0.0
        </p>
      </div>
    </aside>
  );
}