import { NavLink, useParams } from "react-router-dom";

import institutionMenu from "@/menus/institution.menu";
import { useInstitution } from "@/contexts/InstitutionContext";

export default function InstitutionSidebar() {
  const { institutionId } = useParams();
  const { institution } = useInstitution();

  return (
    <aside className="w-72 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="h-[72px] flex items-center px-6 border-b">
        <div className="h-[72px] px-6 border-b flex flex-col justify-center">

    <h2 className="font-bold text-lg">

        {

            institution?.name ||

            "Institution"

        }

    </h2>

    <p className="text-xs text-gray-500">

        {

            institution?.type

        }

    </p>

</div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {institutionMenu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={`/app/institutions/${institutionId}/${item.path}`}
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
