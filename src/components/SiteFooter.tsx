import Image from "next/image";
import { APP_NAME, NAV_LINKS } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/brand/caly-logo.png"
            alt={`${APP_NAME} logo`}
            width={28}
            height={28}
            className="h-7 w-7 rounded-md"
          />
          <span className="font-bold tracking-tight">{APP_NAME}</span>
        </div>

        <nav className="flex flex-wrap gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted">© 2026 {APP_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
