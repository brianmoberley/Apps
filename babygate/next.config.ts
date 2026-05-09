import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PeacefulBabyGate",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
