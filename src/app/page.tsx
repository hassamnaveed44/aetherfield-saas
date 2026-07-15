import Navbar from "@/components/layout/Navbar";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSection from "@/components/sections/Hero";
import ClaritySection from "@/components/sections/ClaritySection"
import CaseStudySection from "@/components/sections/CaseStudy";
import JournalSection from "@/components/sections/Journal";
import TestimonialSection from "@/components/sections/TestimonialSection";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection  />
      <FeatureSection />
      <ClaritySection />
      <CaseStudySection />
      <JournalSection />
      <TestimonialSection />
      <Footer />
    
    </>
  );
}