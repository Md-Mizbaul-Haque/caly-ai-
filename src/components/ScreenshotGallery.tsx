import PhoneFrame from "./PhoneFrame";
import { SCREENSHOTS } from "@/lib/content";

export default function ScreenshotGallery() {
  return (
    <section id="screenshots" className="w-full py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A look inside Caly</h2>
        <div className="scrollbar-brand mt-10 flex snap-x gap-6 overflow-x-auto pb-4">
          {SCREENSHOTS.map((shot) => (
            <div key={shot.label} className="snap-start">
              <PhoneFrame src={shot.src} label={shot.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
