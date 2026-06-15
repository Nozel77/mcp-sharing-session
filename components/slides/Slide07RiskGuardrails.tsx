import { AlertTriangle, ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide07RiskGuardrails() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Risiko &"
        plain="Cara Aman Pakai"
        subtitle="MCP powerful, makanya perlu aturan main yang jelas"
      />
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-[#f87171]/40 bg-[#7f1d1d]/15 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-[#7f1d1d]/40 text-[#f87171]">
                <AlertTriangle className="size-6" />
              </div>
              <h2 className="text-lg font-semibold text-[#f87171]">Yang Perlu Diwaspadai</h2>
            </div>
            <ul className="space-y-4">
              <li className="text-sm leading-relaxed text-[#C4E2F5]">
                <span className="font-semibold text-white">AI tetap bisa salah.</span> Jawaban AI perlu direview dulu,
                jangan langsung dipake mentah-mentah.
              </li>
              <li className="text-sm leading-relaxed text-[#C4E2F5]">
                <span className="font-semibold text-white">Data sensitif butuh ekstra hati-hati.</span> Jangan hubungkan
                ke data produksi atau data pribadi tanpa aturan akses yang ketat.
              </li>
              <li className="text-sm leading-relaxed text-[#C4E2F5]">
                <span className="font-semibold text-white">Akses terlalu luas = risiko besar.</span> Kalau AI diberi izin
                terlalu banyak, kesalahan kecil bisa berdampak luas.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#34d399]/40 bg-[#064e3b]/15 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-[#064e3b]/40 text-[#34d399]">
                <ShieldCheck className="size-6" />
              </div>
              <h2 className="text-lg font-semibold text-[#34d399]">Cara Aman Pakai MCP</h2>
            </div>
            <ul className="space-y-4">
              <li className="text-sm leading-relaxed text-[#C4E2F5]">
                <span className="font-semibold text-white">Mulai dari read-only dulu.</span> Kasih akses baca dulu
                (docs, repo, file) sebelum kasih izin ubah data.
              </li>
              <li className="text-sm leading-relaxed text-[#C4E2F5]">
                <span className="font-semibold text-white">Izin seperlunya aja.</span> Kasih akses minimal yang dibutuhkan,
                tidak lebih. Contoh: read repo, bukan admin repo.
              </li>
              <li className="text-sm leading-relaxed text-[#C4E2F5]">
                <span className="font-semibold text-white">Review dulu sebelum eksekusi.</span> Untuk aksi penting
                (update data, kirim notif), review output AI sebelum dijalankan.
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-[#4BB8FA]/40 bg-[#0b1b33]/85 px-6 py-5 text-center">
          <p className="text-base font-semibold text-white">
            Intinya: mulai kecil, jelas batasan aksesnya, dan tetap ada manusia yang review hasil AI.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
