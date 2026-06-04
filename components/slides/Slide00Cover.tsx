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
        <h1 className="gradient-text text-5xl font-bold tracking-normal md:text-7xl">Model Context Protocol</h1>
        <p className="mt-6 text-xl font-medium text-[#e2e8f0]">MCP - Membuka Era Baru AI yang Terhubung</p>
        <p className="mt-2 text-sm text-[#8fb9d8]">Materi Sharing Session - Divisi IT</p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={value} className="deck-surface rounded-xl border border-[#234879] px-6 py-4">
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="mt-1 text-xs text-[#8fb9d8]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
