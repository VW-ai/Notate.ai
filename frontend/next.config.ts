import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Notate.ai' : '',
  assetPrefix: isProd ? '/Notate.ai' : '',
};

export default nextConfig;
