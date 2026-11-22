import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";
import { pageDates } from "./sitemap-dates";

const BASE = "https://scaleseo.co";

// Routes that exist as pages but must not be listed (noindex, utility pages).
// Redirected URLs live in next.config.js and have no page file, so they
// can never be picked up here.
const EXCLUDE = new Set(["/thank-you"]);

// Every static page.tsx under src/app becomes a sitemap URL automatically.
// Dynamic routes ([slug]) are skipped and added from their data source below.
function staticRoutes(dir = path.join(process.cwd(), "src/app"), route = ""): string[] {
  const out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isFile() && e.name === "page.tsx") out.push(route || "/");
    if (e.isDirectory() && !e.name.startsWith("[") && !e.name.startsWith("_") && !e.name.startsWith("(")) {
      out.push(...staticRoutes(path.join(dir, e.name), `${route}/${e.name}`));
    }
  }
  return out;
}

const day = (iso: string) => new Date(iso).toISOString().slice(0, 10);

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = posts.map((p) => day(p.updated ?? p.date)).sort().pop();
  const dates: Record<string, string | undefined> = { ...pageDates, "/blog": latestPost };

  const pages: MetadataRoute.Sitemap = staticRoutes()
    .filter((r) => !EXCLUDE.has(r))
    .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)))
    .map((r) => ({
      url: r === "/" ? BASE : `${BASE}${r}`,
      ...(dates[r] ? { lastModified: dates[r] } : {}),
    }));

  const articles: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: day(p.updated ?? p.date),
  }));

  return [...pages, ...articles];
}
