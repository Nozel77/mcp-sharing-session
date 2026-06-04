import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide00Cover() {
  const stats = [
    ["Nov 2024", "Dirilis"],
    ["1000+ Servers", "Tersedia"],
    ["Open Standard", "by Anthropic"],
  ];

  return (
    <SlideWrapper>
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="gradient-text text-4xl font-bold tracking-normal sm:text-5xl md:text-7xl">Model Context Protocol</h1>
        <p className="mt-5 text-base font-medium text-[#e2e8f0] sm:text-xl">MCP - Membuka Era Baru AI yang Terhubung</p>
        <p className="mt-2 text-sm text-[#8fb9d8]">Materi Sharing Session - Divisi IT</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 md:mt-12 md:gap-4">
          {stats.map(([value, label]) => (
            <div key={value} className="deck-surface rounded-xl border border-[#234879] px-4 py-4 sm:px-5 md:px-6">
              <div className="text-xl font-bold text-white md:text-2xl">{value}</div>
              <div className="mt-1 text-xs text-[#8fb9d8]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
