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
    ],
  },
];
