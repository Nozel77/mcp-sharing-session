import { RoleSlide } from "@/components/slides/RoleSlide";

export default function Slide04RolesBE() {
  return (
    <RoleSlide
      gradient="Backend"
      plain="Engineer"
      subtitle="Debug lebih cepat, kode lebih aman"
      description="Backend engineer bisa menggabungkan observability, repository, database, container, dan dokumentasi untuk mempercepat investigasi."
      rows={[
        { server: "GitHub MCP", status: "official", description: "Review PR, baca kode service lain, buat issues" },
        { server: "Sentry MCP", status: "official", description: "Baca stack trace error produksi, analisis root cause" },
        { server: "PostgreSQL MCP", status: "official", description: "Jalankan query, analisis schema, debug data" },
        { server: "Docker MCP", status: "official", description: "Kelola container, lihat log, jalankan exec" },
        { server: "Redis MCP", status: "community", description: "Inspect keys, debug cache, pantau TTL" },
        { server: "Filesystem MCP", status: "official", description: "Baca config, env file, struktur proyek" },
        { server: "Brave Search MCP", status: "official", description: "Cari dokumentasi library, RFC, best practice" },
      ]}
      prompt="Ambil 10 error terbaru dari Sentry untuk service order-api, baca file handler yang relevan di GitHub, dan jelaskan root cause-nya."
    />
  );
}
