# airpport.github.io

Marketing website for **airpport** — an independent Australian software company and the home of [SPACECAMPS](https://spacecamps.com.au).

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
  data/site.ts        # company details, nav, SPACECAMPS features & pricing
  data/faq.ts         # FAQ content (used on / and /faq)
  layouts/            # BaseLayout (<head>, SEO tags, nav, footer), LegalLayout
  components/         # Hero, HeroTabs, FaqList, CtaBanner, Footer, …
  pages/              # /, /about, /products, /faq, /contact, /privacy, /terms, 404, robots.txt
  styles/global.css   # theme tokens (light + dark) and animations
public/images/        # hero art, thumbnails and the social share image
```

Most copy changes only need `src/data/site.ts` or `src/data/faq.ts`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
