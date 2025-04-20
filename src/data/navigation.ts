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
      {
        name: "Bento Grid",
        href: "/docs/bento-grid",
      },
      {
        name: "Mouse Trailer",
        href: "/docs/mouse-trailer",
        isNew: true,
      },
      {
        name: "Help Desk",
        href: "/docs/help-desk",
      },
    ],
  },
  {
    name: "Animations",
    children: [
      {
        name: "Fuzzy Text",
        href: "/docs/fuzzy-text",
      },
      {
        name: "Smooth Slider",
        href: "/docs/smooth-slider",
        isNew: true,
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
