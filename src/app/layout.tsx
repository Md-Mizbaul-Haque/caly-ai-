import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { APP_NAME, SITE_URL } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = `${APP_NAME} - AI calorie tracker for Android`;
const DESCRIPTION =
  "Snap or log your meals and let Caly AI track calories, macros, and weight against your daily goal. Download the Android app.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: `%s | ${APP_NAME}` },
  description: DESCRIPTION,
  applicationName: APP_NAME,
  keywords: [
    "calorie tracker",
    "AI food scan",
    "macro tracker",
    "nutrition app",
    "Android",
    APP_NAME,
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f2470c",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
