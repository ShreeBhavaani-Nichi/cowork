import {
  LayoutDashboard,
  CalendarDays,
  ClipboardCheck,
  Users,
  UserCog,
  MonitorSmartphone,
  SlidersHorizontal,
  Building2,
  DoorOpen,
  Ticket,
  Megaphone,
  BarChart3,
} from "lucide-react";

export interface SidebarSubItem {
  title: string;
  icon: React.ElementType;
}

export interface SidebarItem {
  title: string;
  icon: React.ElementType;
  active?: boolean;
  children?: SidebarSubItem[];
}

export const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Workspace Bookings",
    icon: CalendarDays,
  },
  {
    title: "MR Bookings",
    icon: ClipboardCheck,
  },
  {
    title: "Visitor Management",
    icon: Users,
  },
  {
    title: "User Management",
    icon: UserCog,
  },
  {
    title: "Reception Dashboard",
    icon: MonitorSmartphone,
  },
  {
    title: "Master Settings",
    icon: SlidersHorizontal,
    children: [
      {
        title: "Workspace",
        icon: Building2,
      },
      {
        title: "Meeting Rooms",
        icon: DoorOpen,
      },
      {
        title: "Support Tickets",
        icon: Ticket,
      },
      {
        title: "Announcements",
        icon: Megaphone,
      },
      {
        title: "Reports & Analytics",
        icon: BarChart3,
      },
    ],
  },
];