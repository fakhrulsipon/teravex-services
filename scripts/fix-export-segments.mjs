/**
 * Post-build fix for static export on Windows.
 *
 * Next.js names prefetch files like `about/__next.about.__PAGE__.txt` by replacing "/" with "."
 * in the segment path — but on Windows the path contains "\" instead, so the build writes
 * `about/__next.about/__PAGE__.txt` (a folder) and the browser's prefetch requests 404.
 *
 * This script flattens any `__next.*` folder in `out/` back into dotted filenames.
 * On macOS / Linux builds there is nothing to fix, so it does nothing.
 */
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.argv[2] ?? "out");
let fixed = 0;

function flatten(dir, prefix, targetDir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const src = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      flatten(src, `${prefix}.${entry.name}`, targetDir);
    } else {
      fs.renameSync(src, path.join(targetDir, `${prefix}.${entry.name}`));
      fixed++;
    }
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (entry.name.startsWith("__next.")) {
      flatten(full, entry.name, dir);
      fs.rmSync(full, { recursive: true, force: true });
    } else if (entry.name !== "_next") {
      walk(full);
    }
  }
}

if (fs.existsSync(outDir)) {
  walk(outDir);
  if (fixed) console.log(`fix-export-segments: flattened ${fixed} prefetch file(s) in ${outDir}`);
}
