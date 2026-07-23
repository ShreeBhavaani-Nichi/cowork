import { QuickAction } from "./quickActionsData";

interface QuickActionCardProps {
  action: QuickAction;
}

export default function QuickActionCard({
  action,
}: QuickActionCardProps) {
  const Icon = action.icon;

  return (
    <button
      className={`group flex flex-col items-center justify-center rounded-2xl border border-transparent bg-slate-50 p-4 transition-all duration-300 ${action.hoverBg} ${action.hoverBorder}`}
    >
      <div
        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full ${action.iconBg} shadow-sm transition-transform group-hover:scale-110`}
      >
        <Icon
          className={`h-5 w-5 text-slate-600 transition-colors ${action.iconHover}`}
        />
      </div>

      <span className="text-xs font-semibold text-slate-700">
        {action.title}
      </span>
    </button>
  );
}