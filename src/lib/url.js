/* Base-aware URL helper (Astro base = /Askesis/). */
export function u(path = "") {
  const base = import.meta.env.BASE_URL || "/";
  const clean = String(path).replace(/^\/+/, "");
  return base.endsWith("/") ? base + clean : base + "/" + clean;
}
