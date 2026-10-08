import type { APIRoute } from "astro";

// Built from the `site` setting so the sitemap URL always matches the live domain.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
