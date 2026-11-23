import type { Metadata } from "next";
import AboutIntro from "@/components/home/AboutIntro";
import Hero from "@/components/home/Hero";
import QuickEnquiry from "@/components/home/QuickEnquiry";
import RolesMarquee from "@/components/home/RolesMarquee";
import ServicesExplorer from "@/components/home/ServicesExplorer";
// import StatsBar from "@/components/home/StatsBar"; // hidden for now — uncomment together with <StatsBar /> below to bring it back
import TrustedCompanies from "@/components/home/TrustedCompanies";
import Clients from "@/components/sections/Clients";
import Nationalities from "@/components/sections/Nationalities";
import ProcessSteps from "@/components/sections/ProcessSteps";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/*
        <StatsBar /> — stats section (5,000+ workforce, 8+ nationalities…) hidden for now.
        To bring it back: uncomment it and its import, then restore the extra space it overlaps into:
        Hero section "pb-20 … lg:pb-28" → "pb-36 … lg:pb-44", and TrustedCompanies "mt-16 sm:mt-20 lg:mt-24".
      */}
      <section id="services" className="relative overflow-hidden bg-surface py-24 lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-pattern-star-dark mask-fade-b" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Our Core <span className="text-gold-600">Services</span>
              </>
            }
          />
          <ServicesExplorer />
        </div>
      </section>

      <TrustedCompanies />
      <AboutIntro />

      <RolesMarquee />
      <ProcessSteps />
      <Nationalities />
      <Clients />
      <QuickEnquiry />
    </>
  );
}
