import { Bell, CircleHelp, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-[#E5E7EB] bg-white px-8">
      {/* Search */}
      <div className="relative w-[380px]">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="h-11 w-full rounded-xl border border-gray-200 bg-[#F9FAFB] pl-11 pr-4 text-sm outline-none focus:border-[#004AC6]"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Bell size={20} />
        </button>

        <button className="rounded-full p-2 hover:bg-gray-100">
          <CircleHelp size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#004AC6] text-white font-semibold">
            A
          </div>

          <div>
            <p className="text-sm font-semibold text-[#111827]">
              Admin User
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}