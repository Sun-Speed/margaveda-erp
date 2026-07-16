import { useNavigate } from "react-router-dom";

import {
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  ArrowRight,
} from "lucide-react";

import { useInstitution } from "@/contexts/InstitutionContext";

export default function QuickActions() {
  const navigate = useNavigate();

  const { institutionId } = useInstitution();

  const actions = [
    {
      title: "Add Student",
      description: "Register a new student",
      icon: GraduationCap,
      path: `/institution/${institutionId}/students/add`,
    },

    {
      title: "Add Teacher",
      description: "Create teacher account",
      icon: Users,
      path: `/institution/${institutionId}/teachers/add`,
    },

    {
      title: "Add Department",
      description: "Create new department",
      icon: Building2,
      path: `/institution/${institutionId}/departments/add`,
    },

    {
      title: "Add Course",
      description: "Create academic course",
      icon: BookOpen,
      path: `/institution/${institutionId}/courses/add`,
    },
  ];

  return (
    <div
      className="
                bg-white
                dark:bg-gray-800
                rounded-2xl
                border
                dark:border-gray-700
                shadow-sm
                p-6
            "
    >
      <div className="mb-6">
        <h2 className="text-xl font-bold">Quick Actions</h2>

        <p className="text-gray-500 text-sm mt-1">Frequently used shortcuts.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.path)}
              className="
                                    flex
                                    items-center
                                    justify-between
                                    border
                                    dark:border-gray-700
                                    rounded-xl
                                    p-5
                                    hover:border-blue-500
                                    hover:shadow-md
                                    transition
                                "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                                            w-12
                                            h-12
                                            rounded-xl
                                            bg-blue-100
                                            flex
                                            items-center
                                            justify-center
                                        "
                >
                  <Icon size={24} className="text-blue-600" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold">{action.title}</h3>

                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </div>

              <ArrowRight size={18} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
