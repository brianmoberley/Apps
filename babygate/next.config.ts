import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/apps/babygate",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;