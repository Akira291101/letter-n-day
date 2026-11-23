import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const outputDir: string = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const entry: string = "N";
if (entry.length !== 1 || !/^[A-Z]$/.test(entry)) {
  throw new Error("Entry must be exactly one uppercase letter A-Z");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
