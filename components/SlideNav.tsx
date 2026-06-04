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
    <nav className="fixed inset-x-0 bottom-0 z-40 h-16 border-t border-[#234879] bg-[#07101f]/84 backdrop-blur-md">
      <div className="mx-auto grid h-full max-w-6xl grid-cols-3 items-center px-6">
        <Button
          variant="outline"
          disabled={isFirst}
          onClick={onPrev}
          className="w-fit border-[#234879] bg-[#10213d]/65 text-[#C4E2F5] hover:border-[#4BB8FA]/70 hover:bg-[#15325c] hover:text-white"
        >
          <ChevronLeft className="size-4" />
          Previous
        </Button>
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm text-[#8fb9d8]">
            Slide {current + 1} / {total}
          </span>
          <Button variant="ghost" onClick={onRestart} className="text-[#8fb9d8] hover:bg-[#15325c] hover:text-white">
            <RotateCcw className="size-4" />
            Restart
          </Button>
        </div>
        <Button
          disabled={isLast}
          onClick={onNext}
          className="ml-auto w-fit bg-gradient-to-r from-[#2C5EAD] via-[#1591DC] to-[#4BB8FA] text-white shadow-[0_0_24px_rgba(75,184,250,0.35)] hover:brightness-110"
        >
          {isLast ? "Selesai" : "Next"}
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </nav>
  );
}
