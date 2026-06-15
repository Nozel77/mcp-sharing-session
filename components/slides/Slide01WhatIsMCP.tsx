import { SectionTitle } from "@/components/shared/SectionTitle";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide01WhatIsMCP() {
  return (
    <SlideWrapper>
      <SectionTitle
        gradient="Apa Itu"
        plain="MCP?"
        subtitle="Cara standar agar AI bisa langsung pakai tools yang kamu pakai sehari-hari"
      />
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="deck-surface rounded-xl border border-[#234879] p-6 text-base leading-8 text-[#C4E2F5]">
          <span className="font-semibold text-white">Model Context Protocol (MCP)</span> adalah cara standar yang dibuat Anthropic (2024)
          agar AI bisa terhubung langsung ke tools kerja kamu - seperti GitHub, Figma, database, atau file lokal.
        </div>
        <div className="rounded-r-xl border-l-4 border-[#4BB8FA] bg-[#0b1b33]/85 p-6">
          <div className="text-xl font-semibold text-white">MCP itu seperti USB-C untuk AI.</div>
          <p className="mt-3 text-base text-[#C4E2F5]">
            Satu cara standar untuk menghubungkan AI ke semua tools yang kamu pakai - tanpa perlu copy-paste manual.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
