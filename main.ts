import { writeFileSync, mkdirSync } from "node:fs";

// Output contract: one line, 1-200 chars, UTF-8, no trailing newline — an alien tourist's review of Earth.
const LINE = "Five stars. The locals are loud, the water is wet, and the sunsets are almost worth the gravity.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
