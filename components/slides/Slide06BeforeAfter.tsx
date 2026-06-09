import type { ReactNode } from "react";
import { CheckCircle2, Clock, FileSearch, ShieldCheck, XCircle } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const comparisons = [
  {
    title: "Debug bug endpoint",
    before: ["Cari file manual", "Copy potongan kode ke chat", "Bolak-balik cek model dan service", "RCA ditulis setelah konteks terkumpul"],
    after: ["AI baca file terkait langsung", "Konteks controller-service-model lebih cepat terkumpul", "Root cause draft lebih cepat", "Patch tetap aku review manual"],
  },
  {
    title: "Cek konsistensi API",
    before: ["Buka OpenAPI, model, dan controller terpisah", "Cek field satu per satu", "Rawan kelewat field nullable atau naming beda"],
    after: ["OpenAPI dan code dibaca dalam satu sesi", "Mismatch payload lebih cepat kelihatan", "Output jadi checklist per field"],
  },
  {
    title: "Review perubahan backend",
    before: ["Baca diff PR", "Cari dampak ke auth, validation, dan DB", "Tulis komentar review manual"],
    after: ["AI rangkum diff dan file terdampak", "Fokus review pindah ke risiko logic", "Komentar review tetap aku kurasi"],
  },
];

const outcomes = [
  ["Lebih valid", "Karena konteks diambil dari file, contract, atau sample data nyata."],
  ["Lebih cepat", "Terutama di fase mengumpulkan konteks dan membandingkan file."],
  ["Tetap butuh review", "Keputusan akhir, patch, dan akses write tetap di tangan developer."],
];

export default function Slide06BeforeAfter() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Before"
        plain="& After"
        subtitle="Pengalaman pribadi sebagai backend developer: MCP paling membantu saat context gathering"
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {comparisons.map((item) => (
          <article key={item.title} className="deck-surface rounded-lg border border-[#234879] p-4">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <FileSearch className="size-4 text-[#4BB8FA]" />
              {item.title}
            </div>
            <div className="grid gap-3">
              <Column icon={<XCircle className="size-4 text-[#f87171]" />} title="Sebelum MCP" steps={item.before} />
              <Column icon={<CheckCircle2 className="size-4 text-[#34d399]" />} title="Dengan MCP" steps={item.after} />
            </div>
          </article>
        ))}
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {outcomes.map(([title, body], index) => (
          <div key={title} className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
              {index === 0 ? <ShieldCheck className="size-4 text-[#34d399]" /> : <Clock className="size-4 text-[#4BB8FA]" />}
              {title}
            </div>
            <p className="text-xs leading-relaxed text-[#C4E2F5]">{body}</p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}

function Column({ icon, title, steps }: { icon: ReactNode; title: string; steps: string[] }) {
  return (
    <div className="rounded-lg border border-[#234879] bg-[#07101f]/70 p-3">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-[#C4E2F5]">
        {icon}
        {title}
      </div>
      <ol className="space-y-1.5">
        {steps.map((step, index) => (
          <li key={step} className="font-mono text-[11px] leading-relaxed text-[#C4E2F5]">
            {index + 1}. {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
