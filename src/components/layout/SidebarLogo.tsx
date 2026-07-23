export default function SidebarLogo() {
  return (
    <div className="border-b border-[#E8ECF4] px-7 py-7">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#004AC6] shadow-sm">
          <span
            className="material-symbols-outlined text-[28px] text-white"
            style={{
              fontVariationSettings:
                "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48",
            }}
          >
            domain
          </span>
        </div>

        <div>
          <h1 className="text-[18px] font-bold leading-none text-[#0F4CC9]">
            CoWork Manager
          </h1>

          <p className="mt-2 text-[12px] font-medium text-[#5E6B82]">
            Operational Excellence
          </p>
        </div>
      </div>
    </div>
  );
}