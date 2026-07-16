import { UserPlus, Building2, BookOpen, GraduationCap } from "lucide-react";

export default function RecentActivity() {
  const activities = [
    {
      icon: UserPlus,
      title: "No teachers added yet.",
    },

    {
      icon: GraduationCap,
      title: "No students registered.",
    },

    {
      icon: Building2,
      title: "No departments created.",
    },

    {
      icon: BookOpen,
      title: "No courses available.",
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
        <h2 className="text-xl font-bold">Recent Activity</h2>

        <p className="text-gray-500 text-sm mt-1">
          Latest updates in this institution.
        </p>
      </div>

      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div key={index} className="flex items-center gap-4">
              <div
                className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-gray-100
                                        dark:bg-gray-700
                                        flex
                                        items-center
                                        justify-center
                                    "
              >
                <Icon size={18} />
              </div>

              <div>
                <p className="font-medium">{activity.title}</p>

                <span className="text-xs text-gray-400">Just now</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
