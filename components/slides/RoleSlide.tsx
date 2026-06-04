import { MessageSquare } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { McpTable, type McpTableRow } from "@/components/shared/McpTable";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export function RoleSlide({
  gradient,
  plain,
  subtitle,
  description,
  rows,
  prompt,
}: {
  gradient: string;
  plain: string;
  subtitle: string;
  description: string;
  rows: McpTableRow[];
  prompt: string;
}) {
  return (
    <SlideWrapper>
      <SectionTitle gradient={gradient} plain={plain} subtitle={subtitle} />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <McpTable rows={rows} />
        <div className="space-y-4">
          <div className="rounded-xl border border-[#1e2a3a] bg-[#111827] p-5 text-sm leading-6 text-[#94a3b8]">
            {description}
          </div>
          <InfoCard
            icon={<MessageSquare className="size-5" />}
            title="Contoh Prompt"
            description={<span className="italic">&quot;{prompt}&quot;</span>}
          />
        </div>
      </div>
    </SlideWrapper>
  );
}
