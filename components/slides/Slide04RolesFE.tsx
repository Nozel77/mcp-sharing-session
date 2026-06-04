import { RoleSlide } from "@/components/slides/RoleSlide";

export default function Slide04RolesFE() {
  return (
    <RoleSlide
      gradient="Frontend"
      plain="Engineer"
      subtitle="Dari Figma ke kode, tanpa konteks yang hilang"
      description="Frontend engineer bisa meminta AI membaca desain, kode komponen, error runtime, dan feedback tim dalam satu alur kerja."
      rows={[
        { server: "GitHub MCP", status: "official", description: "Baca PR, review diff komponen UI, buat issues dari AI" },
        { server: "Figma MCP", status: ["official", "warning"], description: "Ambil token desain & spec komponen (butuh paid plan)" },
        { server: "Sentry MCP", status: "official", description: "Baca error JS/runtime dari browser" },
        { server: "Slack MCP", status: "official", description: "Baca feedback desain, kirim update" },
        { server: "Filesystem MCP", status: "official", description: "Baca/tulis file lokal (komponen, CSS, config)" },
        { server: "Brave Search MCP", status: "official", description: "Cari solusi CSS, library, referensi MDN" },
        { server: "Linear MCP", status: "official", description: "Buat issues UI, kelola sprint frontend" },
      ]}
      prompt="Baca komponen Button.tsx di repo kita, bandingkan dengan spesifikasi di Figma, dan identifikasi perbedaan yang perlu disesuaikan."
    />
  );
}
