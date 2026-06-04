import { ChevronDown, Cpu, Plug, Server } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide01WhatIsMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Apa Itu"
        plain="MCP?"
        subtitle="Model Context Protocol - standar universal untuk AI yang terhubung"
      />
      <div className="grid gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-5">
          <div className="deck-surface rounded-xl border border-[#234879] p-6 text-sm leading-7 text-[#C4E2F5]">
            <span className="font-semibold text-white">Model Context Protocol (MCP)</span> adalah protokol terbuka
            yang dikembangkan oleh Anthropic pada akhir 2024. MCP menjadi standar universal yang memungkinkan AI untuk
            terhubung langsung ke tools, data, dan layanan eksternal - secara aman dan terstruktur.
          </div>
          <div className="rounded-r-xl border-l-2 border-[#4BB8FA] bg-[#0b1b33]/85 p-5">
            <div className="text-lg font-semibold text-white">MCP itu seperti USB-C untuk AI.</div>
            <p className="mt-2 text-sm text-[#C4E2F5]">
              Satu protokol untuk menghubungkan AI ke semua sistem yang kamu pakai.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <InfoCard icon={<Cpu className="size-5" />} title="MCP Host" description="Claude Desktop, Claude.ai" className="w-full" />
          <ChevronDown className="size-5 text-[#475569]" />
          <InfoCard icon={<Plug className="size-5" />} title="MCP Client" description="Mengelola koneksi ke server" className="w-full" />
          <ChevronDown className="size-5 text-[#475569]" />
          <InfoCard icon={<Server className="size-5" />} title="MCP Server" description="Ekspos tools/data ke AI" className="w-full" />
        </div>
      </div>
    </SlideWrapper>
  );
}
