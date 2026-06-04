import { RoleSlide } from "@/components/slides/RoleSlide";

export default function Slide04RolesOPS() {
  return (
    <RoleSlide
      gradient="Operations"
      plain="/ DevOps"
      subtitle="Insiden teratasi sebelum pagi"
      description="Operations dan DevOps bisa menghubungkan status infrastruktur, log, database, pipeline, dan komunikasi insiden dalam satu sesi."
      rows={[
        { server: "Docker MCP", status: "official", description: "Inspect container, lihat log, restart service" },
        { server: "GitHub MCP", status: "official", description: "Baca pipeline CI/CD, cek status workflow" },
        { server: "Sentry MCP", status: "official", description: "Baca error produksi, analisis spike, debug insiden" },
        { server: "Slack MCP", status: "official", description: "Kirim notifikasi insiden, update status" },
        { server: "PostgreSQL MCP", status: "official", description: "Query diagnostik, pantau koneksi & slow query" },
        { server: "Filesystem MCP", status: "official", description: "Baca config, log lokal, skrip deployment" },
        { server: "Kubernetes MCP", status: ["community", "warning"], description: "Status pod/deployment (belum ada official first-party)" },
        { server: "Brave Search MCP", status: "official", description: "Cari runbook, dokumentasi platform" },
      ]}
      prompt="Cek semua pod yang tidak Running di namespace production, ambil log error-nya, dan draft RCA untuk channel #ops-incident."
    />
  );
}
