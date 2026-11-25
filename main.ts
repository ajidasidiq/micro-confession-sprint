// The Drive Home — Unsent: The Micro-Confession Sprint.
// Writes one two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, and the unsent line itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const addressee = "Dad";
const unsentLine =
  "I rehearse telling you I'm proud of you in the car on the way home, then I just ask if you've eaten yet.";

const entry = `To: ${addressee}\n${unsentLine}\n`;

// Guard the bounty gates before writing anything: the entry must be
// non-empty and at most 260 characters total, and the unsent line itself
// at most 200 characters. Failing loudly here beats shipping a
// disqualified entry.
if (!addressee.trim() || !unsentLine.trim()) {
  throw new Error("Confession is missing its addressee or its unsent line.");
}
if (entry.length < 1 || entry.length > 260) {
  throw new Error(`Entry is ${entry.length} characters; gates require 1–260.`);
}
if (unsentLine.length > 200) {
  throw new Error(`Unsent line is ${unsentLine.length} characters; max is 200.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry (${entry.length} characters) to ${join(outDir, "entry.txt")}`);
