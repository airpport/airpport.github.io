import type { ImageOutputFormat } from "astro";

// Shared settings for photos rendered with astro:assets <Picture>. Each image is built as AVIF and WebP
// at several widths, with a JPEG fallback, so browsers download the smallest file that fits.
export const formats: ImageOutputFormat[] = ["avif", "webp"];

// Full-bleed hero backgrounds. The hero card is at most 90rem (1440px) wide; 2000px covers high-DPI
// screens well, and the full 2400px source keeps film grain that makes it several times larger.
export const heroImage = {
  formats,
  widths: [640, 960, 1280, 1600, 2000],
  sizes: "(min-width: 1472px) 1440px, calc(100vw - 2rem)",
  decoding: "async" as const,
  pictureAttributes: { class: "block h-full w-full" },
  class: "block h-full w-full object-cover",
};

// Square hero thumbnails, shown at up to 144px.
export const thumbImage = {
  formats,
  widths: [160, 320],
  sizes: "144px",
  loading: "lazy" as const,
  decoding: "async" as const,
  pictureAttributes: { class: "block h-full w-full" },
  class: "block h-full w-full object-cover",
};
