import { cn } from "@/lib/utils";

const styles = {
  official: "border-[#4BB8FA]/35 bg-[#4BB8FA]/14 text-[#C4E2F5]",
  community: "border-[#1591DC]/40 bg-[#1591DC]/16 text-[#A9DDFC]",
  warning: "border-[#C4E2F5]/35 bg-[#C4E2F5]/12 text-[#C4E2F5]",
};

const labels = {
  official: "Official",
  community: "Community",
  warning: "Catatan",
};

export type Status = "official" | "community" | "warning";

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium",
        styles[status],
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {labels[status]}
    </span>
  );
}
