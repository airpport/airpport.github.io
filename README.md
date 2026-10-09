# airpport.github.io

Marketing website for **airpport** — an independent Australian software company and the home of [Spacecamps](https://spacecamps.com.au).

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Static output, deployed to GitHub Pages.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
npm run check    # type-check .astro files
```

Requires Node 22.12+.

## Structure

```
src/
  data/site.ts        # company details, nav, Spacecamps features & pricing
  data/faq.ts         # FAQ content (used on / and /faq)
  layouts/            # BaseLayout (<head>, SEO tags, nav, footer), LegalLayout
  components/         # Hero, HeroTabs, FaqList, CtaBanner, Footer, …
  pages/              # /, /about, /products, /faq, /privacy, /terms, 404, robots.txt
  styles/global.css   # theme tokens (light + dark) and animations
  assets/images/      # hero art and thumbnails, built to AVIF/WebP at several sizes (see data/images.ts)
public/images/og.jpg  # social share image, served as-is
```

The contact page is switched off for now: `src/pages/_contact.astro` is skipped because of the leading
underscore. To bring it back, rename it to `contact.astro` and restore the commented-out "Get in touch"
and Contact links (search for `_contact.astro`).

Most copy changes only need `src/data/site.ts` or `src/data/faq.ts`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
