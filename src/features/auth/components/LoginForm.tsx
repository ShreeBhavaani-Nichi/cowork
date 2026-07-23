"use client";

import { useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-3.5">

      {/* Email */}

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-[13px] font-bold text-[#0B1C30]"
        >
          Email Address
        </label>

        <div className="relative">

          <Mail
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#434655]"
          />

          <input
            id="email"
            type="email"
            placeholder="admin@cowork.com"
            className="h-10 w-full rounded-xl border border-[#C3C6D7] bg-white pl-11 pr-4 text-[13px] text-[#0B1C30] placeholder:text-gray-400 transition focus:border-[#004AC6] focus:outline-none"
          />

        </div>
      </div>

      {/* Password */}

      <div>
        <label
          htmlFor="password"
          className="mb-1.5 block text-[13px] font-bold text-[#0B1C30]"
        >
          Password
        </label>

        <div className="relative">

          <Lock
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#434655]"
          />

          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="h-10 w-full rounded-xl border border-[#C3C6D7] bg-white pl-11 pr-11 text-[13px] text-[#0B1C30] placeholder:text-gray-400 transition focus:border-[#004AC6] focus:outline-none"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-[#434655] transition hover:text-[#004AC6]"
          >
            {showPassword ? (
              <EyeOff size={19} />
            ) : (
              <Eye size={19} />
            )}
          </button>

        </div>
      </div>

      {/* Options */}

      <div className="flex items-center justify-between gap-3">

        <label className="flex cursor-pointer items-center gap-2">

          <input
            type="checkbox"
            className="h-4 w-4 rounded border-[#C3C6D7] accent-[#004AC6]"
          />

          <span className="text-[11px] text-[#434655]">
            Remember me
          </span>

        </label>

        <button
          type="button"
          className="whitespace-nowrap text-[11px] font-bold text-[#004AC6] hover:underline"
        >
          Forgot password?
        </button>

      </div>

      {/* Button */}

      <button
        type="submit"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#004AC6] text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#003EA8] active:scale-[0.98]"
      >
        <span>Sign In</span>

        <ArrowRight size={20} />
      </button>

    </form>
  );
}