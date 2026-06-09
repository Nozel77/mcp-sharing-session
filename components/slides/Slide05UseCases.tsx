import { Bug, Database, FileCheck2, GitPullRequest, Route } from "lucide-react";
import { WorkflowStep } from "@/components/shared/WorkflowStep";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const experiences = [
  {
    title: "Saat validasi request backend gagal",
    context: "Yang sering aku cek: Pydantic model, controller, router, dan contoh payload.",
    icon: <Bug className="size-5" />,
    accent: "text-[#f87171]",
    steps: [
      "Aku mulai dari error response atau field yang ditolak backend",
      "Minta AI baca file model request, controller, dan router terkait",
      "Bandingkan field wajib/opsional dengan payload yang dikirim frontend",
      "Hasil yang aku pakai: penyebab validasi gagal + patch kecil yang masih aku review",
    ],
  },
  {
    title: "Saat endpoint baru perlu dicocokkan",
    context: "Contoh kasus: flow finance, voucher, atau admin academic yang banyak role dan payload.",
    icon: <Route className="size-5" />,
    accent: "text-[#4BB8FA]",
    steps: [
      "Aku minta AI telusuri route prefix dan path endpoint",
      "AI bantu cek request model, response helper, dan dependency service",
      "Aku validasi apakah naming, status code, dan payload sudah konsisten",
      "Hasil yang aku pakai: checklist mismatch sebelum endpoint dites manual",
    ],
  },
  {
    title: "Saat butuh memahami data nyata",
    context: "MCP MongoDB paling kepakai untuk inspect schema dan sample document read-only.",
    icon: <Database className="size-5" />,
    accent: "text-[#fbbf24]",
    steps: [
      "Aku ambil sample document dari collection yang relevan",
      "AI bantu rangkum field aktual, nullable, array/object, dan pola value",
      "Aku cocokkan dengan asumsi di service atau aggregation pipeline",
      "Hasil yang aku pakai: query/verifikasi read-only sebelum ubah logic",
    ],
  },
  {
    title: "Saat review perubahan backend",
    context: "Fokusku bukan minta AI approve PR, tapi mempercepat baca dampak perubahan.",
    icon: <GitPullRequest className="size-5" />,
    accent: "text-[#34d399]",
    steps: [
      "Aku minta AI baca diff dan file sekitar yang ikut terdampak",
      "AI bantu tandai area rawan: auth, validation, transaction, dan error handling",
      "Aku cek ulang temuan yang punya risiko behavior regression",
      "Hasil yang aku pakai: komentar review singkat + daftar test yang perlu ada",
    ],
  },
];

export default function Slide05UseCases() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Daily"
        plain="Backend Experience"
        subtitle="Ini pola yang benar-benar paling kepakai di workflow backend-ku"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {experiences.map((item) => (
          <article key={item.title} className="deck-surface rounded-lg border border-[#234879] p-4 sm:p-5">
            <div className="mb-4 flex gap-3">
              <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0b1b33] ring-1 ring-[#234879] ${item.accent}`}>
                {item.icon}
              </div>
              <div>
                <h2 className={`text-sm font-semibold ${item.accent}`}>{item.title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-[#8fb9d8]">{item.context}</p>
              </div>
            </div>
            <ol className="space-y-3">
              {item.steps.map((step, index) => (
                <WorkflowStep key={step} number={index + 1}>
                  {step}
                </WorkflowStep>
              ))}
            </ol>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-6 flex max-w-4xl items-center gap-3 rounded-lg border border-[#4BB8FA]/35 bg-[#0b1b33]/85 px-4 py-3 text-xs leading-relaxed text-[#C4E2F5]">
        <FileCheck2 className="size-4 shrink-0 text-[#4BB8FA]" />
        <p>
          Intinya: MCP paling terasa bukan karena AI langsung benar, tapi karena aku tidak perlu copy-paste banyak konteks
          backend sebelum mulai analisis.
        </p>
      </div>
    </SlideWrapper>
  );
}
