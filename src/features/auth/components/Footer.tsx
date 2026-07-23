export default function Footer() {
  return (
    <footer className="mt-4 text-center">

      <div className="flex flex-wrap items-center justify-center gap-2.5 text-[10.5px] text-[#434655]">

        <button className="hover:text-[#004AC6]">
          Help Center
        </button>

        <span className="h-1 w-1 rounded-full bg-gray-300" />

        <button className="hover:text-[#004AC6]">
          Privacy Policy
        </button>

        <span className="h-1 w-1 rounded-full bg-gray-300" />

        <button className="hover:text-[#004AC6]">
          Terms of Use
        </button>

      </div>

      <p className="mt-2 text-[8.5px] uppercase tracking-widest text-gray-400">
        © 2026 NICHI-IN. ALL RIGHTS RESERVED.
      </p>

    </footer>
  );
}