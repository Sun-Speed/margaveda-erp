import { useAuth } from "@/contexts/AuthContext";

export default function FounderDashboard() {
  const { user } = useAuth();

  const organization = JSON.parse(sessionStorage.getItem("organization"));

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Welcome {user.firstName}</h1>

      <p className="mt-3">Organization : {organization.name}</p>

      <div className="grid md:grid-cols-4 gap-5 mt-10">
        <div className="border rounded-xl p-5">
          Students
          <h2 className="text-3xl mt-3">0</h2>
        </div>

        <div className="border rounded-xl p-5">
          Teachers
          <h2 className="text-3xl mt-3">0</h2>
        </div>

        <div className="border rounded-xl p-5">
          Revenue
          <h2 className="text-3xl mt-3">₹0</h2>
        </div>

        <div className="border rounded-xl p-5">
          Attendance
          <h2 className="text-3xl mt-3">0%</h2>
        </div>
      </div>
    </div>
  );
}
