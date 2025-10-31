export type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
  lastModified?: string;
};

type NavigationGroup = {
  name: string;
  children: NavigationItem[];
};

export const NavigationLinks: NavigationGroup[] = [
  {
    name: "Getting Started",
    children: [
      {
        name: "Introduction",
        href: "/docs",
        lastModified: "2025-04-19T02:27:15+05:30",
      },
      {
        name: "Installation",
        href: "/docs/installation",
        lastModified: "2025-06-21T14:25:42+05:30",
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "Button",
        href: "/docs/button",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Hover Card",
        href: "/docs/hover-card",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Morphing Card",
        href: "/docs/morphing-card",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Feedback Modal",
        href: "/docs/feedback-modal",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Bento Grid",
        href: "/docs/bento-grid",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Mouse Trailer",
        href: "/docs/mouse-trailer",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Help Desk",
        href: "/docs/help-desk",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Scroll Indicator",
        href: "/docs/scroll-indicator",
        isNew: true,
        lastModified: "2025-10-23T02:49:32+05:30",
      },
    ],
  },
  {
    name: "Animations",
    children: [
      {
        name: "Fuzzy Text",
        href: "/docs/fuzzy-text",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Smooth Slider",
        href: "/docs/smooth-slider",
        lastModified: "2025-10-13T00:55:14+05:30",
      },
      {
        name: "Thinking Loader",
        href: "/docs/thinking-loader",
        isNew: true,
        lastModified: "2025-10-22T16:00:03+05:30",
      },
    ],
  },
  {
    name: "Backgrounds",
    children: [
      {
        name: "Tilted Carousel",
        href: "/docs/tilted-carousel",
        isNew: true,
        lastModified: "2025-10-13T02:21:26+05:30",
      },
    ],
  },
] as const;

export const useNavigationLinks = () =>
  NavigationLinks.flatMap((group) =>
    group.children.map((item) => ({
      ...item,
      name: item.name.toLowerCase().replaceAll(" ", "-"),
    }))
  );

// TODO: find a way to enforce string literal type in registery-examples
// const NavItems = NavigationLinks.flatMap((group) => group.children.map((item) => item.name));
// export type NavItemNames = (typeof NavItems)[number];
