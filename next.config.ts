import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import { remarkCodeHike } from "@code-hike/mdx";
import { env } from "process";

const NODE_ENV = process.env.NODE_ENV;

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],
  experimental: {
    mdxRs: true, // avoid in prod
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins: [remarkGfm, remarkCodeHike],
    // remarkPlugins: NODE_ENV === "development" ? [remarkGfm, remarkCodeHike] : [],
  },
});

export default withMDX(nextConfig);
