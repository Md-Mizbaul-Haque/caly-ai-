export const APP_NAME = "Caly AI";

// Public site origin. NEXT_PUBLIC_SITE_URL wins; Vercel's own domain is the
// fallback so metadata, robots, and the sitemap never point at localhost.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Local APK lives in `public/caly-ai.apk`. In production set NEXT_PUBLIC_APK_URL
// to a hosted build (the 125 MB file is gitignored and too big for most hosts).
export const APK_URL = process.env.NEXT_PUBLIC_APK_URL ?? "/caly-ai.apk";
export const APP_VERSION = "1.0.0";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Screenshots", href: "#screenshots" },
];

export const STEPS = [
  {
    title: "Snap",
    body: "Point your camera at a plate, a barcode, or a food label.",
  },
  {
    title: "Scan",
    body: "Caly reads the photo and estimates calories, protein, carbs, and fat.",
  },
  {
    title: "Track",
    body: "Watch your day fill up against the goal you set, meal by meal.",
  },
] as const;

export const FEATURES = [
  {
    title: "AI food scan",
    body: "Photo, barcode, or label. Caly reads them all and fills in the numbers.",
    icon: "camera",
    span: "lg:col-span-2",
    tone: "primary",
  },
  {
    title: "Macro breakdown",
    body: "Protein, carbs, and fat tracked beside your calories.",
    icon: "macros",
    span: "lg:col-span-1",
    tone: "plain",
  },
  {
    title: "Weight chart",
    body: "Log your weight and follow the trend from 90 days to a full year.",
    icon: "chart",
    span: "lg:col-span-1",
    tone: "tint",
  },
  {
    title: "Streaks",
    body: "Keep your logging streak alive, one day at a time.",
    icon: "streak",
    span: "lg:col-span-2",
    tone: "plain",
  },
  {
    title: "Daily calorie goal",
    body: "Set a goal anywhere from 500 to 10,000 kcal and Caly keeps score.",
    icon: "goal",
    span: "lg:col-span-3",
    tone: "tint",
  },
] as const;

// Screenshots live in `public/screenshots/`. Swap the files or add entries as needed.
export const SCREENSHOTS = [
  { label: "Dashboard", src: "/screenshots/dashboard.png" },
  { label: "AI scan", src: "/screenshots/scan.png" },
  { label: "Log food", src: "/screenshots/log-food.png" },
  { label: "Meal details", src: "/screenshots/meal-details.png" },
  { label: "Progress", src: "/screenshots/progress.png" },
] as const;
