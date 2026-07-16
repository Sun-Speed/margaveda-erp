import {
  GraduationCap,
  Users,
  Building2,
  BookOpen,
  IndianRupee,
  ClipboardCheck,
} from "lucide-react";

import { useInstitution } from "@/contexts/InstitutionContext";

import StatCard from "../components/dashboard/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function InstitutionDashboardPage() {
  const {
    institution,

    loading,
  } = useInstitution();

  if (loading) {
    return <div className="text-center py-20">Loading Dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">{institution?.name}</h1>

        <p className="text-gray-500 mt-1">{institution?.address}</p>
      </div>

      {/* Statistics */}

      <div
        className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                "
      >
        <StatCard
          title="Students"
          value="0"
          icon={GraduationCap}
          color="blue"
        />

        <StatCard title="Teachers" value="0" icon={Users} color="green" />

        <StatCard
          title="Departments"
          value="0"
          icon={Building2}
          color="orange"
        />

        <StatCard title="Courses" value="0" icon={BookOpen} color="purple" />

        <StatCard
          title="Pending Fees"
          value="₹0"
          icon={IndianRupee}
          color="red"
        />

        <StatCard
          title="Today's Attendance"
          value="0%"
          icon={ClipboardCheck}
          color="yellow"
        />
      </div>

      {/* Bottom Section */}

      <div
        className="
                    grid
                    grid-cols-1
                    xl:grid-cols-3
                    gap-6
                "
      >
        <div className="xl:col-span-2">
          <QuickActions />
        </div>

        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
