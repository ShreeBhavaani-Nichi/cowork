import MetricCard from "./MetricCard";
import { metrics } from "./metricsData";

export default function MetricsGrid() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.id}
          metric={metric}
        />
      ))}
    </section>
  );
}