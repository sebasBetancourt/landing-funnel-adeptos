import TopBar from "@/presentation/components/organisms/TopBar";
import Navbar from "@/presentation/components/organisms/Navbar";
import HeroSection from "@/presentation/components/organisms/HeroSection";
import TrustBar from "@/presentation/components/organisms/TrustBar";
import VideoSection from "@/presentation/components/organisms/VideoSection";
import AboutSection from "@/presentation/components/organisms/AboutSection";
import TestimonialsSection from "@/presentation/components/organisms/TestimonialsSection";
import NewsletterSection from "@/presentation/components/organisms/NewsletterSection";
import ReelSection from "@/presentation/components/organisms/ReelSection";
import Footer from "@/presentation/components/organisms/Footer";
import ScrollToTop from "@/presentation/components/atoms/ScrollToTop";
import DiscountBadge from "@/presentation/components/atoms/DiscountBadge";
import ProblemLeakSection from "@/presentation/components/organisms/ProblemLeakSection";
import WorkflowStepsSection from "@/presentation/components/organisms/WorkflowStepsSection";
import StatsSection from "@/presentation/components/organisms/StatsSection";
import InvestmentPricing from "@/presentation/components/organisms/InvestmentPricing";
import BonusSection from "@/presentation/components/organisms/BonusSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1C2120] selection:bg-primary selection:text-black font-sans text-white overflow-x-hidden">
      
      {/* Dynamic Global Overlays */}
      <DiscountBadge />
      <ScrollToTop />
      
      {/* 1. Authority Pillar: Hero + Header */}
      <HeroSection />

      {/* 2. Immediate Social Proof: Trust Bar (Starbucks, Amazon, etc.) */}
      <TrustBar />

      {/* 3. Founder Authority: Ryan Hamill About Section */}
      <AboutSection />

      {/* 4. Logical Urgency: Problem & Revenue Leak Table */}
      <ProblemLeakSection />

      {/* 4. Strategic Proof: Video Content (Adeptos in Action) */}
      <VideoSection />

      {/* 5. The Solution Mechanism: How it works (Workflow Steps) */}
      <WorkflowStepsSection />

      {/* 6. Visualization: Interactive Showcase (Reel) */}
      <ReelSection />

      {/* 7. Competition & FOMO: IA Adoption Stats */}
      <StatsSection />

      {/* 8. Direct Social Proof: Client Testimonials */}
      <TestimonialsSection />

      {/* 10. Core Offer: Investment Tiers & Pricing */}
      <InvestmentPricing />

      {/* 11. Strategic Over-delivery: Business Acceleration Bonus Kit */}
      <BonusSection />

      {/* 12. Final Catch-all: Newsletter & Lead Capture */}
      <NewsletterSection />

      {/* 13. Brand Anchor & Navigation: Footer */}
      <Footer />

    </div>
  );
}
