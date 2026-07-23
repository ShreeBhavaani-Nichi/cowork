import RecentActivity from "@/components/dashboard/recent-activity/RecentActivity";
import MetricsGrid from "./MetricsGrid";
import QuickActions from "@/components/dashboard/quick-actions/QuickActions";
import SpaceOccupancy from "@/components/dashboard/occupancy/SpaceOccupancy";

export default function DashboardOverview() {
  return (
    <section className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-[32px] font-bold tracking-tight text-slate-900">
          Dashboard Overview
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Today's operational metrics at a glance.
        </p>
      </div>

      {/* Metric Cards */}
      <MetricsGrid />

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Section */}
        <RecentActivity />

        {/* Right Sidebar */}
        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-400">
            <QuickActions />
          </div>

          <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center text-slate-400">
            <SpaceOccupancy />
          </div>
        </div>
      </div>
    </section>
  );
}