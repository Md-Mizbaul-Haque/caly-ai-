import { STEPS } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
        Three taps to log a meal
      </h2>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <div key={step.title} className="border-t border-line pt-6">
            <span className="font-mono text-xs tracking-[0.2em] text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
            <p className="mt-2 text-base leading-relaxed text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
