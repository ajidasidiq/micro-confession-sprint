// The Drive Home — Unsent: The Micro-Confession Sprint.
// Writes one two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, and the unsent line itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const addressee = "Dad";
const unsentLine =
  "I rehearse telling you I'm proud of you in the car on the way home, then I just ask if you've eaten yet.";

const entry = `To: ${addressee}\n${unsentLine}\n`;

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry (${entry.length} characters) to ${join(outDir, "entry.txt")}`);
