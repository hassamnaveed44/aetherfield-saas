import Container from "@/components/layout/Container";

interface TeamMember {
  name: string;
  title: string;
  email: string;
}

const TEAM: TeamMember[] = [
  { name: "Eunji Park", title: "Founder", email: "e.park@aetherfield.com" },
  { name: "Al Griffith", title: "Senior Systems Architect", email: "a.griffith@aetherfield.com" },
  { name: "Cassandra Query", title: "Head of Data Platforms", email: "c.query@aetherfield.com" },
  { name: "Sue Logic", title: "Principal Software Engineer", email: "s.logic@aetherfield.com" },
  { name: "Dash Bordman", title: "Product Manager", email: "d.bordman@aetherfield.com" },
  { name: "Greta Watt", title: "Director of Climate Strategy", email: "g.watt@aetherfield.com" },
  { name: "Gail Force", title: "Environmental Risk Analyst", email: "g.force@aetherfield.com" },
  { name: "Polly Nation", title: "UX Designer", email: "p.nation@aetherfield.com" },
  { name: "Will O'Wisp", title: "Clean Energy Solutions Manager", email: "w.owisp@aetherfield.com" },
  { name: "Lana Terra", title: "Earth Systems Research", email: "l.terra@aetherfield.com" },
  { name: "Ella Vation", title: "Earth Systems Researcher", email: "e.vation@aetherfield.com" },
  { name: "Phil Scope", title: "Lifecycle Assessment Lead", email: "p.scope@aetherfield.com" },
];

/**
 * Component: TeamSection
 * Purpose: "Meet the team" section on /about — a Name / Title / Contact
 * table listing every team member, followed by a centered "We're hiring"
 * callout with a CTA button.
 * Props: none — reads from the TEAM constant above.
 */
export default function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-white py-20 sm:py-24">
      <Container>
        <h2
          id="team-heading"
          className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
        >
          Meet the team
        </h2>

        {/* overflow-x-auto lets the table scroll horizontally on narrow
            screens instead of squeezing/wrapping the three columns */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-xs font-medium uppercase tracking-wide text-ink-soft">
                <th className="py-3 pr-4 font-medium">Name</th>
                <th className="py-3 pr-4 font-medium">Title</th>
                <th className="py-3 text-right font-medium">Contact</th>
              </tr>
            </thead>
            <tbody>
              {TEAM.map((member) => (
                <tr key={member.email} className="border-b border-black/5">
                  <td className="py-3 pr-4 font-medium text-ink">{member.name}</td>
                  <td className="py-3 pr-4 text-ink-soft">{member.title}</td>
                  <td className="py-3 text-right">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-ink-soft hover:text-ink hover:underline"
                    >
                      {member.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hiring callout */}
        <div className="mt-16 flex flex-col items-center text-center sm:mt-20">
          <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            We&apos;re hiring! Want to join the team?
          </h3>
          <button
            type="button"
            className="mt-6 w-full rounded-md bg-ink px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-85 active:scale-95 sm:w-auto"
          >
            View open roles
          </button>
        </div>
      </Container>
    </section>
  );
}