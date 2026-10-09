// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // The live domain. Sitemap URLs, canonicals and social image URLs are all built from this.
  site: "https://airpport.com",
  // Pages build to about.html etc., which GitHub Pages serves at /about with no redirect, so URLs (links,
  // canonicals, sitemap) never end in a slash. Only the home page keeps its "/", since every root URL has one.
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
