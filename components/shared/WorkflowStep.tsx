export function WorkflowStep({ number, children }: { number: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#4BB8FA]/45 bg-[#1591DC]/16 font-mono text-[10px] text-[#4BB8FA]">
        {number}
      </span>
      <span className="font-mono text-xs leading-relaxed text-[#C4E2F5]">{children}</span>
    </li>
  );
}
