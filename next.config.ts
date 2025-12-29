import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_USERNAME: process.env.GITHUB_USERNAME,
  },
};

export default nextConfig;
