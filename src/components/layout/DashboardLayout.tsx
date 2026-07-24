import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="h-screen bg-[#F6F8FC]">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="ml-[305px]">
        {/* Fixed Header */}
        <Header />

        {/* Scrollable Content */}
        <main className="pt-[74px] h-screen overflow-y-auto">
          <div className="min-h-[calc(100vh-74px)] px-10 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}