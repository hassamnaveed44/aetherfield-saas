import Image from "next/image";
import Link from "next/link"; // CHANGED: added Link so "View role"/"Apply now" can navigate
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
 * Component: CareersHero
 * Purpose: /careers hero + job list combined into a single section that
 * shares one continuous background image — heading up top, job cards
 * flowing directly below it with no separate white block/gap in between,
 * matching the reference layout.
 * Props: none — reads from the JOBS constant above.
 */
export default function CareersHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Shared background — sized by the content below (heading + cards),
          not a fixed height, so it stretches to fit whatever's in here. */}
      <Image
        src="/images/bg-img.jpg"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
      />

      <Container>
        <h1 className="pt-16 text-center text-3xl font-bold tracking-tight text-ink sm:pt-20 sm:text-4xl">
          Careers at Aetherfield
        </h1>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 pb-16 sm:mt-10 sm:pb-20">
          {JOBS.map((job) => (
            <div
              key={job.id}
              className={`rounded-xl border bg-white p-5 sm:p-6 ${
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

                {/* CHANGED: swapped <button> for a Link styled identically,
                    so it keeps the exact same look but now navigates to
                    /carrers/[id] — matches the folder name in the project
                    (currently "carrers", not "careers"). */}
                <Link
                  href={`/carrers/${job.id}`}
                  className="w-25 shrink-0 rounded-md bg-ink px-4 py-2 text-center text-sm font-semibold text-white transition-opacity hover:opacity-85 active:scale-95 sm:w-auto"
                >
                  {job.isOpenApplication ? "Apply now" : "View role"}
                </Link>
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