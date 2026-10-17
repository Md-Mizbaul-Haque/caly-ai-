# Caly AI Website

Marketing landing page for Caly AI, the Android calorie tracker. Built with Next.js (App Router), React, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

## Structure

- `src/app/` - the route, layout, and brand tokens (`globals.css`).
- `src/components/` - one file per page section (`SiteNav`, `Hero`, `HowItWorks`, `Features`, `ScreenshotGallery`, `DownloadCta`, `SiteFooter`) plus the `PhoneFrame` device mock.
- `src/lib/content.ts` - all page copy and lists in one place: nav links, steps, features, screenshots, the site URL, the APK URL, and the app version.
- `src/app/` - also holds `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, and the `icon.png` / `apple-icon.png` brand icons.
- `public/brand/` - the app logo.
- `public/screenshots/` - app screenshots for the gallery.

## Add the download file

The download buttons point at `APK_URL` in `src/lib/content.ts`. Locally that is `/caly-ai.apk`.

Drop your built APK into `public/` as `caly-ai.apk`, or point `APK_URL` at a hosted link. Update `APP_VERSION` to match.

For production, host the APK outside the repo (the file is ~125 MB and gitignored) and set `NEXT_PUBLIC_APK_URL`. A GitHub Release asset works well.

## Add screenshots

Put images in `public/screenshots/` and set each `src` in `SCREENSHOTS` (`src/lib/content.ts`), for example `/screenshots/dashboard.png`. Until then each phone frame shows a labeled placeholder.

## Environment variables

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` - public origin, used for metadata, OG tags, robots, and the sitemap. Defaults to `http://localhost:3000`.
- `NEXT_PUBLIC_APK_URL` - hosted APK download URL. Defaults to the local `/caly-ai.apk`.

## Deploy

Deploys to Vercel as-is. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_APK_URL` in the project settings so the download link and metadata resolve correctly.
