import type { ReactNode } from "react";
import { CheckCircle2, FileSearch, XCircle } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const comparisons = [
  {
    title: "Debug bug endpoint",
    before: ["Cari file manual", "Copy kode ke chat", "Bolak-balik cek model dan service", "RCA ditulis setelah konteks terkumpul"],
    after: ["AI baca file terkait langsung", "Konteks terkumpul lebih cepat", "Root cause draft lebih cepat", "Patch tetap direview manual"],
  },
  {
    title: "Cek konsistensi API",
    before: ["Buka OpenAPI, model, controller terpisah", "Cek field satu per satu", "Rawan kelewat field"],
    after: ["OpenAPI dan code dibaca bareng", "Mismatch lebih cepat kelihatan", "Output jadi checklist"],
  },
  {
    title: "Review perubahan backend",
    before: ["Baca diff PR manual", "Cari dampak ke auth, validation, DB", "Tulis komentar review manual"],
    after: ["AI rangkum diff dan dampak", "Fokus ke risiko logic", "Komentar tetap dikurasi"],
  },
];

export default function Slide06BeforeAfter() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Sebelum"
        plain="& Sesudah MCP"
        subtitle="Pengalaman pribadi: MCP paling bantu saat kumpulin konteks"
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {comparisons.map((item) => (
          <article key={item.title} className="deck-surface rounded-lg border border-[#234879] p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
              <FileSearch className="size-4 text-[#4BB8FA]" />
              {item.title}
            </div>
            <div className="grid gap-4">
              <Column icon={<XCircle className="size-4 text-[#f87171]" />} title="Sebelum" steps={item.before} />
              <Column icon={<CheckCircle2 className="size-4 text-[#34d399]" />} title="Sesudah" steps={item.after} />
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-6 max-w-4xl rounded-lg border border-[#4BB8FA]/35 bg-[#0b1b33]/85 px-5 py-4 text-center">
        <p className="text-sm leading-relaxed text-[#C4E2F5]">
          <span className="font-semibold text-white">Lebih cepat kumpulin konteks, lebih valid karena data asli</span> - tapi keputusan akhir tetap di tangan developer.
        </p>
      </div>
    </SlideWrapper>
  );
}

function Column({ icon, title, steps }: { icon: ReactNode; title: string; steps: string[] }) {
  return (
    <div className="rounded-lg border border-[#234879] bg-[#07101f]/70 p-3">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold text-[#C4E2F5]">
        {icon}
        {title}
      </div>
      <ol className="space-y-2">
        {steps.map((step, index) => (
          <li key={step} className="text-xs leading-relaxed text-[#C4E2F5]">
            {index + 1}. {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
