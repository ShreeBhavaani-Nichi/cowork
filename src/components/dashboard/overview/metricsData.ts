import {
  Users,
  Footprints,
  DoorOpen,
  Wrench,
  TrendingUp,
  Clock3,
  TriangleAlert,
} from "lucide-react";

export interface Metric {
  id: number;
  title: string;
  value: string;
  subtitle: string;

  icon: any;
  statusIcon: any;

  iconBg: string;
  iconColor: string;

  subtitleColor: string;
}

export const metrics: Metric[] = [
  {
    id: 1,
    title: "Total Members",
    value: "18",
    subtitle: "+4% from last month",

    icon: Users,
    statusIcon: TrendingUp,

    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",

    subtitleColor: "text-emerald-600",
  },

  {
    id: 2,
    title: "Visitors Today",
    value: "14",
    subtitle: "+6 expected later",

    icon: Footprints,
    statusIcon: TrendingUp,

    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",

    subtitleColor: "text-emerald-600",
  },

  {
    id: 3,
    title: "Available Rooms",
    value: "6 / 6",
    subtitle: "Next booking in 1h 0m",

    icon: DoorOpen,
    statusIcon: Clock3,

    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",

    subtitleColor: "text-slate-500",
  },

  {
    id: 4,
    title: "Open Tickets",
    value: "3",
    subtitle: "1 high priority",

    icon: Wrench,
    statusIcon: TriangleAlert,

    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",

    subtitleColor: "text-rose-600",
  },
];