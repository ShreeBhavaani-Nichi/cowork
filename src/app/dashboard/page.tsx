import DashboardLayout from "@/components/layout/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-[#111827]">
          Dashboard Overview
        </h1>

        <p className="text-gray-500">
          Welcome to CoWork Manager.
        </p>
      </div>
    </DashboardLayout>
  );
}