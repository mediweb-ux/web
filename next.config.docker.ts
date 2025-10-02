import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable standalone output for Docker builds to avoid Windows symlink issues
  // output: 'standalone',
  
  // Disable ESLint during build for Docker deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;