export function BeforeAfterPanel({
  before,
  after,
  saving,
}: {
  before: { time: string; steps: string[] };
  after: { time: string; steps: string[] };
  saving: string;
}) {
  return (
    <div className="deck-surface rounded-xl border border-[#234879] p-5">
      <div className="grid gap-4 md:grid-cols-2">
        <ScenarioColumn accent="text-[#8fb9d8]" title={`Tanpa MCP - ${before.time}`} mark="x" steps={before.steps} />
        <ScenarioColumn accent="text-[#4BB8FA]" title={`Dengan MCP - ${after.time}`} mark="check" steps={after.steps} />
      </div>
      <div className="mt-4 rounded-lg border border-[#4BB8FA]/35 bg-[#1591DC]/16 px-4 py-2 text-center text-sm font-semibold text-[#C4E2F5]">
        {saving}
      </div>
    </div>
  );
}

function ScenarioColumn({
  accent,
  title,
  mark,
  steps,
}: {
  accent: string;
  title: string;
  mark: "x" | "check";
  steps: string[];
}) {
  return (
    <div className="rounded-lg border border-[#234879] bg-[#0b1b33]/80 p-4">
      <h3 className={`mb-3 text-sm font-semibold ${accent}`}>{mark === "x" ? "x" : "✓"} {title}</h3>
      <ol className="space-y-2">
        {steps.map((step, index) => (
          <li key={step} className="font-mono text-xs leading-relaxed text-[#C4E2F5]">
            {index + 1}. {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
