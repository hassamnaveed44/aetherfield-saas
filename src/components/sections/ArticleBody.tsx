import Container from "@/components/layout/Container";

/**
 * Component: ArticleBody
 * Purpose: Body copy for a single article page — byline row, intro
 * paragraph, and section-heading + paragraph blocks, matching the
 * reference layout. Renders below the hero image on /article/[slug].
 * Props: none — text is placeholder for now, swap in real copy
 * (or pass it in as props / read from article data) once it's ready.
 */
export default function ArticleBody() {
  return (
    <section className="bg-white pb-20 pt-10 sm:pt-14">
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Byline row */}
          <div className="flex items-center justify-between border-b border-black/10 pb-6 text-xs font-medium uppercase tracking-wide text-ink-soft">
            <span>Aetherfield Team</span>
            <span>March 7, 2025</span>
          </div>

          {/* Intro paragraph */}
          <p className="mt-8 text-base leading-relaxed text-ink">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="mt-6 text-base leading-relaxed text-ink">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>

          {/* Section 1 */}
          <h2 className="mt-10 text-lg font-semibold text-ink">
            Section Heading
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo.
          </p>

          {/* Section 2 */}
          <h2 className="mt-10 text-lg font-semibold text-ink">
            Section Heading
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt neque porro quisquam est.
          </p>
        </div>
      </Container>
    </section>
  );
}