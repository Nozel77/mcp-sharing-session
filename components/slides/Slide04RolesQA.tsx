import { RoleSlide } from "@/components/slides/RoleSlide";

export default function Slide04RolesQA() {
  return (
    <RoleSlide
      gradient="Quality"
      plain="Assurance"
      subtitle="Test case otomatis dari tiket langsung"
      description="QA bisa meminta AI memahami scope perubahan dari tiket dan PR, lalu menghasilkan test case yang siap direview."
      rows={[
        { server: "GitHub MCP", status: "official", description: "Baca PR dan commit untuk memahami scope perubahan" },
        { server: "Atlassian MCP", status: ["official", "warning"], description: "Akses Jira & Confluence (khusus Atlassian Cloud)" },
        { server: "Linear MCP", status: "official", description: "Update status bug, baca acceptance criteria" },
        { server: "Sentry MCP", status: "official", description: "Cek apakah bug sudah tercatat sebagai error" },
        { server: "Filesystem MCP", status: "official", description: "Baca/tulis file test case dan skrip otomasi" },
        { server: "Slack MCP", status: "official", description: "Kirim laporan hasil testing" },
        { server: "Brave Search MCP", status: "official", description: "Cari referensi edge case dan teknik testing" },
      ]}
      prompt="Baca tiket Jira #DEV-204 beserta PR yang terkait di GitHub, lalu generate test case lengkap: happy path, edge case, dan negative scenario."
    />
  );
}
