import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { DeckContent } from "@/lib/presentation/content";
import type { StrategySlide } from "@/lib/presentation/slide-model";

type SlideCanvasProps = {
  deck: DeckContent;
  slide: StrategySlide;
};

const benefitIcons = [Clock3, CheckCircle2, Workflow, ShieldCheck, Sparkles];

function cleanInline(value: string) {
  return value.replace(/\*\*/g, "").replace(/\*(.*?)\*/g, "$1").replace(/`/g, "");
}

function sectionText(slide: StrategySlide) {
  return slide.section?.content.replace(/```[\s\S]*?```/g, "").replace(/\|.+\|/g, "").trim() ?? "";
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <Card className="border-white/10 bg-white/[0.04]">
      <CardContent className="p-5">
        <p className="text-sm text-slate-400">{label}</p>
        <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
      </CardContent>
    </Card>
  );
}

function HeroSlide({ deck }: { deck: DeckContent }) {
  return (
    <div className="grid h-full grid-rows-[1fr_auto]">
      <div className="flex flex-col justify-center">
        <Badge className="w-fit bg-blue-500 text-white">Sharing Session</Badge>
        <h2 className="mt-6 max-w-4xl text-balance text-6xl font-semibold leading-tight">{deck.title}</h2>
        <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">{deck.subtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Format" value="Web Deck" />
        <MetricCard label="Source" value="MCP.md" />
        <MetricCard label="Theme" value="Dark Blue" />
      </div>
    </div>
  );
}

function AgendaSlide({ deck }: { deck: DeckContent }) {
  return (
    <div>
      <SlideHeader chapter="Agenda" title="Alur Pembahasan" subtitle="Setiap item berasal dari bab utama di MCP.md." />
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {deck.sections
          .filter((section) => section.title !== "Daftar Isi")
          .map((section) => (
            <Card key={section.id} className="border-white/10 bg-white/[0.04]">
              <CardContent className="flex items-center gap-4 p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-blue-500 text-sm font-bold">
                  {String(section.index).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-white">{section.title}</p>
                  <p className="mt-1 line-clamp-1 text-sm text-slate-400">{section.subsections.slice(0, 2).join(" / ") || "Core topic"}</p>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

function ConceptSlide({ slide }: { slide: StrategySlide }) {
  const quote = slide.section?.quote;

  return (
    <div className="grid h-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col justify-center">
        <SlideHeader chapter={slide.chapter} title={slide.title} subtitle={slide.subtitle} />
        <p className="mt-8 max-w-3xl text-2xl leading-10 text-slate-300">
          MCP adalah standar terbuka yang membuat AI bisa bekerja langsung dengan tools, data, API, dan sistem kerja nyata.
        </p>
      </div>
      <Card className="border-blue-400/30 bg-blue-500/10">
        <CardHeader>
          <CardTitle className="text-blue-100">Analogi Utama</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold leading-tight text-white">{quote ? cleanInline(quote) : "USB-C untuk AI"}</p>
          <Separator className="my-6 bg-white/10" />
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 text-center">
            <Node label="AI Host" />
            <ArrowRight className="size-6 text-blue-300" />
            <Node label="MCP Server" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function CardsSlide({ slide }: { slide: StrategySlide }) {
  const items =
    slide.section?.subsections.length ? slide.section.subsections : slide.section?.bullets.slice(0, 5) ?? [];

  return (
    <div>
      <SlideHeader chapter={slide.chapter} title={slide.title} subtitle={slide.subtitle} />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.slice(0, 6).map((item, index) => {
          const Icon = benefitIcons[index % benefitIcons.length];

          return (
            <Card key={item} className="border-white/10 bg-white/[0.04]">
              <CardContent className="p-6">
                <div className="flex size-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{cleanInline(item)}</h3>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-400">{sectionText(slide).slice(0, 180)}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function MatrixSlide({ slide }: { slide: StrategySlide }) {
  const tables = slide.section?.tables ?? [];
  const roleNames = slide.section?.subsections.slice(0, 4) ?? [];

  return (
    <div>
      <SlideHeader chapter={slide.chapter} title={slide.title} subtitle={slide.subtitle} />
      <div className="mt-7 grid gap-4 lg:grid-cols-4">
        {roleNames.map((role, index) => {
          const rows = tables[index]?.rows.slice(0, 4) ?? [];

          return (
            <Card key={role} className="border-white/10 bg-white/[0.04]">
              <CardHeader>
                <CardTitle className="text-lg text-white">{cleanInline(role)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {rows.map((row) => (
                  <div key={row.join("-")} className="rounded-md border border-white/10 bg-black/15 p-3">
                    <p className="text-sm font-semibold text-blue-200">{cleanInline(row[0] ?? "")}</p>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-400">{cleanInline(row[2] ?? row[1] ?? "")}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function WorkflowSlide({ slide }: { slide: StrategySlide }) {
  const workflows = slide.section?.subsections.slice(0, 4) ?? [];

  return (
    <div>
      <SlideHeader chapter={slide.chapter} title={slide.title} subtitle={slide.subtitle} />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {workflows.map((workflow, index) => (
          <Card key={workflow} className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <Badge className="bg-blue-500/20 text-blue-200">Use Case {index + 1}</Badge>
              <h3 className="mt-4 text-2xl font-semibold text-white">{cleanInline(workflow)}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">AI membaca konteks dari sistem terkait, melakukan analisis, lalu membantu membuat output kerja yang siap direview.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ComparisonSlide({ slide }: { slide: StrategySlide }) {
  const table = slide.section?.tables.at(-1);
  const rows = table?.rows ?? [];

  return (
    <div>
      <SlideHeader chapter={slide.chapter} title={slide.title} subtitle={slide.subtitle} />
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {rows.map((row) => (
          <Card key={row.join("-")} className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-5">
              <p className="text-sm font-medium text-blue-300">{cleanInline(row[0] ?? "")}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{cleanInline(row[4] ?? "")}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">{cleanInline(row[1] ?? "")}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SetupSlide({ slide }: { slide: StrategySlide }) {
  const steps = slide.section?.subsections.slice(0, 4) ?? [];

  return (
    <div>
      <SlideHeader chapter={slide.chapter} title={slide.title} subtitle={slide.subtitle} />
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step} className="border-white/10 bg-white/[0.04]">
            <CardContent className="p-6">
              <span className="flex size-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold">{index + 1}</span>
              <h3 className="mt-5 text-xl font-semibold text-white">{cleanInline(step)}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function SlideHeader({ chapter, title, subtitle }: { chapter: string; title: string; subtitle?: string }) {
  return (
    <div>
      <Badge className="bg-blue-500 text-white">{chapter}</Badge>
      <h2 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-tight text-white">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-3xl text-xl leading-8 text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Node({ label }: { label: string }) {
  return <div className="rounded-lg border border-white/10 bg-white/[0.06] px-5 py-6 text-sm font-semibold text-white">{label}</div>;
}

export function SlideCanvas({ deck, slide }: SlideCanvasProps) {
  return (
    <article className="mx-auto aspect-video w-full max-w-7xl overflow-hidden rounded-xl border border-white/10 bg-[#0b1426] p-8 shadow-2xl shadow-blue-950/40 md:p-10">
      {slide.type === "hero" ? <HeroSlide deck={deck} /> : null}
      {slide.type === "agenda" ? <AgendaSlide deck={deck} /> : null}
      {slide.type === "concept" ? <ConceptSlide slide={slide} /> : null}
      {slide.type === "cards" ? <CardsSlide slide={slide} /> : null}
      {slide.type === "matrix" ? <MatrixSlide slide={slide} /> : null}
      {slide.type === "workflow" ? <WorkflowSlide slide={slide} /> : null}
      {slide.type === "comparison" ? <ComparisonSlide slide={slide} /> : null}
      {slide.type === "setup" ? <SetupSlide slide={slide} /> : null}
    </article>
  );
}
