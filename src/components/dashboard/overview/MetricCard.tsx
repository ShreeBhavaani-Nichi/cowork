import Card from "@/components/common/Card";
import { Metric } from "./metricsData";

interface MetricCardProps {
  metric: Metric;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const Icon = metric.icon;
  const StatusIcon = metric.statusIcon;

  return (
    <Card
      hover
      className="group relative overflow-hidden p-6"
    >
      {/* Header */}
      <div className="relative z-10 mb-6 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
          {metric.title}
        </span>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${metric.iconBg}`}
        >
          <Icon className={`h-5 w-5 ${metric.iconColor}`} />
        </div>
      </div>

      {/* Value */}
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">
          {metric.value}
        </h2>

        <div className={`mt-2 flex items-center gap-2 ${metric.subtitleColor}`}>
          <StatusIcon className="h-4 w-4" />

          <span className="text-xs font-medium">
            {metric.subtitle}
          </span>
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-r from-slate-50 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70" />
    </Card>
  );
}