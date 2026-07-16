import Navbar from "@/components/layout/Navbar";
import AboutHero from "@/components/sections/AboutHero";
import FounderStory from "@/components/sections/FounderStory";
import TeamSection from "@/components/sections/TeamSection";
import Values from "@/components/Values";

/**
 * Route: /about
 * Purpose: About page — split hero (image + floating card / headline + CTA)
 * matching the reference screenshot. Add further sections below AboutHero
 * as the page grows.
 */
export default function AboutPage() {
  return (
    <>
      <Navbar background="white" />
      <AboutHero />
      <Values />
      <FounderStory />
      <TeamSection />
    </>
  );
}