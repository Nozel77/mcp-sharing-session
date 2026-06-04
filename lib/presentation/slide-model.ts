import type { DeckContent, MarkdownSection } from "./content";

export type StrategySlide = {
  id: string;
  chapter: string;
  title: string;
  subtitle?: string;
  type: "hero" | "agenda" | "concept" | "cards" | "matrix" | "workflow" | "comparison" | "setup";
  section?: MarkdownSection;
};

export function buildSlides(deck: DeckContent): StrategySlide[] {
  const sections = deck.sections;
  const byTitle = (keyword: string) => sections.find((section) => section.title.toLowerCase().includes(keyword));

  return [
    {
      id: "opening",
      chapter: "Opening",
      title: deck.title,
      subtitle: deck.subtitle,
      type: "hero",
    },
    {
      id: "agenda",
      chapter: "Agenda",
      title: "Alur Pembahasan",
      subtitle: "Materi dipecah dari bab utama pada MCP.md.",
      type: "agenda",
    },
    {
      id: "what-is-mcp",
      chapter: "01",
      title: "Apa Itu MCP?",
      subtitle: "Satu protokol untuk menghubungkan AI ke tools, data, dan layanan eksternal.",
      type: "concept",
      section: byTitle("apa itu"),
    },
    {
      id: "why-it-matters",
      chapter: "02",
      title: "Mengapa MCP Penting?",
      subtitle: "MCP mengubah AI dari chatbot menjadi asisten kerja yang aktif dan terhubung.",
      type: "cards",
      section: byTitle("mengapa"),
    },
    {
      id: "benefits",
      chapter: "03",
      title: "Manfaat MCP",
      subtitle: "Efisiensi, akurasi, otomasi, keamanan, dan ekosistem yang tumbuh cepat.",
      type: "cards",
      section: byTitle("manfaat"),
    },
    {
      id: "role-matrix",
      chapter: "04",
      title: "MCP Berguna Per Role",
      subtitle: "FE, BE, QA, dan OPS punya workflow MCP yang berbeda tetapi saling melengkapi.",
      type: "matrix",
      section: byTitle("role"),
    },
    {
      id: "daily-workflow",
      chapter: "05",
      title: "Daily Workflow",
      subtitle: "Contoh penggunaan MCP dalam rutinitas engineering harian.",
      type: "workflow",
      section: byTitle("workflow"),
    },
    {
      id: "before-after",
      chapter: "06",
      title: "Before & After",
      subtitle: "Dampak MCP paling terasa pada pengurangan context switching dan copy-paste.",
      type: "comparison",
      section: byTitle("before"),
    },
    {
      id: "getting-started",
      chapter: "07",
      title: "Cara Memulai",
      subtitle: "Install, aktifkan server, restart, lalu gunakan dalam instruksi natural language.",
      type: "setup",
      section: byTitle("memulai"),
    },
  ];
}
