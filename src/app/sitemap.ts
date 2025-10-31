import { MetadataRoute } from "next";
import { NavigationLinks } from "@/data/navigation";

const URL = "https://aetherui.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/community`,
      lastModified: new Date(),
    },
    {
      url: `${URL}/showcase`,
      lastModified: new Date(),
    },
  ];

  const componentRoutes = NavigationLinks.flatMap((group) =>
    group.children.map((item) => ({
      url: `${URL}${item.href}`,
      lastModified: new Date(),
    }))
  );

  return [...staticRoutes, ...componentRoutes];
}
