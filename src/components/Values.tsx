import { Circle, Settings, TrendingUp } from "lucide-react";
import Container from "@/components/layout/Container";

const VALUES = [
  {
    id: "clarity",
    icon: Circle,
    title: "Clarity drives action",
    description:
      "We believe better decisions start with better data — honest, visible, and trusted.",
  },
  {
    id: "systems",
    icon: Settings,
    title: "Sustainability is a systems problem",
    description:
      "We build tools that help teams connect the dots between operations, impact, and accountability.",
  },
  {
    id: "progress",
    icon: TrendingUp,
    title: "Progress over perfection",
    description:
      "We support real-world momentum — helping organizations move from ambitions to measurable change.",
  },
];

/**
 * Component: Values
 * Purpose: "Our values" section on /about — centered heading and a
 * 3-column grid of value cards. The decorative circular sticker lives
 * in FounderStory.tsx instead, straddling the boundary below this
 * section.
 * Props: none.
 */
export default function Values() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <Container>
        <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Our values
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-3">
          {VALUES.map(({ id, icon: Icon, title, description }) => (
            <div
              key={id}
              className="rounded-xl border border-black/10 bg-sand/40 p-6"
            >
              <Icon className="h-6 w-6 text-ink" strokeWidth={1.75} />
              <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}