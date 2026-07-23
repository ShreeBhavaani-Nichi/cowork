export default function Footer() {
  return (
    <div className="mt-10 text-center">
      <div className="flex items-center justify-center gap-3 text-[13px] text-[#6B7280]">
        <button className="hover:text-[#004AC6]">
          Help Center
        </button>

        <span>•</span>

        <button className="hover:text-[#004AC6]">
          Privacy Policy
        </button>

        <span>•</span>

        <button className="hover:text-[#004AC6]">
          Terms of Use
        </button>
      </div>

      <p className="mt-3 text-[12px] uppercase tracking-wide text-[#9CA3AF]">
        © 2026 NICHI-IN. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}