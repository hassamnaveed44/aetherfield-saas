// data/jobs.tsx
// Shared job data used by:
//   - src/components/sections/CareersHero.tsx (job cards + "View role"/"Apply now" links)
//   - src/app/carrers/[slug]/page.tsx (dynamic job detail page, looked up via slug)

export type Job = {
  slug: string;
  title: string;
  type: string;
  meta: string;
  description: string;
  fullDescription: string;
  requirements?: string[]; // ADDED: optional, powers "Requirements" section on detail page
  benefits?: string[];     // ADDED: optional, powers "Company benefits" section on detail page
};

export const jobs: Job[] = [
  {
    // NOTE: this slug must exactly match the `id` values used in
    // CareersHero.tsx's JOBS array (ux-designer, data-scientist,
    // product-manager, open-application) — that's what makes the
    // "View role" link land on the correct job here.
    slug: "ux-designer",
    title: "UX Designer",
    type: "Full-time",
    meta: "Remote · Design Team",
    description: "Design intuitive, user-centered experiences across our product.",
    fullDescription:
      "We're looking for a UX Designer to join our team and help shape the end-to-end experience of our product. You'll work closely with product and engineering to research user needs, wireframe flows, and craft polished, accessible interfaces. Experience with Figma and a strong portfolio of shipped work is a plus.",
    requirements: [
      "3+ years of experience in UX/product design",
      "Strong portfolio demonstrating end-to-end design process",
      "Proficiency in Figma and modern design tools",
      "Experience working closely with engineering teams",
      "Excellent communication and collaboration skills",
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible, hybrid work environment",
      "Generous PTO and paid volunteer days",
      "Annual wellness stipend",
      "Team offsites and climate-focused travel",
    ],
  },
  {
    slug: "data-scientist",
    title: "Data Scientist",
    type: "Full-time",
    meta: "Remote · Data Team",
    description: "Turn raw data into insights that drive product decisions.",
    fullDescription:
      "As a Data Scientist, you'll build models and pipelines that help the team understand user behavior and product performance. You'll work with large datasets, design experiments, and communicate findings to both technical and non-technical stakeholders. Strong Python/SQL skills expected.",
    requirements: [
      "2+ years of experience in data science or applied analytics (Python, SQL, etc.)",
      "Experience working with climate, sustainability, or supply chain datasets a plus",
      "Strong foundation in statistics and data modeling",
      "Ability to communicate complex insights clearly to both technical and non-technical teams",
      "Curiosity, clarity, and care in how you approach messy data",
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible, hybrid work environment",
      "Generous PTO and paid volunteer days",
      "Annual wellness stipend",
      "Team offsites and climate-focused travel",
    ],
  },
  {
    slug: "product-manager",
    title: "Product Manager",
    type: "Full-time",
    meta: "Remote · Product Team",
    description: "Own the roadmap and drive features from idea to launch.",
    fullDescription:
      "We're hiring a Product Manager to define and prioritize our roadmap, work cross-functionally with design and engineering, and ensure we're building the right things for our users. You'll gather feedback, write specs, and track outcomes post-launch.",
    requirements: [
      "3+ years of experience in product management",
      "Track record of shipping features from idea to launch",
      "Comfortable writing specs and prioritizing a roadmap",
      "Strong cross-functional collaboration with design and engineering",
      "Passion for solving real-world problems with purpose and precision",
    ],
    benefits: [
      "Competitive salary and equity options",
      "Flexible, hybrid work environment",
      "Generous PTO and paid volunteer days",
      "Annual wellness stipend",
      "Team offsites and climate-focused travel",
    ],
  },
  {
    slug: "open-application",
    title: "Open Application",
    type: "Any",
    meta: "Remote · All Teams",
    description: "Don't see your role listed? Tell us what you're great at.",
    fullDescription:
      "Don't see a role that fits? We're always interested in meeting talented people. Send us your resume and a short note on what you'd love to work on, and we'll reach out if there's a match.",
    // No requirements/benefits — sections simply won't render for this entry, that's expected.
  },
];