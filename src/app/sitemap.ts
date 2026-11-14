import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    { path: "/request-manpower/", priority: 0.9 },
    { path: "/about/", priority: 0.7 },
    { path: "/contact/", priority: 0.7 },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    changeFrequency: "monthly",
    priority: p.priority,
  }));
}
