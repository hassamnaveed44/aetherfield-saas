import Container from "@/components/layout/Container";

interface JobListing {
  id: string;
  title: string;
  meta: string;
  description: string;
  isOpenApplication?: boolean;
}

const JOBS: JobListing[] = [
  {
    id: "ux-designer",
    title: "UX Designer",
    meta: "Remote · San Francisco, CA",
    description:
      "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    meta: "Full time · Remote, NY",
    description:
      "Help build the intelligence that powers climate action. You'll turn complex sustainability data into actionable insights for enterprise teams.",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    meta: "Full time · Remote, NY",
    description:
      "Shape the tools that drive climate intelligence. You'll lead cross-functional teams to build thoughtful, scalable solutions for sustainability-forward organizations.",
  },
  {
    id: "open-application",
    title: "Open application",
    meta: "Full time · Remote, NY",
    description: "Don't see your role available? Apply for an open application!",
    isOpenApplication: true,
  },
];

/**
 * Component: JobListings
 * Purpose: List of open roles on /careers — each a card with title, meta
 * line, description, and a CTA button. The last card ("Open application")
 * uses a dashed border to visually set it apart from real openings.
 * Props: none — reads from the JOBS constant above.
 */
export default function JobListings() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-4">
          {JOBS.map((job) => (
            <div
              key={job.id}
              className={`rounded-xl border p-5 sm:p-6 ${
                job.isOpenApplication
                  ? "border-dashed border-black/20"
                  : "border-black/10"
              }`}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-ink sm:text-lg">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-ink-soft">
                    {job.meta}
                  </p>
                </div>

                <button
                  type="button"
                  className="w-full shrink-0 rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-85 active:scale-95 sm:w-auto"
                >
                  {job.isOpenApplication ? "Apply now" : "View role"}
                </button>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}