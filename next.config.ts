import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporarily disable standalone output due to Windows symlink permissions
  // output: 'standalone',
  
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
  
  // Optimize images for Cloudflare
  images: {
    unoptimized: true
  },
};

export default nextConfig;
