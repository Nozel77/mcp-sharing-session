import { BookMarked, BrainCircuit, Cable, CheckCircle2, FileText, Workflow } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

const comparisons = [
  ["MCP", "Memberi akses ke tools, data, API, repository, database, dan file."],
  ["SKILLS.md", "Memberi cara kerja: aturan, checklist, style, urutan langkah, dan standar output."],
  ["Gabungan", "AI bukan cuma bisa mengakses sistem, tapi juga tahu bagaimana harus bekerja dengan sistem itu."],
];

export default function Slide05McpSkills() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="MCP x"
        plain="Skills"
        subtitle="MCP menyambungkan konteks kerja, SKILLS.md menyambungkan cara kerja"
      />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-4">
          <div className="deck-surface rounded-xl border border-[#234879] p-4 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-lg bg-[#1591DC]/18 text-[#4BB8FA] ring-1 ring-[#4BB8FA]/35">
                <Cable className="size-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Kenapa cocok?</h2>
                <p className="text-xs text-[#8fb9d8]">MCP adalah koneksi. Skills adalah operating manual.</p>
              </div>
            </div>
            <div className="space-y-3">
              {comparisons.map(([label, description]) => (
                <div key={label} className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-4">
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <p className="mt-1 text-xs leading-relaxed text-[#C4E2F5]">{description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-[#4BB8FA]/45 bg-[#0b1b33]/85 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#4BB8FA]">
              <BrainCircuit className="size-4" />
              Formula praktis
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[#C4E2F5]">
              <span className="font-semibold text-white">MCP = sumber konteks.</span>{" "}
              <span className="font-semibold text-white">Skills = pola eksekusi.</span> Digabungkan, AI bisa menjalankan
              workflow yang lebih konsisten, repeatable, dan sesuai standar tim.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <InfoCard
            icon={<FileText className="size-5" />}
            title="SKILLS.md sebagai SOP kecil"
            description="Berisi instruksi domain: cara review PR, cara baca OpenAPI, format RCA, standar test case, atau aturan commit."
          />
          <InfoCard
            icon={<Workflow className="size-5" />}
            title="MCP menjalankan langkah nyata"
            description="Setelah skill memberi alur, MCP memberi akses untuk membaca GitHub, query MongoDB, cek dokumentasi Context7, atau buka file lokal."
          />
          <InfoCard
            icon={<BookMarked className="size-5" />}
            title="Konteks tidak hilang antar tugas"
            description="Skill menjaga AI tetap mengikuti pattern yang sama, walaupun MCP yang dipakai berbeda untuk tiap pekerjaan."
          />
          <div className="deck-surface rounded-xl border border-[#234879] p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="size-4 text-[#34d399]" />
              Contoh penggunaan
            </div>
            <p className="text-xs italic leading-relaxed text-[#C4E2F5]">
              &quot;Gunakan skill API review. Baca OpenAPI MCP, cek implementasi di GitHub, validasi sample data di
              MongoDB, lalu tulis temuan dalam format review tim.&quot;
            </p>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
}
