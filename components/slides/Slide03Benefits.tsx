import { Clock, Globe, Lock, Plug, Target, Zap } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide03Benefits() {
  const cards = [
    [<Clock key="clock" className="size-5" />, "Efisiensi Waktu", "AI langsung mengambil konteks tanpa copy-paste manual. 30 menit bisa selesai dalam 5 menit."],
    [<Target key="target" className="size-5" />, "Akurasi Lebih Tinggi", "AI bekerja dengan data asli, bukan data yang kamu tulis ulang. Risiko salah informasi jauh berkurang."],
    [<Zap key="zap" className="size-5" />, "Otomasi Workflow Kompleks", "Satu instruksi -> buka file -> baca isi -> update dokumen -> kirim notifikasi."],
    [<Lock key="lock" className="size-5" />, "Standar Terbuka & Aman", "Setiap koneksi eksplisit, terkontrol, dan bisa di-audit. Tidak ada data dikirim tanpa izin."],
    [<Globe key="globe" className="size-5" />, "Ekosistem Berkembang Cepat", "Ratusan MCP server tersedia. Komunitas terus membangun yang baru setiap hari."],
    [<Plug key="plug" className="size-5" />, "Satu Standar, Semua Tools", "Sama seperti USB-C - satu protokol untuk semua integrasi AI kamu."],
  ] as const;

  return (
    <SlideWrapper>
      <SectionTitle gradient="Manfaat" plain="MCP" subtitle="Enam alasan MCP mengubah cara kamu bekerja" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map(([icon, title, description]) => (
          <InfoCard key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </SlideWrapper>
  );
}
