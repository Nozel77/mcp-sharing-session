import type { ReactNode } from "react";

export function SlideWrapper({ children }: { children: ReactNode }) {
  return (
    <section className="relative flex flex-col items-center justify-start bg-[#07101f] px-4 pb-28 pt-8 sm:px-6 md:h-dvh md:justify-center md:overflow-hidden md:px-10 md:pb-24 md:pt-10 lg:px-16 xl:px-24 max-md:min-h-dvh max-md:overflow-y-auto">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,_rgba(75,184,250,0.12)_0%,_transparent_31%),radial-gradient(circle_at_84%_20%,_rgba(21,145,220,0.10)_0%,_transparent_31%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(44,94,173,0.10),_transparent_38%,_rgba(75,184,250,0.06)_72%,_transparent)]" />
      <div className="relative z-10 w-full max-w-6xl">{children}</div>
    </section>
  );
}
