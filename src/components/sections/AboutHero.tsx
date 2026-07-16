import Image from "next/image";

/**
 * Component: AboutHero
 * Purpose: Split hero for /about — full-height background image on the
 * left with a floating highlight card, eyebrow + headline + CTA on the
 * right, matching the reference layout.
 * Props: none.
 */
export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left: background image + floating card */}
      <div className="relative h-[320px] w-full lg:h-[640px]">
        <Image
          src="/images/bg-img.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />

        {/* Floating highlight card */}
        <div className="absolute left-6 top-1/2 flex w-[280px] -translate-y-1/2 items-start gap-3 rounded-xl bg-white p-3 shadow-lg sm:left-10">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-sand">
            <Image
              src="/images/blogimg1.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <span className="inline-block bg-yellow-300 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink">
              Featured
            </span>
            <p className="mt-1.5 text-sm font-semibold leading-snug text-ink">
              you are 16% off your 2027 emission goals
            </p>
            <p className="mt-1.5 text-xs text-ink-soft">4 min read</p>
          </div>
        </div>
      </div>

      {/* Right: eyebrow + headline + CTA */}
      <div className="flex items-center bg-white px-6 py-16 sm:px-12 lg:px-16">
        <div className="max-w-md">
          <p className="text-sm font-medium uppercase tracking-wide text-ink-soft">
            Our Mission
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Climate action starts with better information. We help organizations
            turn complex data into measurable, meaningful change.
          </h1>

          <button
            type="button"
            className="mt-8 w-full rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85 active:scale-95"
          >
            Meet the team
          </button>
        </div>
      </div>
    </section>
  );
}
