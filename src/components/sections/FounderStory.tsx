import Image from "next/image";
import Container from "@/components/layout/Container";

/**
 * Component: FounderStory
 * Purpose: "Founder's story" section on /about — duotone portrait on the
 * left (with a decorative sticker pinned to its top-left corner) and
 * eyebrow + name + bio on the right.
 * Props: none.
 */
export default function FounderStory() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: duotone portrait, with the decorative sticker pinned to
              its top-left corner (half on the white space above, half over
              the photo) — sized and placed relative to the image itself,
              not the whole section, so it stays tight to the corner at
              every screen size instead of floating disconnected above it. */}
          <div className="relative w-full max-w-[612px]">
            <div className="pointer-events-none absolute -top-8 left-4 z-10 hidden sm:-top-10 sm:left-6 sm:block sm:h-[147px] sm:w-[298px]">
              <Image
                src="/images/aboutsticker.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative aspect-[612/700] w-full overflow-hidden">
              <Image
                src="/images/aboutpgimg.png"
                alt="Eunji Park, founder of Aetherfield"
                fill
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
            </div>
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