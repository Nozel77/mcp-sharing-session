import { readFile } from "node:fs/promises";
import path from "node:path";

export type MarkdownSection = {
  id: string;
  index: number;
  title: string;
  content: string;
  subsections: string[];
  bullets: string[];
  quote?: string;
  tables: MarkdownTable[];
  codeBlocks: string[];
};

export type MarkdownTable = {
  headers: string[];
  rows: string[][];
};

export type DeckContent = {
  title: string;
  subtitle: string;
  sections: MarkdownSection[];
};

const textFixes: Array<[RegExp, string]> = [
  [/\u00e2\u20ac\u201d/g, "-"],
  [/\u00e2\u20ac\u201c/g, "-"],
  [/\u00e2\u2020\u2019/g, "->"],
  [/\u00c2\u00b1/g, "+/-"],
  [/\u00e2\u0153\u2026/g, "Official"],
  [/\u00f0\u0178\u201d\u00a7/g, "Community"],
  [/\u00e2\u0161\u00a0\u00ef\u00b8\u008f/g, "Catatan"],
  [/\u00f0\u0178\u2019\u00a1/g, "Ide"],
  [/\u00f0\u0178\u017d\u00a8/g, "Frontend"],
  [/\u00e2\u0161\u2122\u00ef\u00b8\u008f/g, "Backend"],
  [/\u00f0\u0178\u00a7\u00aa/g, "QA"],
  [/\u00f0\u0178\u203a\u00a0\u00ef\u00b8\u008f/g, "OPS"],
  [/\u00c2/g, ""],
];

function cleanText(value: string) {
  return textFixes.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), value);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function extractTables(content: string): MarkdownTable[] {
  const tables: MarkdownTable[] = [];
  const lines = content.split("\n");

  for (let index = 0; index < lines.length; index += 1) {
    const current = lines[index]?.trim();
    const separator = lines[index + 1]?.trim();

    if (!current?.startsWith("|") || !separator?.match(/^\|[\s:-]+\|/)) {
      continue;
    }

    const block: string[] = [current];
    index += 2;

    while (lines[index]?.trim().startsWith("|")) {
      block.push(lines[index].trim());
      index += 1;
    }

    const [headerLine, ...rowLines] = block;
    const headers = headerLine.split("|").map((cell) => cell.trim()).filter(Boolean);
    const rows = rowLines
      .filter((line) => !line.match(/^\|[\s:-]+\|/))
      .map((line) => line.split("|").map((cell) => cell.trim()).filter(Boolean));

    tables.push({ headers, rows });
  }

  return tables;
}

function extractListItems(content: string) {
  return content
    .split("\n")
    .filter((line) => /^\s*(-|\d+\.)\s+/.test(line))
    .map((line) => line.replace(/^\s*(-|\d+\.)\s+/, "").replace(/\[(.*?)\]\(.*?\)/g, "$1").trim())
    .filter(Boolean);
}

function extractCodeBlocks(content: string) {
  return [...content.matchAll(/```(?:\w+)?\n([\s\S]*?)```/g)].map((match) => match[1].trim());
}

function parseSections(markdown: string): MarkdownSection[] {
  const matches = [...markdown.matchAll(/^##\s+(.+?)\n([\s\S]*?)(?=^##\s+|\s*$)/gm)];

  return matches.map((match, index) => {
    const title = match[1].trim();
    const content = match[2].trim();
    const quote = content
      .split("\n")
      .find((line) => line.trim().startsWith(">"))
      ?.replace(/^>\s*/, "")
      .replace(/\*\*/g, "")
      .trim();

    return {
      id: slugify(title),
      index: index + 1,
      title,
      content,
      subsections: [...content.matchAll(/^###\s+(.+?)$/gm)].map((item) => item[1].trim()),
      bullets: extractListItems(content),
      quote,
      tables: extractTables(content),
      codeBlocks: extractCodeBlocks(content),
    };
  });
}

export async function getDeckContent(): Promise<DeckContent> {
  const filePath = path.join(process.cwd(), "MCP.md");
  const markdown = cleanText(await readFile(filePath, "utf8"));
  const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? "Model Context Protocol";
  const subtitle =
    markdown.match(/^>\s+(.+)$/m)?.[1]?.replace(/\*/g, "").trim() ??
    "Materi Sharing Session - Divisi Teknologi & ";

  return {
    title,
    subtitle,
    sections: parseSections(markdown),
  };
}
