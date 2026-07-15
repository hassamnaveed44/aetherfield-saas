import Navbar from "@/components/layout/Navbar";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/Hero";
import ClaritySection from "@/components/sections/ClaritySection"
import CaseStudySection from "@/components/sections/CaseStudy";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection  />
      <FeatureSection />
      <ClaritySection />
      <CaseStudySection />
    
    </>
  );
}