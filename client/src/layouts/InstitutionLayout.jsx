import { Outlet } from "react-router-dom";

import Header from "@/components/layout/Header";
import InstitutionSidebar from "@/components/layout/InstitutionSidebar";

import { InstitutionProvider } from "@/contexts/InstitutionContext";

export default function InstitutionLayout() {
  return (
    <InstitutionProvider>
      <div className="flex min-h-screen">
        <InstitutionSidebar />

        <div className="flex-1 flex flex-col">
          <Header />

          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </InstitutionProvider>
  );
}
