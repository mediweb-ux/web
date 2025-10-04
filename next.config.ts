import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable standalone output due to Windows symlink permissions
  // Docker will handle deployment differently
  // output: 'standalone',
  
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
