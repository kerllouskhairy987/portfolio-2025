import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  /* config options here */
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
