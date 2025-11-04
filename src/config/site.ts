// import { generateId } from "@/mdx-components";
import type { Metadata } from "next";

export const siteConfig = {
  name: "Aether/ui",
  url: "https://aetherui.in",
  bgImage:
    "https://res.cloudinary.com/di0av3xly/image/upload/v1744973705/Aether-ui/au-meta-banner_vidmtc.png",
  description:
    "Aether/ui is a collection of beautiful, animated components for your next product, built with Motion and Tailwind CSS.",
  links: {
    twitter: "https://dub.sh/harshit-x?utm_source=aether-ui",
    github: "https://git.new/aether-ui?utm_source=aether-ui",
  },
};

const formatName = (name: string) => {
  return name
    .toLowerCase()
    .replace(/_/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export interface MetaConfigProps {
  title: string;
  description: string;
  isRoot?: boolean;
}

const fallbackURL = "https://aetherui.in";

/**
 * @param title: Metadata["title"];
 * @param description: Metadata["description"];
 */
export const metaConfig = ({
  title = siteConfig.name,
  description = siteConfig.description,
  isRoot = false,
}: MetaConfigProps): Metadata => ({
  title,
  description,
  category: "Web Development",
  keywords: ["Next.js", "React", "Tailwind CSS", "Motion", "JavaScript", "TypeScript"],
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: "Aether/ui's Team", url: siteConfig.url }],
  publisher: "Aether/ui's Team",
  alternates: { canonical: fallbackURL },
  twitter: {
    creator: "@pantharhsit007",
    title,
    description,
    card: "summary_large_image",
    images: [
      {
        url: isRoot
          ? siteConfig.bgImage
          : `${siteConfig.url}/meta?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        width: 1200,
        height: 630,
        alt: title + " Banner",
      },
    ],
  },
  openGraph: {
    type: "article",
    title,
    description,
    siteName: siteConfig.name,
    url: isRoot ? siteConfig.url : `${siteConfig.url}/docs/${formatName(title)}`,
    locale: "en_US",
    images: [
      {
        url: `/meta?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
        width: 1200,
        height: 630,
        alt: title + " Banner",
      },
    ],
  },
});

export const rootSiteConfig = {
  title: {
    default: siteConfig.name,
    template: "%s | Aether/ui",
  },
  description: siteConfig.description,
  url: siteConfig.url,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  category: "Web Development",
  keywords: ["Next.js", "React", "Tailwind CSS", "Motion", "JavaScript", "TypeScript"],
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: "Aether/ui's Team", url: siteConfig.url }],
  publisher: "Aether/ui's Team",
  alternates: { canonical: fallbackURL },
  twitter: {
    creator: "@pantharhsit007",
    title: siteConfig.name,
    description: siteConfig.description,
    card: "summary_large_image",
    images: [
      {
        url: siteConfig.bgImage,
        width: 1200,
        height: 630,
        alt: "Aether/ui Banner",
      },
    ],
  },
  openGraph: {
    type: "website",
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
    images: [
      {
        url: siteConfig.bgImage,
        width: 1200,
        height: 630,
        alt: "Aether/ui Banner",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
