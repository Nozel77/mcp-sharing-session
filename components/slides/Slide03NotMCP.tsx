import { Ban, ShieldAlert } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide03NotMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="MCP"
        plain="Bukan Apa?"
        subtitle="Penting tahu batasannya supaya tidak salah paham"
      />
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-xl border border-[#f87171]/35 bg-[#451a1a]/20 p-6">
          <div className="mb-4 flex items-center gap-3 text-[#fca5a5]">
            <Ban className="size-7" />
            <h2 className="text-xl font-semibold">Yang Bukan MCP</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-5">
              <h3 className="text-base font-semibold text-white mb-2">Bukan model AI</h3>
              <p className="text-sm leading-relaxed text-[#C4E2F5]">
                MCP tidak bikin AI lebih pintar. MCP cuma kasih AI akses ke data dan tools yang relevan.
              </p>
            </div>
            <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-5">
              <h3 className="text-base font-semibold text-white mb-2">Bukan database</h3>
              <p className="text-sm leading-relaxed text-[#C4E2F5]">
                MCP bukan tempat simpan data. MCP cuma jembatan buat akses data dari sistem lain.
              </p>
            </div>
            <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-5">
              <h3 className="text-base font-semibold text-white mb-2">Bukan izin bebas</h3>
              <p className="text-sm leading-relaxed text-[#C4E2F5]">
                MCP tetap butuh aturan akses yang ketat. AI tidak otomatis boleh akses semua data.
              </p>
            </div>
            <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/85 p-5">
              <h3 className="text-base font-semibold text-white mb-2">Bukan pengganti keamanan</h3>
              <p className="text-sm leading-relaxed text-[#C4E2F5]">
                Token, password, dan aturan akses tetap harus dijaga ketat seperti biasa.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-[#fbbf24]/35 bg-[#fbbf24]/10 p-5">
          <div className="flex items-center gap-2 text-base font-semibold text-[#fbbf24] mb-3">
            <ShieldAlert className="size-5" />
            Aturan praktis
          </div>
          <p className="text-sm leading-relaxed text-[#C4E2F5]">
            Kalau aksi itu berisiko saat dilakukan manusia, aksi itu juga wajib butuh persetujuan saat dilakukan lewat MCP.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
