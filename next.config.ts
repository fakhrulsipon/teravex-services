import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure frontend: every page is pre-rendered to static HTML at build time
  // (`npm run build` -> `out/`), so it can be hosted on any static host / CDN.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
