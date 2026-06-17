import { GitBranch, Layers, Rocket, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const phases = [
  {
    week: "Minggu 1",
    icon: <ShieldCheck className="size-5" />,
    title: "Mulai aman",
    body: "Pakai MCP read-only dulu: baca docs, repo, file. Tidak ada risiko ubah data.",
  },
  {
    week: "Minggu 2",
    icon: <GitBranch className="size-5" />,
    title: "Workflow coding",
    body: "Pakai MCP untuk review PR, cek diff, validasi lint - semua masih read-only.",
  },
  {
    week: "Minggu 3",
    icon: <Layers className="size-5" />,
    title: "Workflow backend",
    body: "Mulai pakai untuk review endpoint, cek API contract, debugging data.",
  },
  {
    week: "Minggu 4",
    icon: <Rocket className="size-5" />,
    title: "Otomasi ringan",
    body: "Mulai aksi write yang aman: draft issue, update dokumen, generate test plan.",
  },
];

export default function Slide09AdoptionRoadmap() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Roadmap"
        plain="Adopsi Tim"
        subtitle="Mulai dari akses aman, lalu naikkan bertahap"
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {phases.map((phase, index) => (
          <article key={phase.week} className="deck-surface rounded-xl border border-[#234879] p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase text-[#8fb9d8]">{phase.week}</div>
              <div className="flex size-10 items-center justify-center rounded-lg bg-[#1591DC]/18 text-[#4BB8FA] ring-1 ring-[#4BB8FA]/35">
                {phase.icon}
              </div>
            </div>
            <div className="mb-3 text-3xl font-bold text-[#4BB8FA]">{index + 1}</div>
            <h2 className="text-base font-semibold text-white">{phase.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#C4E2F5]">{phase.body}</p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-7 max-w-4xl rounded-xl border border-[#4BB8FA]/40 bg-[#0b1b33]/85 px-5 py-4 text-center">
        <p className="text-base font-semibold text-white">
          Target awal: workflow lebih cepat dan aman, bukan otomatisasi penuh.
        </p>
      </div>
    </SlideWrapper>
  );
}
