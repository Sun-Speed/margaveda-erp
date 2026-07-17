import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import InstitutionSidebar from "@/components/layout/InstitutionSidebar";
import { InstitutionProvider } from "@/contexts/InstitutionContext";

export default function InstitutionLayout() {
  return (
    <InstitutionProvider>
      {/* 1. Parent: Set to screen height and hide overflow so the page doesn't double-scroll */}
      <div className="flex h-screen bg-[#0A0A0A] text-white overflow-hidden">
        
        {/* 2. Sidebar: Fixed height, does not scroll */}
        <div className="w-72 flex-shrink-0">
          <InstitutionSidebar />
        </div>

        {/* 3. Right side container: Flex column to stack Header and Main */}
        <div className="flex-1 flex flex-col overflow-hidden">
          
          {/* Header: Will stay at the top */}
          <Header />

          {/* 4. Main: This is the ONLY part that scrolls */}
          <main className="flex-1 overflow-y-auto p-8">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </InstitutionProvider>
  );
}