import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: true,  // Adds a trailing slash to the URLs (optional, but commonly used in static exports)
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
  }
};

export default nextConfig;
