import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker optimization
  output: 'standalone',
  
  // Optional: Add other optimizations
  experimental: {
    // Enable server components logging in development
    logging: {
      level: 'verbose',
    },
  },
};

export default nextConfig;
