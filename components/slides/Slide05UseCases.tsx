import { Bug, Database, GitPullRequest, Route } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const experiences = [
  {
    title: "Saat validasi backend gagal",
    context: "Yang sering aku cek: model request, controller, router, dan contoh payload.",
    icon: <Bug className="size-5" />,
    accent: "text-[#f87171]",
    example: "Mulai dari error response → AI baca file model/controller/router → bandingkan field wajib vs payload → dapat penyebab + saran fix",
  },
  {
    title: "Saat endpoint baru perlu dicocokkan",
    context: "Kasus: flow finance, voucher, admin academic yang kompleks dengan banyak role.",
    icon: <Route className="size-5" />,
    accent: "text-[#4BB8FA]",
    example: "AI telusuri route & path → cek model request, response, dependency → validasi naming & status code konsisten → dapat checklist sebelum test manual",
  },
  {
    title: "Saat butuh memahami data nyata",
    context: "MCP MongoDB paling kepakai untuk inspect schema dan sample document read-only.",
    icon: <Database className="size-5" />,
    accent: "text-[#fbbf24]",
    example: "Ambil sample document → AI rangkum field aktual, nullable, array/object → cocokkan dengan asumsi di service → dapat query read-only untuk verifikasi",
  },
  {
    title: "Saat review perubahan backend",
    context: "Fokus bukan minta AI approve PR, tapi mempercepat baca dampak perubahan.",
    icon: <GitPullRequest className="size-5" />,
    accent: "text-[#34d399]",
    example: "AI baca diff & file terdampak → tandai area rawan: auth, validation, transaction → cek ulang risiko behavior regression → dapat komentar review + daftar test yang perlu ada",
  },
];

export default function Slide05UseCases() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Pemakaian"
        plain="Backend Sehari-hari"
        subtitle="Pola yang paling kepakai untuk workflow backend"
      />
      <div className="grid gap-5 md:grid-cols-2">
        {experiences.map((item) => (
          <article key={item.title} className="deck-surface rounded-lg border border-[#234879] p-5">
            <div className="mb-4 flex gap-3">
              <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0b1b33] ring-1 ring-[#234879] ${item.accent}`}>
                {item.icon}
              </div>
              <div>
                <h2 className={`text-sm font-semibold ${item.accent}`}>{item.title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-[#8fb9d8]">{item.context}</p>
              </div>
            </div>
            <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/50 p-4">
              <p className="text-xs leading-relaxed text-[#C4E2F5]">{item.example}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-6 max-w-4xl rounded-lg border border-[#4BB8FA]/35 bg-[#0b1b33]/85 px-5 py-4 text-center">
        <p className="text-sm leading-relaxed text-[#C4E2F5]">
          Intinya: MCP paling terasa bukan karena AI langsung benar, tapi karena tidak perlu copy-paste banyak konteks backend sebelum mulai analisis.
        </p>
      </div>
    </SlideWrapper>
  );
}
