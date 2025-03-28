import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import { remarkCodeHike } from "@code-hike/mdx";
import { env } from "process";

const NODE_ENV = process.env.NODE_ENV;

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["ts", "tsx", "mdx", "md"],
  experimental: {
    mdxRs: env.NODE_ENV === "development" ? true : false,
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins:
      NODE_ENV === "production" ? [remarkGfm, [remarkCodeHike, { theme: "css-variables" }]] : [],
  },
});

export default withMDX(nextConfig);
