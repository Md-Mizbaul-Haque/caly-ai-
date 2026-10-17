import { Camera, Scan, Target } from "@phosphor-icons/react/dist/ssr";
import { STEPS } from "@/lib/content";

const ICONS = { camera: Camera, scan: Scan, target: Target };

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:py-24">
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Three taps to log a meal
      </h2>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, i) => {
          const Icon = ICONS[step.icon];
          return (
            <div key={step.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={24} weight="bold" />
              </div>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-sm font-semibold text-muted">{i + 1}</span>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="mt-2 text-base leading-relaxed text-muted">{step.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
