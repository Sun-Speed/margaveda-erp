import { useAuth } from "@/contexts/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome, {user?.firstName}</h1>

      <p className="text-gray-500 mt-2">MargaVeda ERP Dashboard</p>

      <div className="grid md:grid-cols-4 gap-5 mt-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <p>Students</p>

          <h2 className="text-3xl font-bold mt-2">0</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p>Teachers</p>

          <h2 className="text-3xl font-bold mt-2">0</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p>Institutions</p>

          <h2 className="text-3xl font-bold mt-2">1</h2>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p>Revenue</p>

          <h2 className="text-3xl font-bold mt-2">₹0</h2>
        </div>
      </div>
    </div>
  );
}
