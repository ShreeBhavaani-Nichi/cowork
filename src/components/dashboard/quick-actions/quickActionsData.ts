import {
  UserPlus,
  DoorOpen,
  Megaphone,
  FileText,
} from "lucide-react";

export interface QuickAction {
  id: number;
  title: string;
  icon: any;
  iconBg: string;
  hoverBg: string;
  hoverBorder: string;
  iconHover: string;
}

export const quickActions: QuickAction[] = [
  {
    id: 1,
    title: "Add Member",
    icon: UserPlus,
    iconBg: "bg-white",
    hoverBg: "hover:bg-blue-50",
    hoverBorder: "hover:border-blue-100",
    iconHover: "group-hover:text-blue-600",
  },
  {
    id: 2,
    title: "Book Room",
    icon: DoorOpen,
    iconBg: "bg-white",
    hoverBg: "hover:bg-indigo-50",
    hoverBorder: "hover:border-indigo-100",
    iconHover: "group-hover:text-indigo-600",
  },
  {
    id: 3,
    title: "Announce",
    icon: Megaphone,
    iconBg: "bg-white",
    hoverBg: "hover:bg-emerald-50",
    hoverBorder: "hover:border-emerald-100",
    iconHover: "group-hover:text-emerald-600",
  },
  {
    id: 4,
    title: "Reports",
    icon: FileText,
    iconBg: "bg-white",
    hoverBg: "hover:bg-purple-50",
    hoverBorder: "hover:border-purple-100",
    iconHover: "group-hover:text-purple-600",
  },
];