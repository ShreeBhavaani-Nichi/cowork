import {
  CalendarDays,
  Building2,
  TriangleAlert,
  UserCheck,
  CalendarX,
  CircleCheck,
  UserPlus,
} from "lucide-react";

export interface Activity {
  id: number;
  icon: any;
  iconBg: string;
  iconColor: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  time: string;
}

export const activities: Activity[] = [
  {
    id: 1,
    icon: CalendarDays,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    title: (
      <>
        <strong>Chaithra Rani H. B</strong> booked{" "}
        <span className="font-semibold text-blue-600">
          Meeting Room 1
        </span>
      </>
    ),
    subtitle: "July 2, 2026, 2:00 PM - 4:00 PM",
    time: "11:45 AM",
  },

  {
    id: 2,
    icon: Building2,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: (
      <>
        <strong>Nichi-In Software Solutions</strong> completed enterprise
        team onboarding.
      </>
    ),
    subtitle: "Premium Office Suite",
    time: "10:15 AM",
  },

  {
    id: 3,
    icon: TriangleAlert,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    title: (
      <>
        Ticket #5102 raised:{" "}
        <strong className="text-rose-600">
          HVAC temperature control issue
        </strong>
      </>
    ),
    subtitle: "Reported by Yeshwanth I. N. • Zone A",
    time: "09:30 AM",
  },

  {
    id: 4,
    icon: UserCheck,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: (
      <>
        Visitor <strong>Amit Sharma</strong> checked in at Reception.
      </>
    ),
    subtitle: "Host: Narendra Kumar • Nichi-In Software Solutions",
    time: "08:45 AM",
  },

  {
    id: 5,
    icon: CalendarX,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    title: (
      <>
        <strong>Rajendra Patnashetty</strong> cancelled booking for{" "}
        <span className="font-semibold">
          Meeting Room 3
        </span>
      </>
    ),
    subtitle: "Freed up 2 hours of availability.",
    time: "Jul 1",
  },

  {
    id: 6,
    icon: CircleCheck,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    title: (
      <>
        Ticket #5089 resolved:{" "}
        <strong>Projector connectivity in Meeting Room 2</strong>
      </>
    ),
    subtitle: "Closed by IT Support Team • Zone A",
    time: "Jun 30",
  },

  {
    id: 7,
    icon: UserPlus,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    title: (
      <>
        <strong>Harish Kumar R</strong> registered as a new Hot Desk member.
      </>
    ),
    subtitle: "Access activated for Zone A • Monthly Pass",
    time: "Jun 28",
  },
];