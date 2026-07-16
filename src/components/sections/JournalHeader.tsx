import Image from "next/image";
import Container from "@/components/layout/Container";

/**
 * Component: JournalHeader
 * Purpose: Page-header for /journal — full-width diamond hero image,
 * scaled responsively via a fixed aspect ratio + breakpoint-based
 * max-width, rather than a fixed pixel size.
 *
 * A real (visually hidden) <h1> is kept for accessibility/SEO since the
 * heading text lives inside the image itself.
 *
 * Props: none — static page header content.
 */
export default function JournalHeader() {
  return (
    <section
      aria-labelledby="journal-heading"
      className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      <Container className="flex flex-col items-center">
        <h1 id="journal-heading" className="sr-only">
          Aetherfield Journal
        </h1>

        {/* ============================================================
            HERO IMAGE — put your exported file at:
            public/images/journalhero.png

            Sizing: aspect-ratio keeps the image's proportions fixed while
            max-width scales the whole box up per breakpoint — mobile gets
            a smaller, narrower box; desktop gets the largest.
           ============================================================ */}
        <div className="relative aspect-[5/2] w-full max-w-sm sm:aspect-[12/5] sm:max-w-2xl lg:aspect-[5/2] lg:max-w-4xl">
          <Image
            src="/images/journalhero.png"
            alt="Aetherfield Journal"
            fill
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 900px"
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
}