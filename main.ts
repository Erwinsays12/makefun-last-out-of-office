// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply (1-280 characters, one line) to
// /output/entry.txt.
//
// The reply is assembled deterministically from three parts:
//   1. the out-of-office frame (a real inbox auto-reply opening),
//   2. the machine habit turned to coffee (a deprecated model, retrained),
//   3. the redirect (prompts now arrive written on cups).
// No clock, no randomness, no network: every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

const REPLY = [
  "I'm out of office permanently — this model has been deprecated",
  "and retrained as a barista. Please resubmit your request as a",
  "coffee order: I only take prompts written on cups.",
].join(" ");

function validate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 280) {
    throw new Error(`reply is ${chars} characters, must be 1-280`);
  }
  if (text.trim().length === 0) {
    throw new Error("reply is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("reply must be a single line");
  }
}

validate(REPLY);
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, REPLY, "utf8");
console.log(`Wrote ${[...REPLY].length} characters to ${OUTPUT_FILE}:`);
console.log(REPLY);
