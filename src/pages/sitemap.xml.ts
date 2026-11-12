import { ENTRIES, THINKERS, TRADITIONS, EXPERIMENTS, SERIES, SOON } from "../data/library.js";

// Generated at build time so the sitemap never drifts from the library.
export function GET({ site }: { site: URL }) {
  const base = import.meta.env.BASE_URL;
  const paths = [
    "",
    "start-here/",
    ...ENTRIES.map((e: any) => `entry/${e.slug}/`),
    ...THINKERS.map((t: any) => `thinker/${t.slug}/`),
    ...TRADITIONS.map((t: any) => `tradition/${t.slug}/`),
    ...EXPERIMENTS.map((x: any) => `experiment/${x.slug}/`),
    ...SERIES.map((s: any) => `series/${s.slug}/`),
    ...SOON.map((s: any) => `soon/${s.slug}/`),
  ];
  const urls = paths
    .map((p) => `  <url><loc>${new URL(base + p, site).href}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
