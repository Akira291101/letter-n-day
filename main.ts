import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const outputDir: string = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "N", "utf8");
