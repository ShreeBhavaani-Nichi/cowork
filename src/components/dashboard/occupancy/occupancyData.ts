export interface Occupancy {
  id: number;
  label: string;
  percentage: number;
  textColor: string;
  gradient: string;
}

export const occupancyData: Occupancy[] = [
  {
    id: 1,
    label: "Internal Workspaces",
    percentage: 32,
    textColor: "text-blue-600",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    label: "External Workspaces",
    percentage: 22,
    textColor: "text-emerald-600",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    id: 3,
    label: "Meeting Rooms",
    percentage: 100,
    textColor: "text-slate-800",
    gradient: "from-slate-600 to-slate-800",
  },
];