// news-image-20261122 entrypoint: validates the front-page PNG for
// Sunday 22 November 2026 and copies it to $MAKEFUN_OUTPUT_DIR/entry.png.
// Node 22 stdlib only; no network. Refuses truncated files (missing IEND).
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const src = new URL("./entry.png", import.meta.url);
const buf = readFileSync(src);

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (buf.length < 45 || !buf.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}
// A whole PNG ends with a valid IEND chunk (12 bytes: length 0, "IEND", CRC).
const iend = buf.subarray(buf.length - 12);
if (
  iend.readUInt32BE(0) !== 0 ||
  iend.toString("ascii", 4, 8) !== "IEND" ||
  iend.readUInt32BE(8) !== 0xae426082
) {
  throw new Error("entry.png has no valid IEND chunk: file may be truncated");
}
if (buf.length > 1048576) {
  throw new Error(`entry.png is ${buf.length} bytes, over the 1 MiB limit`);
}
if (buf.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk");
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const written = statSync(dest);
console.log(`wrote ${dest} (${width}x${height}, ${written.size} bytes)`);
