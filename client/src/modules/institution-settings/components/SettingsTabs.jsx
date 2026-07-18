import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Palette,
  MapPin,
  GraduationCap,
  Building2,
  Settings,
} from "lucide-react";

const tabs = [
  { title: "Profile", path: "profile", icon: User },
  { title: "Branding", path: "identity", icon: Palette },
  { title: "Address", path: "address", icon: MapPin },
  { title: "Academic", path: "academic", icon: GraduationCap },
  { title: "General", path: "general", icon: Building2 },
  { title: "System", path: "system", icon: Settings },
];

export default function SettingsTabs() {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex items-center gap-1 min-w-max rounded-2xl border border-white/5 bg-[#111111]/60 backdrop-blur-xl p-2 relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          
          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `relative flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-300 z-10 ${
                  isActive ? "text-indigo-400" : "text-white/40 hover:text-white/80"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* The sliding background animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/20 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon size={18} />
                  <span>{tab.title}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}