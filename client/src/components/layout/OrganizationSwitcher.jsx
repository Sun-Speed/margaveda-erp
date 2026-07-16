import { ChevronDown } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export default function OrganizationSwitcher() {
  const {
    memberships: organizations,
    currentOrganization,
    switchOrganization,
  } = useAuth();

  if (organizations.length <= 1) {
    return (
      <div className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-700">
        {currentOrganization?.name}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-xl
                    bg-gray-100
                    dark:bg-gray-700
                "
      >
        <span>{currentOrganization?.name}</span>

        <ChevronDown size={18} />
      </button>

      <div
        className="
                    absolute
                    hidden
                    group-hover:block
                    mt-2
                    w-72
                    rounded-xl
                    bg-white
                    dark:bg-gray-800
                    border
                    shadow-lg
                    z-50
                "
      >
        {organizations.map((membership) => (
          <button
            key={membership._id}
            onClick={() => switchOrganization(membership.organizationId._id)}
            className="
                            w-full
                            text-left
                            px-4
                            py-3
                            hover:bg-gray-100
                            dark:hover:bg-gray-700
                        "
          >
            {membership.organizationId.name}
          </button>
        ))}
      </div>
    </div>
  );
}
