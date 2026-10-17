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
  primary: "bg-primary text-white",
  tint: "border border-line bg-line/40 text-ink",
  plain: "border border-line bg-surface text-ink",
};

export default function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Everything you need to stay on track
      </h2>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = ICONS[feature.icon];
          const isPrimary = feature.tone === "primary";
          return (
            <div
              key={feature.title}
              className={`flex h-full flex-col gap-6 rounded-3xl p-6 ${TONES[feature.tone]} ${feature.span}`}
            >
              <Icon
                size={22}
                weight="regular"
                className={isPrimary ? "text-white/70" : "text-muted"}
              />
              <div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className={`mt-2 text-base leading-relaxed ${isPrimary ? "text-white" : "text-muted"}`}>
                  {feature.body}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
