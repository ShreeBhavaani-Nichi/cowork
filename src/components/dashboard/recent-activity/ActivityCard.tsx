import { Activity } from "./activitiesData";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({
  activity,
}: ActivityCardProps) {
  const Icon = activity.icon;

  const isBadge =
    activity.subtitle === "Premium Office Suite";

  return (
    <div className="group flex cursor-pointer flex-col gap-4 rounded-2xl p-4 transition-all hover:bg-slate-50/80 sm:flex-row sm:items-center">
      {/* Icon */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${activity.iconBg}`}
      >
        <Icon className={`h-6 w-6 ${activity.iconColor}`} />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="text-sm text-slate-800">
          {activity.title}
        </p>

        {isBadge ? (
          <div className="mt-1.5 inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
            {activity.subtitle}
          </div>
        ) : (
          <p className="mt-1 text-xs text-slate-500">
            {activity.subtitle}
          </p>
        )}
      </div>

      {/* Time */}
      <span className="shrink-0 rounded-md bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-400">
        {activity.time}
      </span>
    </div>
  );
}