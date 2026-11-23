import type { Metadata } from "next";
import ProductsShowcase from "@/components/sections/ProductsShowcase";
import ImageBanner from "@/components/ui/ImageBanner";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Live web products built by Teravex — Sitebari, CodeClash, RideX and Mailbari. Open any project to see the real site.",
  alternates: { canonical: "/products/" },
};

export default function ProductsPage() {
  return (
    <>
      <ImageBanner
        src="/banners/products"
        alt="Software developer coding on a dual-monitor setup in a modern office"
        title="Our Products"
        focus="50% 45%"
      />
      <ProductsShowcase className="bg-white" moreLink />
    </>
  );
}
