import { MetadataRoute } from "next";
import { NavigationLinks } from "@/data/navigation";
import { siteConfig } from "@/config/site";

const URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: `${URL}/`,
      lastModified: "2025-10-31T13:22:44+05:30",
    },
    {
      url: `${URL}/community`,
      lastModified: "2025-03-29T19:57:56+05:30",
    },
    {
      url: `${URL}/showcase`,
      lastModified: "2025-03-29T19:57:56+05:30",
    },
  ];

  const componentRoutes = NavigationLinks.flatMap((group) =>
    group.children.map((item) => ({
      url: `${URL}${item.href}`,
      lastModified: item.lastModified || new Date().toISOString(),
    }))
  );

  return [...staticRoutes, ...componentRoutes];
}
