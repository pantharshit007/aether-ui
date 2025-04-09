export type NavigationItem = {
  name: string;
  href: string;
  isNew?: boolean;
  isUpdated?: boolean;
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
      },
      {
        name: "Installation",
        href: "/docs/installation",
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "Button",
        href: "/docs/button",
      },
      {
        name: "Hover Card",
        href: "/docs/hover-card",
      },
      {
        name: "Morphing Card",
        href: "/docs/morphing-card",
      },
      {
        name: "Feedback Modal",
        href: "/docs/feedback-modal",
      },
    ],
  },
  {
    name: "Text",
    children: [
      {
        name: "Fuzzy Text",
        href: "/docs/fuzzy-text",
      },
    ],
  },
];
