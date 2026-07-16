import Container from "@/components/layout/Container";

/**
 * Component: Subscribe
 * Purpose: "Subscribe to Aetherfield Journal" call-to-action section,
 * shown below the latest-articles grid on /journal.
 * Props: none.
 */
export default function Subscribe() {
  return (
    <section aria-labelledby="subscribe-heading" className="bg-white py-14 sm:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2
            id="subscribe-heading"
            className="text-lg font-semibold tracking-tight text-ink sm:text-xl"
          >
            Subscribe to Aetherfield Journal
          </h2>

          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 active:scale-95"
          >
            Sign up to newsletter
          </button>
        </div>
      </Container>
    </section>
  );
}