// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "159.65.15.249",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
    unoptimized: process.env.NODE_ENV === "development",
  },
  typescript: {
    // Danger: allows production builds to succeed even with TS errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
