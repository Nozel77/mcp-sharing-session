"use client";

import { cn } from "@/lib/utils";

export function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="fixed left-1/2 top-3 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[#234879]/70 bg-[#07101f]/75 px-2.5 py-1.5 backdrop-blur-md md:left-6 md:top-1/2 md:-translate-x-0 md:-translate-y-1/2 md:flex-col md:gap-2 md:border-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={cn(
            "rounded-full transition-all duration-200",
            index === current
              ? "size-2 bg-gradient-to-br from-[#C4E2F5] via-[#4BB8FA] to-[#1591DC] shadow-[0_0_16px_rgba(75,184,250,0.75)]"
              : "size-1.5 bg-[#234879]",
          )}
        />
      ))}
    </div>
  );
}
