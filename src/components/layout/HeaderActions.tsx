import { Bell, CircleHelp } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="flex items-center">
      {/* Divider */}
      <div className="mr-5 h-8 w-px bg-[#E5E7EB]" />

      {/* Notification */}
      <button className="group relative rounded-full p-2 transition hover:bg-[#F5F7FB]">
        <Bell
          size={21}
          strokeWidth={2}
          className="text-[#374151]"
        />

        <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#DC2626]" />
      </button>

      {/* Help */}
      <button className="ml-3 rounded-full p-2 transition hover:bg-[#F5F7FB]">
        <CircleHelp
          size={21}
          strokeWidth={2}
          className="text-[#374151]"
        />
      </button>

      {/* Divider */}
      <div className="ml-5 h-8 w-px bg-[#E5E7EB]" />
    </div>
  );
}