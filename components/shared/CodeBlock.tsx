export function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className="min-w-0 rounded-lg border border-[#234879] bg-[#061225]/95 p-4 shadow-inner shadow-[#4BB8FA]/5">
      {label ? <div className="mb-2 text-[10px] uppercase tracking-widest text-[#8fb9d8]">{label}</div> : null}
      <pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs leading-relaxed text-[#C4E2F5]">{code}</pre>
    </div>
  );
}
