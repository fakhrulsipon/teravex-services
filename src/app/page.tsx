import type { Metadata } from "next";
import AboutIntro from "@/components/home/AboutIntro";
import Hero from "@/components/home/Hero";
import QuickEnquiry from "@/components/home/QuickEnquiry";
import RolesMarquee from "@/components/home/RolesMarquee";
import ServicesExplorer from "@/components/home/ServicesExplorer";
import StatsBar from "@/components/home/StatsBar";
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
      <StatsBar />
      <TrustedCompanies />
      <AboutIntro />

      <section id="services" className="relative overflow-hidden bg-surface py-24 lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-pattern-star-dark mask-fade-b" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Our Core Services &amp; <span className="text-gold-600">Job Categories</span>
              </>
            }
            text="Eight specialised service lines, one reliable partner. Tap any service to see the roles we supply."
          />
          <ServicesExplorer />
        </div>
      </section>

      <RolesMarquee />
      <ProcessSteps />
      <Nationalities />
      <Clients />
      <QuickEnquiry />
    </>
  );
}
