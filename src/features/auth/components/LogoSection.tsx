import { Building2 } from "lucide-react";

export default function LogoSection() {
  return (
    <div className="mb-4 text-center">

      <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-[#004ac6]">
        <Building2
          size={30}
          className="text-white"
          strokeWidth={2.3}
        />
      </div>

      <h1 className="text-[22px] font-bold leading-7 tracking-tight text-[#004ac6]">
        CoWork
      </h1>

      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#434655]">
        Manager Portal
      </p>

    </div>
  );
}