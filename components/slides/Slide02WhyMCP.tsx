import { Check, X } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const items = [
  ["Membuka file di komputermu", "Membuka file di komputermu"],
  ["Mengecek email atau kalender", "Mengecek email atau kalender"],
  ["Membaca kode di repository GitHub", "Membaca kode di repository GitHub"],
  ["Mengupdate tiket di Jira", "Mengupdate tiket di Jira"],
  ["Menjalankan query database", "Menjalankan query database"],
];

export default function Slide02WhyMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Mengapa MCP"
        plain="Penting?"
        subtitle="Dari chatbot pasif menjadi asisten kerja yang aktif"
      />
      <div className="grid gap-6 md:grid-cols-2">
        <CapabilityCard tone="red" title="Sebelum MCP" subtitle="AI hanya bisa membantu dari teks yang kamu ketik" />
        <CapabilityCard tone="green" title="Dengan MCP" subtitle="AI bekerja langsung di sistem yang kamu pakai" />
      </div>
      <div className="mx-auto mt-8 max-w-4xl rounded-xl border border-purple-800/30 bg-gradient-to-r from-purple-950 to-blue-950 px-6 py-4 text-center text-sm text-[#c4b5fd]">
        MCP mengubah AI dari sekadar chatbot menjadi asisten kerja yang aktif dan terhubung.
      </div>
    </SlideWrapper>
  );
}

function CapabilityCard({ tone, title, subtitle }: { tone: "red" | "green"; title: string; subtitle: string }) {
  const positive = tone === "green";

  return (
    <div className={`rounded-xl border p-6 ${positive ? "border-green-900/50 bg-green-950/10" : "border-red-900/50 bg-red-950/10"}`}>
      <h2 className={`text-xl font-semibold ${positive ? "text-green-400" : "text-red-400"}`}>
        {positive ? "✓" : "x"} {title}
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
