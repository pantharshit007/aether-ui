import path from "path";
import { RegistryType, Schema } from "./registery-schema";

type ComponentDefinition = Partial<
  Pick<Schema, "dependencies" | "devDependencies" | "registryDependencies" | "cssVars" | "tailwind">
> & {
  name: string;
  path: string;
  description: string;
  title: string;
  files?: {
    name: string;
    path: string;
    type: RegistryType;
  }[];
};

export const components: ComponentDefinition[] = [
  {
    name: "button",
    path: path.join(process.cwd(), "src", "content", "button.tsx"),
    registryDependencies: [],
    title: "Button",
    dependencies: [],
    description: "A customizable button component with a variety of variants to choose from.",
  },
  {
    name: "hover-card",
    path: path.join(process.cwd(), "src", "content", "hover-card.tsx"),
    registryDependencies: [],
    title: "Hover Card",
    dependencies: [],
    description: "A Esthetic hover card component with a glowing effect on the edges.",
  },
  {
    name: "morphing-card",
    path: path.join(process.cwd(), "src", "content", "morphing-card.tsx"),
    registryDependencies: [],
    title: "Morphing Card",
    dependencies: ["motion"],
    description: "A morphing card component with a glowing effect on the edges.",
  },
  {
    name: "feedback-modal",
    path: path.join(process.cwd(), "src", "content", "feedback-modal.tsx"),
    registryDependencies: [],
    title: "Feedback Modal",
    dependencies: ["motion"],
    description: "A feedback/suggestion modal component with customizable content.",
    files: [
      {
        name: "hook/useClickOutside.ts",
        path: path.join(process.cwd(), "src", "hook", "useClickOutside.ts"),
        type: "registry:hook",
      },
    ],
  },
  {
    name: "bento-grid",
    path: path.join(process.cwd(), "src", "content", "bento-grid.tsx"),
    registryDependencies: [],
    title: "Bento Grid",
    dependencies: ["motion"],
    description: "A Multi-column grid layout with bento boxes.",
    files: [
      {
        name: "hook/useClickOutside.ts",
        path: path.join(process.cwd(), "src", "hook", "useClickOutside.ts"),
        type: "registry:hook",
      },
    ],
  },
  {
    name: "fuzzy-text",
    path: path.join(process.cwd(), "src", "content", "fuzzy-text.tsx"),
    registryDependencies: [],
    title: "Fuzzy Text",
    dependencies: [],
    description: "Experience Fuzzy effect on hover",
  },
  {
    name: "mouse-trailer",
    path: path.join(process.cwd(), "src", "content", "mouse-trailer.tsx"),
    registryDependencies: [],
    title: "Mouse Trailer",
    dependencies: [],
    description: "Colorful mouse trailer with bunch of customization options.",
  },
  {
    name: "smooth-slider",
    path: path.join(process.cwd(), "src", "content", "smooth-slider.tsx"),
    registryDependencies: [],
    title: "Smooth Slider",
    dependencies: [],
    description: "Google's new released series inspired slider component with smooth animation.",
  },
  {
    name: "help-desk",
    path: path.join(process.cwd(), "src", "content", "help-desk.tsx"),
    registryDependencies: [],
    title: "Help Desk",
    dependencies: [],
    description:
      "Got a question? We're here to help, click the help desk and resolve your queries.",
  },
  {
    name: "tilted-carousel",
    path: path.join(process.cwd(), "src", "content", "tilted-carousel.tsx"),
    registryDependencies: [],
    title: "Tilted Carousel",
    dependencies: [],
    description:
      "A visually immersive tilted carousel component with smooth bidirectional animations.",
  },
];
