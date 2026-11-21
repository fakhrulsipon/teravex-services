import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ImageBanner from "@/components/ui/ImageBanner";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery — Our Workforce in Action Across Qatar",
  description:
    "Photos of Teravex manpower services in Qatar — hotel & hospitality, restaurant, construction, oil & gas, security, cleaning, landscaping and overseas recruitment.",
  alternates: { canonical: "/gallery/" },
};

export default function GalleryPage() {
  return (
    <>
      <ImageBanner
        src="/banners/gallery"
        alt="Hotel staff preparing a luxury guest room"
        title="Our Gallery"
        focus="50% 30%"
      />

      <section id="gallery" className="scroll-mt-20 py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Gallery"
            title={
              <>
                Our Work in <span className="text-gold-600">Pictures</span>
              </>
            }
            className="mb-10"
          />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
