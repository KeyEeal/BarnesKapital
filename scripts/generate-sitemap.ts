/**
 * scripts/generate-sitemap.ts
 *
 * Automated sitemap generator for Barnes Kapital (Vite + React SPA).
 * Runs as a pre-build step via `tsx` — zero runtime dependencies.
 *
 * Output: /public/sitemap.xml
 */

import { writeFileSync, statSync } from "fs";
import { resolve, join } from "path";

// ─── Configuration ─────────────────────────────────────────────────────────

const BASE_URL = "https://barneskapital.pages.dev";

/**
 * Route definitions.
 *
 * Each entry maps directly to a React Router <Route path="..." />.
 * Fields:
 *   path        — must match the React Router path exactly
 *   priority    — 0.0–1.0; Google treats >0.5 as higher-importance
 *   changefreq  — crawl frequency hint (Google respects this loosely)
 *   sourceFile  — optional: path to the page component, used to derive
 *                 a real lastmod date from the file's mtime.
 *                 Falls back to today's date if omitted or unresolvable.
 */
interface RouteConfig {
  path: string;
  priority: number;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  sourceFile?: string;
}

const ROUTES: RouteConfig[] = [
  {
    path: "/",
    priority: 1.0,
    changefreq: "monthly",
    sourceFile: "src/componentsLanding/LandingAbout.tsx",
  },
  {
    path: "/about",
    priority: 0.8,
    changefreq: "monthly",
    sourceFile: "src/componentsAboutPage/AboutStory.tsx",
  },
  {
    path: "/contact",
    priority: 0.6,
    changefreq: "yearly",
    sourceFile: "src/componentsContactPage/ContactBody.tsx",
  },
];

/**
 * Routes to exclude from the sitemap entirely.
 * Add paths here if you later introduce 404, private, or utility routes.
 *
 * Example: ["/404", "/admin", "/dev-only"]
 */
const EXCLUDED_PATHS: string[] = [];

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Derives a lastmod date from the file's mtime (last modified timestamp).
 * Falls back to today's ISO date if the file cannot be read.
 * This gives Google a truthful signal about when content actually changed,
 * rather than the date the script ran.
 */
function getLastMod(sourceFile?: string): string {
  if (sourceFile) {
    try {
      const absolutePath = resolve(process.cwd(), sourceFile);
      const stat = statSync(absolutePath);
      return stat.mtime.toISOString().split("T")[0]; // YYYY-MM-DD
    } catch {
      // File path incorrect or not yet created — fail gracefully
    }
  }
  return new Date().toISOString().split("T")[0];
}

/**
 * Normalises a route path into a full canonical URL.
 * Handles trailing slashes and double-slash edge cases.
 */
function toAbsoluteUrl(base: string, path: string): string {
  const normBase = base.replace(/\/$/, "");
  const normPath = path === "/" ? "" : path;
  return `${normBase}${normPath}`;
}

/**
 * Escapes characters that are invalid inside XML text nodes.
 * Necessary for any user-supplied values (e.g. future dynamic routes).
 */
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// ─── Generator ─────────────────────────────────────────────────────────────

function generateSitemap(): void {
  const activeRoutes = ROUTES.filter(
    (route) => !EXCLUDED_PATHS.includes(route.path)
  );

  if (activeRoutes.length === 0) {
    console.warn("[sitemap] ⚠  No routes to process. Sitemap not written.");
    return;
  }

  const urlEntries = activeRoutes
    .map((route) => {
      const loc = escapeXml(toAbsoluteUrl(BASE_URL, route.path));
      const lastmod = getLastMod(route.sourceFile);

      return [
        `  <url>`,
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority.toFixed(1)}</priority>`,
        `  </url>`,
      ].join("\n");
    })
    .join("\n");

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    urlEntries,
    `</urlset>`,
    "", // trailing newline
  ].join("\n");

  const outputPath = join(process.cwd(), "public", "sitemap.xml");

  writeFileSync(outputPath, xml, "utf-8");

  console.log(`[sitemap] ✓  Written to ${outputPath}`);
  console.log(`[sitemap] ✓  ${activeRoutes.length} URL(s) included:`);
  activeRoutes.forEach((r) =>
    console.log(`           → ${toAbsoluteUrl(BASE_URL, r.path)}`)
  );
}

// ─── Entry Point ───────────────────────────────────────────────────────────

generateSitemap();