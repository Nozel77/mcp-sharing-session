import { MessageSquare, RotateCcw, Settings2, Terminal } from "lucide-react";
import type { ReactNode } from "react";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const context7Command = `codex mcp add context7 -- npx -y @upstash/context7-mcp`;
const pilotPrompt = `Baca router, controller, service, dan model untuk endpoint ini.
Cocokkan request schema dengan OpenAPI atau payload contoh.
Tulis root cause, patch kecil, dan command verifikasi yang relevan.`;

export default function Slide07GetStarted() {
  return (
    <SlideWrapper>
      <SectionTitle gradient="Cara" plain="Memulai" subtitle="Contoh setup Context7 MCP untuk Codex CLI" />
      <div className="grid gap-4 md:grid-cols-2">
        <StepCard
          number="1"
          icon={<Terminal className="size-5" />}
          title="Siapkan Codex CLI"
          body="Pastikan Codex CLI sudah terinstall dan login. MCP config tersimpan di ~/.codex/config.toml atau .codex/config.toml untuk project trusted."
        >
          <CodeBlock code="codex login" label="auth" />
        </StepCard>
        <StepCard
          number="2"
          icon={<Settings2 className="size-5" />}
          title="Install Context7 MCP"
          body="Tambahkan Context7 sebagai MCP server. Context7 membantu Codex mengambil dokumentasi library terbaru saat coding."
        >
          <CodeBlock code={context7Command} label="terminal" />
        </StepCard>
        <StepCard
          number="3"
          icon={<RotateCcw className="size-5" />}
          title="Cek Server Aktif"
          body="Buka Codex TUI dan gunakan slash command untuk melihat daftar MCP server yang aktif."
        >
          <CodeBlock code="/mcp" label="codex tui" />
        </StepCard>
        <StepCard
          number="4"
          icon={<MessageSquare className="size-5" />}
          title="Mulai Gunakan Context7"
          body="Minta Codex memakai Context7 saat butuh dokumentasi framework atau library yang up-to-date."
        >
          <div className="flex flex-wrap gap-2">
            {[
              "Gunakan Context7 untuk cek docs Next.js terbaru",
              "Cari pattern TanStack Query dari dokumentasi terbaru",
            ].map((prompt) => (
              <span
                key={prompt}
                className="rounded-full border border-[#234879] bg-[#0b1b33] px-3 py-1 text-[10px] text-[#C4E2F5]"
              >
                {prompt}
              </span>
            ))}
          </div>
        </StepCard>
      </div>
    </SlideWrapper>
  );
}

function StepCard({
  number,
  icon,
  title,
  body,
  children,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <div className="deck-surface rounded-xl border border-[#234879] p-5">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-full bg-[#1591DC]/18 text-sm font-bold text-[#4BB8FA] ring-1 ring-[#4BB8FA]/35">
          {number}
        </span>
        <div className="text-[#4BB8FA]">{icon}</div>
      </div>
      <InfoCard icon={icon} title={title} description={body} className="border-0 bg-transparent p-0 hover:bg-transparent" />
      {children ? <div className="mt-4">{children}</div> : null}
    </div>
  );
}
