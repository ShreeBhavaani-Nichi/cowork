import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-slate-200",
        "bg-white",
        "shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
        "transition-all duration-300",
        hover &&
          "hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        className
      )}
    >
      {children}
    </div>
  );
}