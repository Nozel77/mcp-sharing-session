import { ArrowRight, Bot, Database, FileCode2, GitPullRequest, KeyRound, UserRound } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const tools = [
  { icon: <GitPullRequest className="size-5" />, label: "GitHub" },
  { icon: <FileCode2 className="size-5" />, label: "File Lokal" },
  { icon: <Database className="size-5" />, label: "Database" },
  { icon: <KeyRound className="size-5" />, label: "API" },
];

export default function Slide02Architecture() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Cara Kerja"
        plain="MCP"
        subtitle="Alur sederhana: kamu minta → AI proses → MCP ambil data dari tools"
      />
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="deck-surface rounded-xl border border-[#234879] p-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="flex size-16 items-center justify-center rounded-xl bg-[#10213d] ring-1 ring-[#234879] text-[#C4E2F5]">
                <UserRound className="size-8" />
              </div>
              <div className="text-sm font-semibold text-white">Kamu</div>
              <p className="text-xs text-[#8fb9d8]">Kasih instruksi</p>
            </div>

            <ArrowRight className="size-6 text-[#4BB8FA]" />

            <div className="flex flex-col items-center gap-2">
              <div className="flex size-16 items-center justify-center rounded-xl bg-[#10213d] ring-1 ring-[#234879] text-[#4BB8FA]">
                <Bot className="size-8" />
              </div>
              <div className="text-sm font-semibold text-white">AI</div>
              <p className="text-xs text-[#8fb9d8]">Proses permintaan</p>
            </div>

            <ArrowRight className="size-6 text-[#4BB8FA]" />

            <div className="flex flex-col items-center gap-2">
              <div className="rounded-xl border-2 border-[#34d399] bg-[#34d399]/10 px-6 py-4">
                <div className="text-sm font-semibold text-[#34d399] text-center mb-3">MCP</div>
                <div className="grid grid-cols-2 gap-2">
                  {tools.map((tool) => (
                    <div key={tool.label} className="flex items-center gap-2 text-[#C4E2F5]">
                      {tool.icon}
                      <span className="text-xs">{tool.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-5">
            <div className="text-sm font-semibold text-white mb-2">1. Kamu minta</div>
            <p className="text-xs leading-relaxed text-[#C4E2F5]">
              "Cek PR terbaru di repo X dan rangkum perubahannya"
            </p>
          </div>
          <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-5">
            <div className="text-sm font-semibold text-white mb-2">2. AI akses via MCP</div>
            <p className="text-xs leading-relaxed text-[#C4E2F5]">
              MCP buka GitHub, baca PR, ambil diff dan komentar
            </p>
          </div>
          <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-5">
            <div className="text-sm font-semibold text-white mb-2">3. AI jawab langsung</div>
            <p className="text-xs leading-relaxed text-[#C4E2F5]">
              Rangkuman perubahan dari data asli, bukan tebakan
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
