import { ArrowRight, Compass, GitBranch, PlayCircle, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const agenda = [
  {
    icon: <Compass className="size-5" />,
    label: "Konsep",
    body: "Apa MCP, arsitektur dasarnya, dan batasannya.",
    accent: "text-[#4BB8FA]",
  },
  {
    icon: <GitBranch className="size-5" />,
    label: "Workflow",
    body: "Use case backend dari pengalaman pribadi, plus before-after tanpa klaim benchmark.",
    accent: "text-[#34d399]",
  },
  {
    icon: <ShieldCheck className="size-5" />,
    label: "Guardrails",
    body: "Scope akses, approval, audit, dan risiko prompt injection.",
    accent: "text-[#fbbf24]",
  },
  {
    icon: <PlayCircle className="size-5" />,
    label: "Demo & Adopsi",
    body: "Setup Context7, demo kecil, lalu roadmap tim 4 minggu.",
    accent: "text-[#c084fc]",
  },
];

export default function Slide01Agenda() {
  return (
    <SlideWrapper>
      <SectionTitle gradient="Alur" plain="Sharing" subtitle="Dari konsep sampai cara aman mencobanya di workflow tim" />
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
        {agenda.map((item, index) => (
          <article key={item.label} className="deck-surface rounded-lg border border-[#234879] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div className={`flex size-11 items-center justify-center rounded-lg bg-[#0b1b33] ring-1 ring-[#234879] ${item.accent}`}>
                {item.icon}
              </div>
              <span className="font-mono text-xs text-[#8fb9d8]">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <h2 className="text-base font-semibold text-white">{item.label}</h2>
            <p className="mt-3 text-xs leading-relaxed text-[#C4E2F5]">{item.body}</p>
            {index < agenda.length - 1 ? (
              <ArrowRight className="mt-5 hidden size-4 text-[#4BB8FA] md:block" />
            ) : null}
          </article>
        ))}
      </div>
      <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-[#8fb9d8]">
        Target sesi ini: semua orang paham kapan MCP berguna, kapan berisiko, dan bagaimana cara memulainya.
      </p>
    </SlideWrapper>
  );
}
