import { Ban, Brain, Database, LockKeyhole, Puzzle, ShieldAlert } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const misconceptions = [
  [<Brain key="model" className="size-5" />, "Bukan model AI", "MCP tidak membuat model lebih pintar. MCP memberi akses konteks yang lebih relevan."],
  [<Database key="db" className="size-5" />, "Bukan database", "MCP bukan tempat menyimpan data. Server hanya membuka resource atau tool tertentu."],
  [<Puzzle key="agent" className="size-5" />, "Bukan agent framework", "MCP bisa dipakai agent, tapi tidak mengatur planning, memory, atau autonomy sendiri."],
  [<LockKeyhole key="auth" className="size-5" />, "Bukan pengganti auth", "API key, OAuth, RBAC, dan policy tetap perlu disiapkan di sistem sumber."],
];

export default function Slide03NotMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="MCP"
        plain="Bukan Apa?"
        subtitle="Batasan ini penting supaya ekspektasi dan desain akses tidak keliru"
      />
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-[#f87171]/35 bg-[#451a1a]/20 p-5">
          <div className="mb-4 flex items-center gap-3 text-[#fca5a5]">
            <Ban className="size-6" />
            <h2 className="text-lg font-semibold">Miskonsepsi umum</h2>
          </div>
          <p className="text-sm leading-7 text-[#fecaca]">
            MCP bukan izin bebas untuk AI. MCP adalah interface terstruktur. Kontrol tetap harus datang dari scope,
            approval, dan policy tim.
          </p>
          <div className="mt-5 rounded-lg border border-[#fbbf24]/35 bg-[#fbbf24]/10 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#fbbf24]">
              <ShieldAlert className="size-4" />
              Rule praktis
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#C4E2F5]">
              Kalau tindakan itu berisiko saat dilakukan manusia, tindakan itu juga wajib butuh approval saat dilakukan lewat MCP.
            </p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {misconceptions.map(([icon, title, body]) => (
            <article key={String(title)} className="deck-surface rounded-lg border border-[#234879] p-5">
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-[#0b1b33] text-[#4BB8FA] ring-1 ring-[#234879]">
                {icon}
              </div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#C4E2F5]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
