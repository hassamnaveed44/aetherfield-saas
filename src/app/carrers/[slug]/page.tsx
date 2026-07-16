import { jobs } from "@/data/jobs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return notFound();

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden px-6 py-16">
        <Image
          src="/images/bg-img.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover"
        />

        <div className="relative mx-auto max-w-2xl">
          {/* Back link */}
          <Link
            href="/carrers"
            className="text-sm text-muted-foreground hover:text-ink transition-colors"
          >
            ← Back to Careers
          </Link>

          {/* Card */}
          <div className="relative mt-6 rounded-2xl border border-black/10 bg-white p-8 shadow-sm sm:p-10">
            {/* Sticker: Positioned bottom-right with responsive hiding on mobile */}
            <div className="pointer-events-none absolute -bottom-16 right-1 h-40 w-28 rotate-6 sm:-bottom-20 sm:right-10 sm:h-48 sm:w-48 z-10 hidden md:block">
              <Image
                src="/images/aboutsticker.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold text-ink sm:text-3xl">
                  {job.title}
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  {job.type} · {job.meta}
                </p>
              </div>
              <Badge variant="secondary" className="shrink-0">
                {job.type}
              </Badge>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              {job.description}
            </p>

            <hr className="my-8 border-black/10" />

            <div className="space-y-8 text-sm leading-relaxed text-ink-soft">
              <section>
                <h2 className="mb-2 text-base font-semibold text-ink">
                  About the role
                </h2>
                <p>{job.fullDescription}</p>
              </section>

              {job.requirements && job.requirements.length > 0 && (
                <section>
                  <h2 className="mb-2 text-base font-semibold text-ink">
                    Requirements
                  </h2>
                  <ul className="list-disc space-y-1 pl-5">
                    {job.requirements.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </section>
              )}

              {job.benefits && job.benefits.length > 0 && (
                <section>
                  <h2 className="mb-2 text-base font-semibold text-ink">
                    Company benefits
                  </h2>
                  <ul className="list-disc space-y-1 pl-5">
                    {job.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>

          {/* CTA footer */}
          <div className="relative mt-16 text-center">
            <h2 className="text-xl font-semibold text-ink sm:text-2xl">
              Ready to help build the future of climate intelligence?
            </h2>
            <Button className="mt-6">Apply now</Button>
          </div>
        </div>
      </section>
    </>
  );
}