import { ArrowRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import PhoneFrame from "./PhoneFrame";
import { APK_URL, SCREENSHOTS } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:grid-cols-2 lg:gap-16 lg:pb-24"
    >
      <div className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          AI calorie tracking for Android
        </p>
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Calories, without the counting.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Snap a photo of your meal and Caly AI logs the calories and macros for you.
        </p>
        <div className="mt-8 flex flex-row gap-3">
          <a
            href={APK_URL}
            download
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark active:scale-[0.98] sm:px-6 sm:text-base"
          >
            <DownloadSimple size={20} weight="bold" />
            <span className="sm:hidden">Download</span>
            <span className="hidden sm:inline">Download for Android</span>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-12 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-4 text-sm font-semibold transition-colors hover:border-ink/30 active:scale-[0.98] sm:px-6 sm:text-base"
          >
            <span className="sm:hidden">How it works</span>
            <span className="hidden sm:inline">See how it works</span>
            <ArrowRight size={18} weight="bold" />
          </a>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <PhoneFrame src={SCREENSHOTS[0].src} label={SCREENSHOTS[0].label} priority />
      </div>
    </section>
  );
}
