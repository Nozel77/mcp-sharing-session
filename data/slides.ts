import type { ComponentType } from "react";
import Slide00Cover from "@/components/slides/Slide00Cover";
import Slide01Agenda from "@/components/slides/Slide01Agenda";
import Slide01WhatIsMCP from "@/components/slides/Slide01WhatIsMCP";
import Slide02Architecture from "@/components/slides/Slide02Architecture";
import Slide02WhyMCP from "@/components/slides/Slide02WhyMCP";
import Slide03NotMCP from "@/components/slides/Slide03NotMCP";
import Slide03Benefits from "@/components/slides/Slide03Benefits";
import Slide04TriedMCP from "@/components/slides/Slide04TriedMCP";
import Slide05McpSkills from "@/components/slides/Slide05McpSkills";
import Slide05UseCases from "@/components/slides/Slide05UseCases";
import Slide06BeforeAfter from "@/components/slides/Slide06BeforeAfter";
import Slide07RiskGuardrails from "@/components/slides/Slide07RiskGuardrails";
import Slide08DemoFlow from "@/components/slides/Slide08DemoFlow";
import Slide09AdoptionRoadmap from "@/components/slides/Slide09AdoptionRoadmap";
import Slide10GetStarted from "@/components/slides/Slide07GetStarted";
import Slide11QA from "@/components/slides/Slide08QA";

export interface SlideConfig {
  id: string;
  title: string;
  section: string;
  component: ComponentType;
}

export const SLIDES: SlideConfig[] = [
  { id: "cover", title: "Cover", section: "Opening", component: Slide00Cover },
  { id: "agenda", title: "Alur Sharing", section: "Opening", component: Slide01Agenda },
  { id: "what-is-mcp", title: "Apa Itu MCP?", section: "Konsep", component: Slide01WhatIsMCP },
  { id: "architecture", title: "Arsitektur MCP", section: "Konsep", component: Slide02Architecture },
  { id: "not-mcp", title: "Mitos tentang MCP", section: "Konsep", component: Slide03NotMCP },
  { id: "why-mcp", title: "Mengapa MCP Penting?", section: "Workflow", component: Slide02WhyMCP },
  { id: "benefits", title: "Manfaat MCP", section: "Workflow", component: Slide03Benefits },
  { id: "tried-mcp", title: "MCP yang Pernah Dicoba", section: "Workflow", component: Slide04TriedMCP },
  { id: "mcp-skills", title: "MCP x Skills", section: "Workflow", component: Slide05McpSkills },
  { id: "use-cases", title: "Daily Backend Workflow", section: "Workflow", component: Slide05UseCases },
  { id: "before-after", title: "Backend Before & After", section: "Workflow", component: Slide06BeforeAfter },
  { id: "risk-guardrails", title: "Risiko & Guardrails", section: "Guardrails", component: Slide07RiskGuardrails },
  { id: "get-started", title: "Cara Memulai", section: "Demo", component: Slide10GetStarted },
  { id: "demo-flow", title: "Demo Flow", section: "Demo", component: Slide08DemoFlow },
  { id: "adoption-roadmap", title: "Roadmap Adopsi Tim", section: "Adopsi", component: Slide09AdoptionRoadmap },
  { id: "qa", title: "Q & A", section: "Diskusi", component: Slide11QA },
];
