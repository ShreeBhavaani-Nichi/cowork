export default function UserProfile() {
  return (
    <button className="flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-3 py-2 transition hover:bg-[#F8FAFC]">
      <div className="min-w-0 text-right">
        <h3 className="text-[14px] font-semibold leading-5 text-[#111827]">
          Admin User
        </h3>

        <p className="max-w-[145px] truncate text-[12px] text-[#6B7280]">
          likithkumar.dk@nichi.com
        </p>
      </div>

      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C7D2FE] bg-[#EEF4FF] text-[15px] font-semibold text-[#2563EB]">
          AD
        </div>

        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#10B981]" />
      </div>
    </button>
  );
}