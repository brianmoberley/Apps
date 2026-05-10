import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Apps",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;