import { Camera, ChartDonut, ChartLineUp, Flame, Target } from "@phosphor-icons/react/dist/ssr";
import { FEATURES } from "@/lib/content";

const ICONS = {
  camera: Camera,
  macros: ChartDonut,
  chart: ChartLineUp,
  streak: Flame,
  goal: Target,
};

const TONES = {
  primary: "bg-primary text-ink",
  tint: "bg-line/60 text-ink",
  plain: "border border-line bg-surface text-ink",
};

export default function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Everything you need to stay on track
      </h2>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = ICONS[feature.icon];
          return (
            <div
              key={feature.title}
              className={`flex h-full flex-col justify-between gap-10 rounded-3xl p-7 ${TONES[feature.tone]} ${feature.span}`}
            >
              <Icon
                size={22}
                weight="regular"
                className={feature.tone === "primary" ? "text-ink/60" : "text-muted"}
              />
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2 text-base leading-relaxed opacity-80">{feature.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
