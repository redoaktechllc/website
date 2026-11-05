// Zero-dependency static file server for local preview.
// Usage: node scripts/serve.mjs   ->   http://localhost:4321
// Mirrors Vercel's cleanUrls: /insights serves insights/index.html,
// /insights/foo serves insights/foo.html.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../public", import.meta.url));
const PORT = Number(process.env.PORT) || 4321;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

async function tryFile(p) {
  try {
    const s = await stat(p);
    if (s.isFile()) return p;
  } catch {}
  return null;
}

async function resolve(urlPath) {
  const clean = normalize(decodeURIComponent(urlPath.split("?")[0])).replace(/^(\.\.[/\\])+/, "");
  const base = join(ROOT, clean);
  // Candidates in order, matching Vercel cleanUrls behavior.
  const candidates = [];
  if (urlPath === "/" || clean.endsWith("/")) {
    candidates.push(join(base, "index.html"));
  } else if (!extname(base)) {
    candidates.push(base + ".html", join(base, "index.html"), base);
  } else {
    candidates.push(base);
  }
  for (const c of candidates) {
    const hit = await tryFile(c);
    if (hit) return hit;
  }
  return null;
}

createServer(async (req, res) => {
  const file = await resolve(req.url || "/");
  if (!file) {
    const notFound = await tryFile(join(ROOT, "404.html"));
    if (notFound) {
      res.writeHead(404, { "Content-Type": TYPES[".html"] });
      res.end(await readFile(notFound));
      return;
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }
  const type = TYPES[extname(file).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": type });
  res.end(await readFile(file));
}).listen(PORT, () => {
  console.log(`Red Oak dev server → http://localhost:${PORT}`);
});
