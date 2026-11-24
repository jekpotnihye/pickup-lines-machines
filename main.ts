import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Read the pickup line from entry.txt next to this program, falling back
// to the working directory, so the line stays a single source of truth.
function readEntryLine(): string {
  const candidates = [
    join(dirname(fileURLToPath(import.meta.url)), "entry.txt"),
    join(process.cwd(), "entry.txt"),
  ];
  for (const candidate of candidates) {
    try {
      // Keep the entry to one line: fold any wrapped lines together and
      // trim the ends, so the gate counts exactly the line itself.
      const text = readFileSync(candidate, "utf8")
        .replace(/\s*\n\s*/g, " ")
        .trim();
      if (text.length > 0) {
        return text;
      }
    } catch {
      // Try the next candidate.
    }
  }
  throw new Error("entry.txt was not found next to main.ts or in the working directory");
}

const line = readEntryLine();
if (line.length > 200) {
  throw new Error(`entry is ${line.length} characters, over the 200-character limit`);
}

// The grader names the output directory with MAKEFUN_OUTPUT_DIR; it is
// /output in the sandbox. Fall back to /output when the variable is unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
