import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary">
      <main className="text-secondary">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}
