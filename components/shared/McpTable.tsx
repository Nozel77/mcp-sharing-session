import { StatusBadge, type Status } from "@/components/shared/StatusBadge";

export type McpTableRow = {
  server: string;
  status: Status | Status[];
  description: string;
  note?: string;
};

export function McpTable({ rows, prompt }: { rows: McpTableRow[]; prompt?: string }) {
  return (
    <div className="min-w-0 max-w-full">
      <div className="max-w-full overflow-x-auto rounded-xl border border-[#234879] shadow-[0_18px_60px_rgba(3,12,28,0.28)] [touch-action:pan-x]">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="bg-gradient-to-r from-[#2C5EAD]/55 via-[#1591DC]/35 to-[#4BB8FA]/25 text-[10px] uppercase tracking-widest text-[#C4E2F5]">
              <th className="px-4 py-3 font-semibold">MCP Server</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Fungsi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.server}
                className={`${index % 2 === 0 ? "bg-[#10213d]/95" : "bg-[#0b1b33]/95"} border-b border-[#234879] last:border-b-0`}
              >
                <td className="px-4 py-3 text-xs font-semibold text-white">{row.server}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {(Array.isArray(row.status) ? row.status : [row.status]).map((status) => (
                      <StatusBadge key={status} status={status} />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-xs leading-relaxed text-[#C4E2F5]">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {prompt ? (
        <blockquote className="mt-4 rounded-r-lg border-l-2 border-[#4BB8FA] bg-gradient-to-r from-[#2C5EAD]/28 to-[#1591DC]/12 px-4 py-3 text-xs italic leading-relaxed text-[#C4E2F5]">
          {prompt}
        </blockquote>
      ) : null}
    </div>
  );
}
