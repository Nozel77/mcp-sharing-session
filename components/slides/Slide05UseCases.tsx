import { WorkflowStep } from "@/components/shared/WorkflowStep";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const workflows = [
  {
    title: "FE: UI Consistency Check",
    accent: "text-[#4BB8FA]",
    steps: [
      "Ambil semua PR yang menyentuh /components hari ini",
      "Bandingkan Button.tsx dengan spesifikasi Figma",
      "Review PR #88 - fokus aksesibilitas & responsivitas",
      "Buat tiket untuk perbedaan desain yang ditemukan",
    ],
  },
  {
    title: "BE: Debug & Root Cause",
    accent: "text-[#34d399]",
    steps: [
      "Ambil 20 error terbaru Sentry - service payment-api",
      "Kelompokkan error berdasarkan pola",
      "Baca file handler di GitHub, identifikasi logic bermasalah",
      "Tulis RCA draft + PR description untuk fix",
    ],
  },
  {
    title: "QA: Test Case dari Tiket",
    accent: "text-[#fbbf24]",
    steps: [
      "Baca tiket Jira #DEV-310 + PR terkait",
      "Generate test case: happy path, edge case, negative",
      "Review dan revisi",
      "Simpan ke Confluence, update status tiket",
    ],
  },
  {
    title: "OPS: Incident Response",
    accent: "text-[#C4E2F5]",
    steps: [
      "Cek pod tidak sehat di namespace production",
      "Ambil log 50 baris terakhir dari pod crash",
      "Query DB: cek spike koneksi 1 jam terakhir",
      "Draft update insiden -> channel #ops-incident",
    ],
  },
];

export default function Slide05UseCases() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Daily"
        plain="Workflow"
        subtitle="Bagaimana MCP terlihat dalam pekerjaan sehari-hari"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {workflows.map((workflow) => (
          <article key={workflow.title} className="deck-surface rounded-xl border border-[#234879] p-4 sm:p-5">
            <h2 className={`text-sm font-semibold ${workflow.accent}`}>{workflow.title}</h2>
            <ol className="mt-5 space-y-3">
              {workflow.steps.map((step, index) => (
                <WorkflowStep key={step} number={index + 1}>
                  {step}
                </WorkflowStep>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </SlideWrapper>
  );
}
