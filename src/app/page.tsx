import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/Hero";
import ClaritySection from "@/components/sections/ClaritySection";
import CaseStudySection from "@/components/sections/CaseStudy";
import JournalSection from "@/components/sections/Journal";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
    <Navbar background="adaptive" />
      <HeroSection />
      <FeatureSection />
      <ClaritySection />
      <CaseStudySection />
      <JournalSection />
      <TestimonialSection />
    </>
  );
}
