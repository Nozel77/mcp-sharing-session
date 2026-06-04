"use client";

import { cn } from "@/lib/utils";

export function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="fixed left-6 top-1/2 z-30 flex -translate-y-1/2 flex-col items-center gap-2">
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
