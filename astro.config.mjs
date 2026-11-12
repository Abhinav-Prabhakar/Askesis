import { defineConfig } from "astro/config";

// Static site for GitHub Pages (deploy-from-branch, no Actions).
// Built output goes to docs/, which Pages serves as the site root.
export default defineConfig({
  site: "https://abhinav-prabhakar.github.io",
  base: "/Askesis",
  outDir: "./docs",
  trailingSlash: "always"
});
