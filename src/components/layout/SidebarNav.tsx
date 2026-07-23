"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { sidebarItems } from "./sidebarData";

export default function SidebarNav() {
  const [masterOpen, setMasterOpen] = useState(true);

  return (
    <nav className="flex-1 overflow-y-auto px-2 py-5">
      <div className="space-y-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const hasChildren = !!item.children;

          return (
            <div key={item.title}>
              <button
                onClick={() =>
                  hasChildren && setMasterOpen((prev) => !prev)
                }
                className={`group relative flex w-full items-center justify-between rounded-xl px-5 py-3 transition-all duration-200 ${
                  item.active
                    ? "bg-[#E8F0FF] text-[#0F4CC9]"
                    : "text-[#394150] hover:bg-[#F5F7FB]"
                }`}
              >
                {/* Active Indicator */}
                {item.active && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#0F4CC9]" />
                )}

                <div className="flex items-center gap-4">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className={
                      item.active
                        ? "text-[#0F4CC9]"
                        : "text-[#4B5563]"
                    }
                  />

                  <span className="text-[16px] font-medium">
                    {item.title}
                  </span>
                </div>

                {hasChildren &&
                  (masterOpen ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  ))}
              </button>

              {hasChildren && masterOpen && (
                <div className="ml-8 mt-2 space-y-1 border-l border-[#E5E7EB] pl-5">
                  {item.children!.map((child) => {
                    const ChildIcon = child.icon;

                    return (
                      <button
                        key={child.title}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[15px] text-[#5F6B7A] transition hover:bg-[#F6F8FC]"
                      >
                        <ChildIcon
                          size={17}
                          className="text-[#6B7280]"
                        />

                        <span>{child.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}