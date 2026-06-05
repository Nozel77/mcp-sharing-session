import type { ComponentType } from "react";
import Slide00Cover from "@/components/slides/Slide00Cover";
import Slide01WhatIsMCP from "@/components/slides/Slide01WhatIsMCP";
import Slide02WhyMCP from "@/components/slides/Slide02WhyMCP";
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
  component: ComponentType;
}

export const SLIDES: SlideConfig[] = [
  { id: "cover", component: Slide00Cover },
  { id: "what-is-mcp", component: Slide01WhatIsMCP },
  { id: "why-mcp", component: Slide02WhyMCP },
  { id: "benefits", component: Slide03Benefits },
  { id: "tried-mcp", component: Slide04TriedMCP },
  { id: "mcp-skills", component: Slide05McpSkills },
  { id: "use-cases", component: Slide05UseCases },
  { id: "before-after", component: Slide06BeforeAfter },
  { id: "risk-guardrails", component: Slide07RiskGuardrails },
  { id: "demo-flow", component: Slide08DemoFlow },
  { id: "adoption-roadmap", component: Slide09AdoptionRoadmap },
  { id: "get-started", component: Slide10GetStarted },
  { id: "qa", component: Slide11QA },
];
