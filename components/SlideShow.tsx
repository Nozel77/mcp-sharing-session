"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProgressDots } from "@/components/ProgressDots";
import { SlideNav } from "@/components/SlideNav";
import { SLIDES } from "@/data/slides";

export function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = SLIDES.length;

  const goNext = useCallback(() => {
    setCurrentSlide((current) => Math.min(current + 1, total - 1));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentSlide((current) => Math.max(current - 1, 0));
  }, []);

  const restart = useCallback(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") restart();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, restart]);

  const ActiveSlide = useMemo(() => SLIDES[currentSlide].component, [currentSlide]);

  return (
    <main className="min-h-screen bg-[#0a0e1a] text-[#e2e8f0]">
      <ProgressDots total={total} current={currentSlide} />
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[currentSlide].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ActiveSlide />
        </motion.div>
      </AnimatePresence>
      <SlideNav current={currentSlide} total={total} onPrev={goPrev} onNext={goNext} onRestart={restart} />
    </main>
  );
}
