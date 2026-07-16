import { NavLink } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext";
import menuFactory from "@/utils/menuFactory";

export default function Sidebar() {
  const { currentRole } = useAuth();

  const menus = menuFactory(currentRole);

  return (
    <aside className="w-72 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="h-[72px] flex items-center px-6 border-b">
        <h1 className="text-2xl font-bold text-blue-600">MargaVeda</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition

                                    ${
                                      isActive
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                    }`
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
