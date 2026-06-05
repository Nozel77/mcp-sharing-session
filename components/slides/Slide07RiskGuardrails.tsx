import { AlertTriangle, CheckCircle2, Database, KeyRound, ShieldCheck } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const guardrails = [
  ["Read-only dulu", "Mulai dari akses baca untuk docs, repo, issue, atau data staging sebelum memberi izin write."],
  ["Least privilege", "Token/API key hanya diberi scope yang benar-benar dibutuhkan oleh workflow."],
  ["Approval action", "Aksi penting seperti update ticket, write file, query mutasi, atau deploy tetap perlu konfirmasi user."],
  ["Audit & review", "Output AI tetap direview, terutama untuk data produksi, security, dan keputusan bisnis."],
];

export default function Slide07RiskGuardrails() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Risiko &"
        plain="Guardrails"
        subtitle="MCP kuat karena terhubung, jadi aksesnya harus sengaja dibatasi"
      />
      <div className="grid gap-5 lg:grid-cols-[1fr_1.35fr]">
        <div className="space-y-4">
          <InfoCard
            icon={<AlertTriangle className="size-5" />}
            title="AI tetap bisa salah"
            description="MCP memberi konteks asli, tapi interpretasi dan rekomendasi tetap harus divalidasi."
          />
          <InfoCard
            icon={<Database className="size-5" />}
            title="Data sensitif perlu policy"
            description="Jangan hubungkan produksi atau PII tanpa aturan akses, masking, dan approval yang jelas."
          />
          <InfoCard
            icon={<KeyRound className="size-5" />}
            title="Credential bukan untuk prompt"
            description="Token disimpan di env/config, bukan diketik ke chat atau disebar ke dokumen."
          />
        </div>
        <div className="deck-surface rounded-xl border border-[#234879] p-5">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-[#34d399]/12 text-[#34d399] ring-1 ring-[#34d399]/30">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Prinsip aman untuk tim</h2>
              <p className="text-xs text-[#8fb9d8]">Mulai kecil, jelas izin aksesnya, dan tetap ada review manusia.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {guardrails.map(([title, body]) => (
              <div key={title} className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle2 className="size-4 text-[#34d399]" />
                  {title}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#C4E2F5]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
