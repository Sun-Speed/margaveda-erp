import { NavLink } from "react-router-dom";
import {
  User,
  Palette,
  MapPin,
  GraduationCap,
  Building2,
  Settings,
} from "lucide-react";

const tabs = [
  {
    title: "Profile",
    path: "profile",
    icon: User,
  },
  {
    title: "Branding",
    path: "branding",
    icon: Palette,
  },
  {
    title: "Address",
    path: "address",
    icon: MapPin,
  },
  {
    title: "Academic",
    path: "academic",
    icon: GraduationCap,
  },
  {
    title: "Structure",
    path: "structure",
    icon: Building2,
  },
  {
    title: "Features",
    path: "features",
    icon: Settings,
  },
];

export default function SettingsTabs() {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex items-center gap-3 min-w-max rounded-2xl border border-white/10 bg-[#111111]/60 backdrop-blur-xl p-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              <span>{tab.title}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}