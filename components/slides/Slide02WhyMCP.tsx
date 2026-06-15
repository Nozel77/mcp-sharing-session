import { Check, X } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const items = [
  ["Kamu copy-paste isi file ke chat", "AI baca file langsung sesuai izin"],
  ["Kamu buka email/kalender manual", "AI ambil konteks dari tools"],
  ["Kamu salin diff GitHub ke chat", "AI baca repo, PR, issue langsung"],
  ["Kamu update tiket satu per satu", "AI siapkan draft update tiket"],
  ["Kamu copy hasil query database", "AI jalankan query read-only terkontrol"],
];

export default function Slide02WhyMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Kenapa Butuh"
        plain="MCP?"
        subtitle="Dari chatbot pasif jadi asisten kerja yang aktif"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <CapabilityCard tone="red" title="Sebelum MCP" subtitle="AI cuma bantu dari teks yang kamu ketik" />
        <CapabilityCard tone="green" title="Pakai MCP" subtitle="AI kerja langsung di sistem yang kamu pakai" />
      </div>
      <div className="mx-auto mt-6 max-w-4xl rounded-lg border border-[#c084fc]/30 bg-[#2e1065]/25 px-4 py-4 text-center text-base text-[#ddd6fe] md:mt-8 md:px-6">
        MCP ubah AI dari sekadar chatbot jadi asisten kerja yang terhubung langsung ke tools kamu.
      </div>
    </SlideWrapper>
  );
}

function CapabilityCard({ tone, title, subtitle }: { tone: "red" | "green"; title: string; subtitle: string }) {
  const positive = tone === "green";

  return (
    <div className={`rounded-lg border p-4 sm:p-6 ${positive ? "border-green-900/50 bg-green-950/10" : "border-red-900/50 bg-red-950/10"}`}>
      <h2 className={`text-xl font-semibold ${positive ? "text-green-400" : "text-red-400"}`}>
        {positive ? "✓" : "×"} {title}
      </h2>
      <p className="mt-2 text-sm text-[#8fb9d8]">{subtitle}</p>
      <ul className="mt-6 space-y-3">
        {items.map(([before, after]) => (
          <li key={before} className="flex items-center gap-3 text-sm text-[#C4E2F5]">
            {positive ? <Check className="size-4 text-green-400" /> : <X className="size-4 text-red-400" />}
            {positive ? after : before}
          </li>
        ))}
      </ul>
    </div>
  );
}
