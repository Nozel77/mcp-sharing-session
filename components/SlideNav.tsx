"use client";

import { ChevronLeft, ChevronRight, EyeOff, HelpCircle, Maximize2, RotateCcw, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SlideNav({
  current,
  total,
  title,
  section,
  onPrev,
  onNext,
  onRestart,
  onFullscreen,
  onHideControls,
}: {
  current: number;
  total: number;
  title: string;
  section: string;
  onPrev: () => void;
  onNext: () => void;
  onRestart: () => void;
  onFullscreen: () => void;
  onHideControls: () => void;
}) {
  const isFirst = current === 0;
  const isLast = current === total - 1;
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#234879] bg-[#07101f]/92 backdrop-blur-md">
      {helpOpen ? (
        <div className="absolute bottom-full right-4 mb-3 w-[min(360px,calc(100vw-32px))] rounded-lg border border-[#234879] bg-[#10213d] p-4 shadow-2xl shadow-black/40">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-white">Presenter Help</p>
              <p className="text-xs text-[#8fb9d8]">Shortcut dan remote.</p>
            </div>
            <Button size="icon" variant="ghost" aria-label="Close help" onClick={() => setHelpOpen(false)}>
              <X className="size-4" />
            </Button>
          </div>
          <div className="grid gap-2 text-xs text-[#C4E2F5]">
            <HelpRow keys="Right / Space" label="Next slide" />
            <HelpRow keys="Left" label="Previous slide" />
            <HelpRow keys="Esc" label="Restart deck" />
            <HelpRow keys="/remote" label="Phone remote page" />
            <HelpRow keys="?presenter=777777" label="Enable presenter sync" />
          </div>
        </div>
      ) : null}
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
        <div className="flex min-w-0 items-center justify-center gap-1 sm:gap-2 md:gap-4">
          <div className="min-w-0 text-center">
            <span className="block truncate text-[10px] font-semibold uppercase text-[#4BB8FA] sm:text-xs">{section}</span>
            <span className="block truncate text-xs text-[#8fb9d8] sm:text-sm">
              {current + 1} / {total} - {title}
            </span>
          </div>
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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setHelpOpen((value) => !value)}
            aria-label="Presenter help"
            className="shrink-0 text-[#8fb9d8] hover:bg-[#15325c] hover:text-white"
          >
            <HelpCircle className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onFullscreen}
            aria-label="Fullscreen"
            className="shrink-0 text-[#8fb9d8] hover:bg-[#15325c] hover:text-white"
          >
            <Maximize2 className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onHideControls}
            aria-label="Hide controls"
            className="shrink-0 text-[#8fb9d8] hover:bg-[#15325c] hover:text-white"
          >
            <EyeOff className="size-4" />
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

function HelpRow({ keys, label }: { keys: string; label: string }) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-3 rounded-md bg-[#07101f]/80 px-3 py-2">
      <span className="font-mono text-[#4BB8FA]">{keys}</span>
      <span>{label}</span>
    </div>
  );
}
