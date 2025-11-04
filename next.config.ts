import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Ensure outputFileTracingRoot is the project root.
  // The previous value used two levels up (../../) which can escape the repo
  // root in some CI environments (for example on Vercel) and lead to
  // duplicated paths like /vercel/path0/vercel/path0/.next/... during build.
  // Using the current directory keeps tracing inside the project.
  outputFileTracingRoot: path.resolve(__dirname),
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;

