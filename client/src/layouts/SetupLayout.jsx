import { Outlet } from "react-router-dom";

export default function SetupLayout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] px-6 py-10">
      <div className="mx-auto w-full max-w-7xl">
        <Outlet />
      </div>
    </div>
  );
}