// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // The live domain. Sitemap URLs, canonicals and social image URLs are all built from this.
  site: "https://airpport.com",
  // Pages build to folders, and GitHub Pages redirects /about to /about/, so link to the slash form everywhere.
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
