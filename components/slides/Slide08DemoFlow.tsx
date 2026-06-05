import { Bot, BookOpen, CheckCircle2, Code2, FileSearch, Terminal } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";
import { WorkflowStep } from "@/components/shared/WorkflowStep";

const steps = [
  "User minta Codex cek pattern terbaru Next.js",
  "Context7 MCP mengambil dokumentasi yang relevan",
  "Codex membaca kode lokal dan membandingkan dengan docs",
  "Codex mengusulkan patch, lalu menjalankan lint/build",
  "User review hasil sebelum merge atau deploy",
];

export default function Slide08DemoFlow() {
  return (
    <SlideWrapper>
      <SectionTitle gradient="Demo" plain="Flow" subtitle="Contoh alur singkat saat MCP dipakai dalam sesi coding" />
      <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
        <div className="deck-surface rounded-xl border border-[#234879] p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-[#1591DC]/18 text-[#4BB8FA] ring-1 ring-[#4BB8FA]/35">
              <Bot className="size-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Prompt demo</h2>
              <p className="text-xs text-[#8fb9d8]">Prompt dibuat spesifik: sumber konteks, batas aksi, dan output.</p>
            </div>
          </div>
          <div className="rounded-lg border border-[#234879] bg-[#07101f] p-4">
            <p className="text-sm italic leading-relaxed text-[#C4E2F5]">
              &quot;Gunakan Context7 untuk cek dokumentasi Next.js terbaru. Baca komponen ini, usulkan perbaikan yang
              sesuai docs, terapkan patch kecil, lalu jalankan lint dan build. Jangan ubah file lain.&quot;
            </p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              [<BookOpen key="docs" className="size-4" />, "Docs aktual"],
              [<Code2 key="code" className="size-4" />, "Kode lokal"],
              [<Terminal key="terminal" className="size-4" />, "Verifikasi"],
            ].map(([icon, label]) => (
              <div key={String(label)} className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 px-3 py-3 text-center">
                <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-md bg-[#1591DC]/18 text-[#4BB8FA]">
                  {icon}
                </div>
                <div className="text-xs font-semibold text-[#C4E2F5]">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="deck-surface rounded-xl border border-[#234879] p-5">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
            <FileSearch className="size-4 text-[#4BB8FA]" />
            Alur eksekusi
          </div>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <WorkflowStep key={step} number={index + 1}>
                {step}
              </WorkflowStep>
            ))}
          </ol>
          <div className="mt-5 rounded-lg border border-[#34d399]/35 bg-[#34d399]/10 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#34d399]">
              <CheckCircle2 className="size-4" />
              Inti demo
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#C4E2F5]">
              MCP mengurangi copy-paste konteks. User tetap mengontrol scope, review, dan keputusan akhir.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
