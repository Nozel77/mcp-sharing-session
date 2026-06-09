import { Bot, Database, FileCode2, GitPullRequest, KeyRound, Plug, Server, UserRound } from "lucide-react";
import type { ReactNode } from "react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const sources = [
  { icon: <GitPullRequest className="size-4" />, label: "GitHub" },
  { icon: <FileCode2 className="size-4" />, label: "Filesystem" },
  { icon: <Database className="size-4" />, label: "Database" },
  { icon: <KeyRound className="size-4" />, label: "API" },
];

export default function Slide02Architecture() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Arsitektur"
        plain="MCP"
        subtitle="MCP memisahkan AI, koneksi, dan sumber data agar akses bisa dibatasi dan diaudit"
      />
      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="deck-surface rounded-lg border border-[#234879] p-5">
          <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <Node icon={<UserRound className="size-6" />} title="User" body="Memberi instruksi dan approval." tone="text-[#C4E2F5]" />
            <Arrow />
            <Node icon={<Bot className="size-6" />} title="MCP Host" body="Codex, Claude Desktop, atau app AI." tone="text-[#4BB8FA]" />
            <Arrow />
            <Node icon={<Plug className="size-6" />} title="MCP Client" body="Mengelola koneksi per server." tone="text-[#34d399]" />
          </div>
          <div className="my-5 flex justify-center">
            <div className="h-10 w-px bg-[#234879]" />
          </div>
          <div className="mx-auto max-w-3xl rounded-lg border border-[#34d399]/35 bg-[#34d399]/10 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#34d399]">
              <Server className="size-4" />
              MCP Server
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#C4E2F5]">
              Server mengekspos tools, resources, atau prompt. Izin akses ditentukan di config, token, dan approval rule.
            </p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-4">
            {sources.map((source) => (
              <div key={source.label} className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 px-3 py-4 text-center">
                <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-md bg-[#1591DC]/16 text-[#4BB8FA]">
                  {source.icon}
                </div>
                <div className="text-xs font-semibold text-[#C4E2F5]">{source.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {[
            ["Host", "Tempat AI berjalan dan menerima instruksi user."],
            ["Client", "Jembatan koneksi. Biasanya satu client per MCP server."],
            ["Server", "Adapter ke sistem nyata: docs, repo, Figma, DB, atau API."],
            ["Guardrail", "Token scope, read-only mode, human approval, dan audit log."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-4">
              <div className="text-sm font-semibold text-white">{title}</div>
              <p className="mt-1 text-xs leading-relaxed text-[#C4E2F5]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}

function Node({ icon, title, body, tone }: { icon: ReactNode; title: string; body: string; tone: string }) {
  return (
    <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-4 text-center">
      <div className={`mx-auto mb-3 flex size-12 items-center justify-center rounded-lg bg-[#10213d] ring-1 ring-[#234879] ${tone}`}>
        {icon}
      </div>
      <div className="text-sm font-semibold text-white">{title}</div>
      <p className="mt-2 text-xs leading-relaxed text-[#C4E2F5]">{body}</p>
    </div>
  );
}

function Arrow() {
  return <div className="hidden h-px w-8 bg-[#4BB8FA]/60 md:block" />;
}
