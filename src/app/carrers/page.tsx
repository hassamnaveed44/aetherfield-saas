import Navbar from "@/components/layout/Navbar";
import CareersHero from "@/components/sections/CareersHero";

/**
 * Route: /careers
 * Purpose: Careers page — background-image hero (heading + job cards
 * combined into one section) using the same Navbar component/props as
 * every other page on the site.
 */
export default function CareersPage() {
  return (
    <>
      <Navbar background="blue" />
      <CareersHero />
    </>
  );
}