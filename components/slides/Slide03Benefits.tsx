import { Clock, Lock, Target } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide03Benefits() {
  const cards = [
    [<Clock key="clock" className="size-5" />, "Hemat Waktu Banyak", "AI langsung baca konteks dari tools kerja, tidak perlu copy-paste manual. Pekerjaan 30 menit bisa selesai dalam 5 menit."],
    [<Target key="target" className="size-5" />, "Lebih Akurat", "AI pakai data asli langsung dari sistem, bukan data yang kamu ketik ulang. Risiko salah informasi jauh lebih kecil."],
    [<Lock key="lock" className="size-5" />, "Aman & Terkontrol", "Kamu yang tentukan AI boleh akses apa. Semua akses tercatat dan bisa diaudit. Tidak ada data dikirim tanpa izin."],
  ] as const;

  return (
    <SlideWrapper>
      <SectionTitle gradient="Manfaat" plain="MCP" subtitle="Tiga alasan utama kenapa MCP berguna untuk pekerjaan sehari-hari" />
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map(([icon, title, description]) => (
          <InfoCard key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </SlideWrapper>
  );
}
