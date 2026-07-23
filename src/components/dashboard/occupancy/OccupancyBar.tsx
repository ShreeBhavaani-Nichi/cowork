import { Occupancy } from "./occupancyData";

interface OccupancyBarProps {
  item: Occupancy;
}

export default function OccupancyBar({
  item,
}: OccupancyBarProps) {
  return (
    <div>
      <div className="mb-2 flex justify-between gap-2 text-sm">
        <span className="font-semibold text-slate-700">
          {item.label}
        </span>

        <span className={`font-bold ${item.textColor}`}>
          {item.percentage}%
        </span>
      </div>

      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
          style={{ width: `${item.percentage}%` }}
        />
      </div>
    </div>
  );
}