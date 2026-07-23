export default function LogoSection() {
  return (
    <div className="mb-4 text-center">
      <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-[#004AC6]">
        <span
  className="material-symbols-outlined text-[35px] text-white"
  style={{
    fontVariationSettings: "'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48",
  }}
>
          domain
        </span>
      </div>

      <h1 className="text-[22px] font-bold leading-7 tracking-tight text-[#004AC6]">
        CoWork
      </h1>

      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#434655]">
        Manager Portal
      </p>
    </div>
  );
}