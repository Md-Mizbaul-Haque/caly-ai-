import Image from "next/image";
import { APK_URL, APP_NAME, NAV_LINKS } from "@/lib/content";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/brand/caly-logo.png"
            alt={`${APP_NAME} logo`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg"
          />
          <span className="text-base font-bold tracking-tight">{APP_NAME}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={APK_URL}
          download
          className="inline-flex h-10 shrink-0 items-center rounded-full bg-primary px-5 text-sm font-semibold text-ink transition-colors hover:bg-primary-dark active:scale-[0.98]"
        >
          Download for Android
        </a>
      </div>
    </header>
  );
}
