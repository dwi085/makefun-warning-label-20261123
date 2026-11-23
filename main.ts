// Warning Label for Humans: One Line, Big Laugh
// Writes exactly one line of comedy to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt). Deterministic, no network, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: This human rehearsed this conversation in the shower fourteen times and will still say 'you too' when the waiter says enjoy your meal.";

if ([...LINE].length > 160 || LINE.includes("\n")) {
  throw new Error("entry line must be a single line of at most 160 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
