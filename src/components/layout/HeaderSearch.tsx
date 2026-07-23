import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <div className="relative w-[340px]">
      <Search
        size={18}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-[#8A94A6]"
      />

      <input
        type="text"
        placeholder="Search anything..."
        className="h-11 w-full rounded-2xl border border-[#E4E8F1] bg-[#F8FAFD] pl-14 pr-4 text-[15px] text-[#111827] outline-none transition focus:border-[#004AC6]"
      />
    </div>
  );
}