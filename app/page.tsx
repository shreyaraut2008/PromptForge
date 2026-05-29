import { GradientBackground } from "@/components/shared/GradientBackground";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Features } from "@/components/landing/Features";
import { Footer, Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#030712]">
      <GradientBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <DashboardPreview />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
