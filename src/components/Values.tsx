import { Circle, TrendingUp, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Container from "@/components/layout/Container";

interface ValueBase {
  id: string;
  title: string;
  description: string;
}

/** Either a lucide `icon` component OR an `iconSrc` image path — not both. */
type ValueItem = ValueBase & ({ icon: LucideIcon } | { iconSrc: string });

/**
 * The "systems" card uses the real exported asset (/images/icon2.png)
 * instead of a lucide icon; the other two stay as lucide components.
 */
const VALUES: ValueItem[] = [
  {
    id: "clarity",
    icon: Circle,
    title: "Clarity drives action",
    description:
      "We believe better decisions start with better data — honest, visible, and trusted.",
  },
  {
    id: "systems",
    iconSrc: "/images/icon2.png",
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
 * 3-column grid of value cards. Card size matches the Figma spec:
 * 402.67 Fill (equal-width grid columns) × 246 Hug (fixed min-height,
 * content can still push taller if needed). The decorative circular
 * sticker lives in FounderStory.tsx instead, straddling the boundary
 * below this section.
 * Props: none.
 */
export default function Values() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <Container>
        <h2 className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Our values
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-3">
          {VALUES.map(({ id, title, description, ...value }) => (
            <div
              key={id}
              className="flex flex-col rounded-lg border border-black/5 bg-slate-50 p-5 sm:min-h-[246px]"
            >
              {"icon" in value ? (
                <value.icon className="h-5 w-5 text-ink" strokeWidth={1.75} />
              ) : (
                <Image
                  src={value.iconSrc}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              )}
              <h3 className="mt-3 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}