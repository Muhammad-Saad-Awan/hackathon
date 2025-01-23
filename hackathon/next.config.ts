import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add the hostname here
  },
};

export default nextConfig;
