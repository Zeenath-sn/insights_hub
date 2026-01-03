import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/",
        permanent: true, // Use permanent: true for 308 redirect (best for SEO)
      },
    ];
  },
};

export default nextConfig;
