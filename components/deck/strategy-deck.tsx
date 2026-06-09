"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Command, Maximize2 } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { DeckContent } from "@/lib/presentation/content";
import { buildSlides } from "@/lib/presentation/slide-model";
import { SlideCanvas } from "./slide-canvas";

type StrategyDeckProps = {
  deck: DeckContent;
};

export function StrategyDeck({ deck }: StrategyDeckProps) {
  const slides = useMemo(() => buildSlides(deck), [deck]);
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const progress = ((active + 1) / slides.length) * 100;

  const next = useCallback(() => setActive((value) => Math.min(value + 1, slides.length - 1)), [slides.length]);
  const previous = useCallback(() => setActive((value) => Math.max(value - 1, 0)), []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
        event.preventDefault();
        next();
      }

      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        previous();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, previous]);

  return (
    <main className="grid min-h-screen bg-[#050b18] text-white lg:grid-cols-[300px_1fr]">
      <aside className="hidden border-r border-white/10 bg-[#071121] lg:flex lg:flex-col">
        <div className="border-b border-white/10 p-5">
          <Badge className="bg-blue-500 text-white">MCP Strategy Deck</Badge>
          <h1 className="mt-4 text-xl font-semibold leading-tight">Model Context Protocol</h1>
          <p className="mt-2 text-sm leading-6 text-slate-400">Generated reference deck from MCP.md</p>
        </div>

        <ScrollArea className="flex-1">
          <nav className="space-y-2 p-3">
            {slides.map((item, index) => (
              <motion.button
                key={item.id}
                className={`grid w-full grid-cols-[40px_1fr] gap-3 rounded-lg border p-3 text-left transition ${
                  active === index ? "border-blue-400 bg-blue-500/15" : "border-transparent hover:bg-white/5"
                }`}
                layout
                type="button"
                whileHover={{ x: 3 }}
                onClick={() => setActive(index)}
              >
                <span className="flex size-10 items-center justify-center rounded-md bg-blue-500 text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-blue-300">{item.chapter}</span>
                  <span className="line-clamp-2 text-sm font-semibold">{item.title}</span>
                </span>
              </motion.button>
            ))}
          </nav>
        </ScrollArea>
      </aside>

      <section className="flex min-w-0 flex-col">
        <header className="border-b border-white/10 bg-[#071121]/95 backdrop-blur">
          <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-xs font-medium uppercase text-blue-300">
                <Command className="size-3.5" />
                Slide {active + 1} of {slides.length}
              </p>
              <p className="mt-1 truncate text-sm text-slate-300">{slide.title}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button disabled={active === 0} variant="outline" onClick={previous}>
                <ArrowLeft className="size-4" />
                Previous
              </Button>
              <Button disabled={active === slides.length - 1} onClick={next}>
                Next
                <ArrowRight className="size-4" />
              </Button>
              <Button aria-label="Fullscreen" size="icon" variant="outline" onClick={() => document.documentElement.requestFullscreen?.()}>
                <Maximize2 className="size-4" />
              </Button>
            </div>
          </div>
          <Progress className="h-1 rounded-none bg-white/10" value={progress} />
        </header>

        <div className="flex flex-1 items-center justify-center p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              className="w-full"
              exit={{ opacity: 0, x: -32, scale: 0.98 }}
              initial={{ opacity: 0, x: 32, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <SlideCanvas deck={deck} slide={slide} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
