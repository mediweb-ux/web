import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable standalone output for Docker builds to avoid Windows symlink issues
  // output: 'standalone',
};

export default nextConfig;