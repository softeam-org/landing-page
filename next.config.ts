import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
