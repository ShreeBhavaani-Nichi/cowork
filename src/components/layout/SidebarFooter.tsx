import { LogOut, Settings } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="border-t border-[#E8ECF4] p-5">
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#374151] transition-colors hover:bg-[#F8FAFC]">
          <Settings size={18} />
          <span>Settings</span>
        </button>

        <button className="flex items-center justify-center gap-2 rounded-xl border border-[#FECACA] bg-white px-4 py-3 text-sm font-medium text-[#DC2626] transition-colors hover:bg-[#FEF2F2]">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}