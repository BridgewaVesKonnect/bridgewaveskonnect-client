import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   trailingSlash: false,
   devIndicators: false,
   poweredByHeader: false,
   publicRuntimeConfig: {},
   env: {
      ORIGIN: process.env.ORIGIN,
   },
};

export default nextConfig;
