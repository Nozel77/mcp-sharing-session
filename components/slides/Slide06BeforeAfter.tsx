"use client";

import { BeforeAfterPanel } from "@/components/shared/BeforeAfterPanel";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const scenarios = {
  FE: {
    before: { time: "±48 menit", steps: ["Buka Figma", "Buka GitHub", "Bandingkan manual", "Catat", "Buat tiket Jira"] },
    after: { time: "±10 menit", steps: ["1 instruksi", "Claude baca kode+Figma", "Buat tiket otomatis"] },
    saving: "Hemat ~38 menit per sesi review",
  },
  BE: {
    before: { time: "±43 menit", steps: ["Buka Sentry", "Copy stack trace", "Cari file di GitHub", "Copy kode", "Analisis", "Tulis RCA"] },
    after: { time: "±12 menit", steps: ["Ambil error Sentry", "Baca handler GitHub", "RCA otomatis"] },
    saving: "Hemat ~31 menit per sesi debug",
  },
  QA: {
    before: { time: "±60 menit", steps: ["Baca Jira", "Baca PR diff", "Buka template", "Tulis test case", "Upload"] },
    after: { time: "±15 menit", steps: ["Baca tiket+PR", "Generate test case", "Review", "Simpan otomatis"] },
    saving: "Hemat ~45 menit per tiket",
  },
  OPS: {
    before: { time: "±40 menit", steps: ["kubectl manual", "Identifikasi pod", "Query DB", "Analisis", "Tulis update Slack"] },
    after: { time: "±10 menit", steps: ["Cek pod", "Ambil log+query DB", "Draft RCA otomatis"] },
    saving: "Hemat ~30 menit per insiden",
  },
};

const summary = [
  ["FE", "48 min", "10 min", "~38 min"],
  ["BE", "43 min", "12 min", "~31 min"],
  ["QA", "60 min", "15 min", "~45 min"],
  ["OPS", "40 min", "10 min", "~30 min"],
];

export default function Slide06BeforeAfter() {
  return (
    <SlideWrapper>
      <SectionTitle gradient="Before" plain="& After" subtitle="Perbandingan workflow manual vs workflow terhubung" />
      <Tabs defaultValue="FE" className="mx-auto max-w-5xl">
        <div className="flex justify-center">
          <TabsList>
            {Object.keys(scenarios).map((role) => (
              <TabsTrigger key={role} value={role}>
                {role}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(scenarios).map(([role, scenario]) => (
          <TabsContent key={role} value={role}>
            <BeforeAfterPanel {...scenario} />
          </TabsContent>
        ))}
      </Tabs>
      <div className="mx-auto mt-5 max-w-5xl overflow-x-auto rounded-xl">
        <table className="w-full min-w-[520px] text-left text-xs">
          <thead className="bg-[#0b1b33] text-[#8fb9d8]">
            <tr>
              {["Role", "Before", "After", "Hemat"].map((header) => (
                <th key={header} className="px-4 py-2 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {summary.map((row, index) => (
              <tr key={row[0]} className={`${index % 2 === 0 ? "bg-[#10213d]" : "bg-[#0b1b33]"} border-t border-[#234879]`}>
                {row.map((cell) => (
                  <td key={cell} className="px-4 py-2 text-[#C4E2F5]">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="min-w-[520px] bg-[#0b1b33] px-4 py-3 text-center text-xs font-semibold text-[#4BB8FA]">
          Rata-rata engineer menghemat 2-4 jam kerja per hari
        </div>
      </div>
    </SlideWrapper>
  );
}
