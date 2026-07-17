import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout() {
  return (
    // Replaced generic gray-900 with your deep #0A0A0A background
    <div className="flex min-h-screen bg-[#0A0A0A] text-white selection:bg-indigo-500/30">
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header />

        {/* 
            Adding overflow-y-auto here ensures that 
            only the main content scrolls, keeping Header/Sidebar fixed.
        */}
        <main className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            <Outlet />
            
          </div>
        </main>
      </div>
    </div>
  );
}