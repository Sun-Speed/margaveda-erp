import { User, Palette, MapPin, GraduationCap, Building2, Settings } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const SettingsSidebar = () => {
  const { institutionId } = useParams();

  const menus = [
    { name: "Profile", icon: User, path: "profile" },
    { name: "Branding", icon: Palette, path: "identity" },
    { name: "Address", icon: MapPin, path: "address" },
    { name: "Academic", icon: GraduationCap, path: "academic" },
    { name: "Structure", icon: Building2, path: "structure" },
    { name: "Features", icon: Settings, path: "features" },
  ];

  return (
    <aside className="h-full bg-[#0A0A0A] border-r border-white/5 flex flex-col">
      {/* Header */}
      <div className="p-8 border-b border-white/5">
        <h2 className="text-white font-bold text-lg tracking-tight">Settings</h2>
        <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest font-semibold">Configuration</p>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1">
        {menus.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={`/institutions/${institutionId}/settings/${item.path}`}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              <span className="font-medium tracking-wide">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default SettingsSidebar;