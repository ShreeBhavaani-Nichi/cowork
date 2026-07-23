import Card from "@/components/common/Card";
import SectionHeader from "@/components/common/SectionHeader";
import ActivityCard from "./ActivityCard";
import { activities } from "./activitiesData";
import { ArrowUpRight } from "lucide-react";

export default function RecentActivity() {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0 lg:col-span-2">
      {/* Header */}
      <div className="border-b border-slate-100 p-6">
        <SectionHeader
          title="Recent Activity"
          action={
            <button className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 transition-colors hover:text-blue-700">
              <span>View All</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          }
        />
      </div>

      {/* Activities */}
      <div className="flex-1 space-y-1 overflow-y-auto p-2">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </Card>
  );
}