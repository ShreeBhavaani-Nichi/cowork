import { Mail, Lock, Eye, ArrowRight } from "lucide-react";

export default function LoginForm() {
  return (
    <div className="mt-8">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-[15px] font-semibold text-slate-800"
        >
          Email Address
        </label>

        <div className="relative">
          <Mail
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            id="email"
            type="email"
            placeholder="admin@cowork.com"
            className="h-[46px] w-full rounded-xl border border-[#CBD5E1] pl-14 pr-4 text-[15px] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#004AC6]"
          />
        </div>
      </div>

      {/* Password */}
      <div className="mt-5">
        <label
          htmlFor="password"
          className="mb-2 block text-[15px] font-semibold text-slate-800"
        >
          Password
        </label>

        <div className="relative">
          <Lock
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="h-[46px] w-full rounded-xl border border-[#CBD5E1] pl-14 pr-14 text-[15px] placeholder:text-[#9CA3AF] outline-none transition focus:border-[#004AC6]"
          />

          <Eye
            size={18}
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          />
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="mt-4 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 accent-[#004AC6]"
          />
          Remember me
        </label>

        <button
          type="button"
          className="text-sm font-semibold text-[#004AC6]"
        >
          Forgot password?
        </button>
      </div>

      {/* Button */}
      <button className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#004AC6] font-semibold text-white transition hover:bg-[#0039A6]">
        Sign In
        <ArrowRight size={18} />
      </button>
    </div>
  );
}