import { Outlet } from "react-router-dom";

export default function SetupLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg">

        <div className="border-b px-8 py-5">

          <h1 className="text-2xl font-bold">
            MargaVeda ERP
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Education ERP Setup Wizard
          </p>

        </div>

        <div className="p-8">
          <Outlet />
        </div>

      </div>

    </div>
  );
}