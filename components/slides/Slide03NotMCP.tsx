import { X } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const myths = [
  {
    myth: "MCP membuat AI lebih pintar",
    fact: "Salah. MCP hanya memberi akses ke data dan tools.",
  },
  {
    myth: "MCP bisa mengakses semua data",
    fact: "Salah. Tetap ada permission dan authorization.",
  },
  {
    myth: "MCP menggantikan database",
    fact: "Salah. MCP hanya jembatan ke sistem lain.",
  },
  {
    myth: "MCP otomatis aman",
    fact: "Salah. Security tetap tanggung jawab developer.",
  },
];

export default function Slide03NotMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Mitos tentang"
        plain="MCP"
        subtitle="Apa yang TIDAK dilakukan MCP"
      />
      <div className="space-y-4">
        {myths.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-[#234879] bg-[#0b1b33]/85 p-5"
          >
            <div className="mb-3 flex items-start gap-3">
              <div className="flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/20 text-red-400 ring-1 ring-red-500/35">
                <X className="size-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{item.myth}</h3>
              </div>
            </div>
            <p className="ml-11 text-sm leading-relaxed text-[#C4E2F5]">
              {item.fact}
            </p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
}
