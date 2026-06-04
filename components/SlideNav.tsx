"use client";

import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SlideNav({
  current,
  total,
  onPrev,
  onNext,
  onRestart,
}: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onRestart: () => void;
}) {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#234879] bg-[#07101f]/90 backdrop-blur-md">
      <div className="mx-auto grid min-h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-2 sm:px-4 md:px-6">
        <Button
          variant="outline"
          disabled={isFirst}
          onClick={onPrev}
          aria-label="Previous slide"
          className="w-fit border-[#234879] bg-[#10213d]/65 px-3 text-[#C4E2F5] hover:border-[#4BB8FA]/70 hover:bg-[#15325c] hover:text-white sm:px-4"
        >
          <ChevronLeft className="size-4" />
          <span className="hidden sm:inline">Previous</span>
        </Button>
        <div className="flex min-w-0 items-center justify-center gap-2 sm:gap-4">
          <span className="truncate text-xs text-[#8fb9d8] sm:text-sm">
            Slide {current + 1} / {total}
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={onRestart}
            aria-label="Restart slideshow"
            className="shrink-0 text-[#8fb9d8] hover:bg-[#15325c] hover:text-white sm:w-auto sm:px-3"
          >
            <RotateCcw className="size-4" />
            <span className="hidden sm:inline">Restart</span>
          </Button>
        </div>
        <Button
          disabled={isLast}
          onClick={onNext}
          aria-label={isLast ? "Finished" : "Next slide"}
          className="ml-auto w-fit bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] px-3 text-white shadow-[0_0_24px_rgba(75,184,250,0.35)] hover:brightness-110 sm:px-4"
        >
          <span className="hidden sm:inline">{isLast ? "Selesai" : "Next"}</span>
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </nav>
  );
}
