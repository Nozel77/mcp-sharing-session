import type { ReactNode } from "react";

export function SlideWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#07101f] px-8 pb-20 pt-10 md:px-16 lg:px-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,_rgba(75,184,250,0.20)_0%,_transparent_31%),radial-gradient(circle_at_84%_20%,_rgba(21,145,220,0.20)_0%,_transparent_31%),radial-gradient(circle_at_58%_82%,_rgba(196,226,245,0.12)_0%,_transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(44,94,173,0.18),_transparent_36%,_rgba(75,184,250,0.10)_72%,_transparent)]" />
      <div className="relative z-10 w-full max-w-6xl">{children}</div>
    </section>
  );
}
