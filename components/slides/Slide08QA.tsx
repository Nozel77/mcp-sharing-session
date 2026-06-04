import { HelpCircle, MessageSquare, Sparkles } from "lucide-react";
import { InfoCard } from "@/components/shared/InfoCard";
import { SlideWrapper } from "@/components/shared/SlideWrapper";

export default function Slide08QA() {
  return (
    <SlideWrapper>
      <div className="mx-auto max-w-5xl text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-xl border border-[#4BB8FA]/45 bg-[#1591DC]/18 text-[#4BB8FA] shadow-[0_0_42px_rgba(75,184,250,0.28)] md:mb-8 md:size-20">
          <HelpCircle className="size-8 md:size-10" />
        </div>
        <h1 className="text-4xl font-bold tracking-normal text-white sm:text-5xl md:text-7xl">Q &amp; A</h1>
        <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#4BB8FA]" />
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#C4E2F5]">
          Waktunya diskusi. Tanya apa pun tentang MCP, server yang pernah dicoba, setup workflow, atau ide implementasi
          untuk tim.
        </p>
        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2">
          <InfoCard
            icon={<MessageSquare className="size-5" />}
            title="Pertanyaan teknis"
            description="Setup MCP, konfigurasi server, keamanan akses, integrasi GitHub, Figma, OpenAPI, MongoDB, atau filesystem."
          />
          <InfoCard
            icon={<Sparkles className="size-5" />}
            title="Ide penerapan"
            description="Workflow harian, kombinasi MCP x SKILLS.md, dan use case yang paling cocok untuk tim engineering."
          />
        </div>
      </div>
    </SlideWrapper>
  );
}
