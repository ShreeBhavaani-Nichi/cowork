import { MoreVertical } from "lucide-react";

import Card from "@/components/common/Card";

import OccupancyBar from "./OccupancyBar";
import { occupancyData } from "./occupancyData";

export default function SpaceOccupancy() {
  return (
    <Card className="flex-1 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold tracking-tight text-slate-900">
          Space Occupancy
        </h3>

        <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-5">
        {occupancyData.map((item) => (
          <OccupancyBar
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </Card>
  );
}