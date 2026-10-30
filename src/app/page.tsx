import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import LoanCalculator from "@/components/calculator/LoanCalculator";
import ServicesSection from "@/components/home/ServicesSection";
import BorrowerRightsSection from "@/components/home/BorrowerRightsSection";
import SettlementGuideSection from "@/components/home/SettlementGuideSection";
import JourneySection from "@/components/home/JourneySection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import ConsultationCta from "@/components/home/ConsultationCta";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSlider />

      {/* 2. About Us */}
      <AboutSection />

      {/* 3. Expert Loan Settlement Solutions Calculator */}
      <LoanCalculator />

      {/* 4. Debt Resolution Services */}
      <ServicesSection />

      {/* 5. RBI Fair Practices & Borrower Rights */}
      <BorrowerRightsSection />

      {/* 6. Comprehensive Settlement Guide */}
      <SettlementGuideSection />

      {/* 7. Loan Settlement Journey */}
      <JourneySection />

      {/* 7. Existing Business Statistics */}
      <StatsSection />

      {/* 8. Client Testimonials */}
      <TestimonialsSection />

      {/* 9. Frequently Asked Questions */}
      <FaqSection maxItems={15} />

      {/* 10. Contact or Consultation CTA */}
      <ConsultationCta />
    </>
  );
}
