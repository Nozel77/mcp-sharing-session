import { BookOpen, Frame, MessageSquare, Sparkles } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { McpTable } from "@/components/shared/McpTable";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide04TriedMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="MCP yang"
        plain="Pernah Aku Coba"
        subtitle="Contoh server MCP yang sudah terasa berguna untuk workflow harian"
      />
      <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
        <McpTable
          rows={[
            {
              server: "Context7 MCP",
              status: "community",
              description: "Ambil dokumentasi library terbaru langsung ke sesi coding agar jawaban AI lebih sesuai versi aktual.",
            },
            {
              server: "Figma MCP",
              status: ["official", "warning"],
              description: "Ambil konteks desain dari Figma: frame, komponen, token visual, spacing, dan detail UI.",
            },
            {
              server: "GitHub MCP",
              status: "official",
              description: "Baca repository, PR, issue, branch, dan diff untuk review atau investigasi kode.",
            },
            {
              server: "OpenAPI MCP",
              status: "community",
              description: "Baca kontrak API dari spesifikasi OpenAPI untuk memahami endpoint, schema, payload, dan response.",
            },
            {
              server: "MongoDB MCP",
              status: "community",
              description: "Inspect collection, sample document, dan struktur data untuk membantu debugging atau analisis data.",
            },
            {
              server: "Filesystem MCP",
              status: "official",
              description: "Baca dan tulis file lokal agar AI bisa memahami struktur proyek tanpa copy-paste manual.",
            },
          ]}
          prompt="Contoh: Pakai Context7 untuk cek dokumentasi terbaru, baca kontrak OpenAPI, lalu cocokkan implementasi endpoint di GitHub dengan data contoh dari MongoDB."
        />
        <div className="space-y-4">
          <InfoCard
            icon={<Frame className="size-5" />}
            title="Figma MCP"
            description="Paling terasa saat perlu menjembatani desain dan implementasi. AI bisa membaca konteks visual sebelum menyarankan perubahan kode."
          />
          <InfoCard
            icon={<BookOpen className="size-5" />}
            title="Context7 MCP"
            description="Berguna saat memakai library yang sering berubah. AI mengambil dokumentasi aktual, bukan hanya mengandalkan memori model."
          />
          <div className="deck-surface rounded-xl border border-[#234879] p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              <MessageSquare className="size-4 text-[#4BB8FA]" />
              Prompt yang cocok
            </div>
            <p className="text-xs italic leading-relaxed text-[#C4E2F5]">
              &quot;Gunakan Context7 untuk cek dokumentasi terbaru Next.js, lalu sesuaikan implementasi komponen ini
              dengan pattern yang direkomendasikan.&quot;
            </p>
          </div>
          <div className="rounded-xl border border-[#4BB8FA]/45 bg-[#0b1b33]/85 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4BB8FA]">
              <Sparkles className="size-4" />
              Insight utama
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#C4E2F5]">
              MCP paling terasa ketika AI tidak lagi menebak konteks, tapi langsung membaca sumber kerja yang relevan.
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
