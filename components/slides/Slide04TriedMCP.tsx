import { BookOpen, Database, FileCode, HardDrive } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide04TriedMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Contoh Server"
        plain="MCP"
        subtitle="Contoh empat MCP yang paling sering digunakan di Backend"
      />
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard
            icon={<BookOpen className="size-6" />}
            title="Context7 MCP"
            description="Ambil dokumentasi library terbaru agar AI tidak pakai info lama dari training data."
          />
          <InfoCard
            icon={<HardDrive className="size-6" />}
            title="Filesystem MCP"
            description="AI bisa baca dan tulis file lokal, jadi tidak perlu copy-paste isi file ke chat lagi."
          />
          <InfoCard
            icon={<FileCode className="size-6" />}
            title="OpenAPI MCP"
            description="Baca kontrak API dari spesifikasi OpenAPI untuk memahami endpoint, schema, dan response."
          />
          <InfoCard
            icon={<Database className="size-6" />}
            title="MongoDB MCP"
            description="Inspect collection, sample document, dan struktur data untuk debugging atau analisis data."
          />
        </div>

        <div className="deck-surface rounded-xl border border-[#234879] p-6">
          <div className="mb-3 text-sm font-semibold text-white">Contoh pakai bareng:</div>
          <p className="text-sm italic leading-relaxed text-[#C4E2F5]">
            "Pakai Context7 buat cek dokumentasi library terbaru, baca kontrak OpenAPI, lalu cocokkan implementasi
            endpoint di Filesystem dengan data contoh dari MongoDB."
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
