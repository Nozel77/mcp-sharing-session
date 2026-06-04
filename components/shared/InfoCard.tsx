import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function InfoCard({
  icon,
  title,
  description,
  className,
}: {
  icon: ReactNode;
  title: string;
  description: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "deck-surface flex gap-4 rounded-xl border border-[#234879] p-5 transition-all duration-200 hover:border-[#4BB8FA]/70 hover:bg-[#15325c]",
        className,
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#C4E2F5]/18 via-[#4BB8FA]/22 to-[#1591DC]/22 p-2 text-[#4BB8FA] ring-1 ring-[#4BB8FA]/35">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <div className="mt-1 text-xs leading-relaxed text-[#C4E2F5]">{description}</div>
      </div>
    </article>
  );
}
