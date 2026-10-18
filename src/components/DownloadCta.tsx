import Image from "next/image";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { APK_URL, APP_NAME, APP_VERSION } from "@/lib/content";

export default function DownloadCta() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-4 py-16 text-center sm:gap-6 sm:px-6 sm:py-20 md:py-24">
        <Image
          src="/brand/caly-logo.png"
          alt={`${APP_NAME} logo`}
          width={64}
          height={64}
          className="h-14 w-14 rounded-2xl sm:h-16 sm:w-16"
        />
        <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
          Get {APP_NAME} on Android
        </h2>
        <p className="max-w-xl text-base leading-relaxed sm:text-lg">
          Download the app and scan your next meal in under a minute.
        </p>
        <a
          href={APK_URL}
          download
          className="inline-flex h-12 w-full max-w-xs items-center justify-center gap-2 rounded-full bg-surface px-7 text-base font-semibold text-ink transition-colors hover:bg-cream active:scale-[0.98] sm:w-auto"
        >
          <DownloadSimple size={22} weight="bold" />
          Download for Android
        </a>
        <p className="text-sm font-medium">Version {APP_VERSION}, Android</p>
      </div>
    </section>
  );
}
