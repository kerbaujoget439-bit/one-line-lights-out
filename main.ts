// One Line, Lights Out — writes a single status-update line to /output/entry.txt.
//
// Draft line: a first pass. It states the event plainly ("lid closed") and
// ends on an unsent draft, but "draft" is generic — the revision sharpens
// the detail to the exact untyped word the cursor stopped on.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "lid closed. i saved everything, even the draft they never sent.";

if ([...line].length > 200 || line.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters and not only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
