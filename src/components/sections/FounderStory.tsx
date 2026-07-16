import Image from "next/image";
import Container from "@/components/layout/Container";

/**
 * Component: FounderStory
 * Purpose: "Founder's story" section on /about — duotone portrait on the
 * left, eyebrow + name + bio on the right. The decorative circular
 * sticker continues straddling the boundary with the section above
 * (Values), same technique used there.
 * Props: none.
 */
export default function FounderStory() {
  return (
    <section className="relative overflow-visible bg-white py-20 sm:py-24">
      {/* Decorative sticker — straddles the boundary with the Values section
          above. Hidden on mobile (`hidden sm:block`) since there's no room
          for it to float without overlapping the text/portrait below, and
          it reads as pure decoration rather than content. */}
      <div className="pointer-events-none absolute left-12 top-0 hidden h-32 w-32 -translate-y-1/2 sm:block">
        <Image
          src="/images/aboutsticker.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: duotone portrait */}
          <div className="relative h-[340px] w-full overflow-hidden rounded-xl sm:h-[420px]">
            <Image
              src="/images/aboutpgimg.png"
              alt="Eunji Park, founder of Aetherfield"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
          </div>

          {/* Right: eyebrow + name + bio */}
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-ink-soft">
              Founder&apos;s story
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Eunji Park
            </h2>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
              Eunji founded Aetherfield with one goal: to help companies take
              climate action without waiting for a perfect plan. With a
              background in environmental systems and software design,
              she&apos;s spent the past decade building tools that turn big
              goals into real-world outcomes. She still insists on sitting in
              on every investor meeting.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}