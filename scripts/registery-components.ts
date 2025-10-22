import path from "path";
import { RegistryType, Schema } from "./registery-schema";

type ComponentDefinition = Partial<
  Pick<Schema, "dependencies" | "devDependencies" | "registryDependencies" | "cssVars" | "tailwind">
> & {
  name: string;
  path: string;
  description: string;
  title: string;
  author?: string;
  files?: {
    name: string;
    path: string;
    type: RegistryType;
  }[];
};

export const components: ComponentDefinition[] = [
  {
    name: "button",
    path: path.join(process.cwd(), "src", "components", "content", "button.tsx"),
    registryDependencies: [],
    title: "Button",
    dependencies: [],
    author: "Harshit Pant <hrshit.in>",
    description: "A customizable button component with a variety of variants to choose from.",
  },
  {
    name: "hover-card",
    path: path.join(process.cwd(), "src", "components", "content", "hover-card.tsx"),
    registryDependencies: [],
    title: "Hover Card",
    dependencies: [],
    author: "Harshit Pant <hrshit.in>",
    description: "A Esthetic hover card component with a glowing effect on the edges.",
  },
  {
    name: "morphing-card",
    path: path.join(process.cwd(), "src", "components", "content", "morphing-card.tsx"),
    registryDependencies: [],
    title: "Morphing Card",
    dependencies: ["motion"],
    author: "Harshit Pant <hrshit.in>",
    description: "A morphing card component with a glowing effect on the edges.",
  },
  {
    name: "feedback-modal",
    path: path.join(process.cwd(), "src", "components", "content", "feedback-modal.tsx"),
    registryDependencies: [],
    title: "Feedback Modal",
    dependencies: ["motion"],
    author: "Harshit Pant <hrshit.in>",
    description: "A feedback/suggestion modal component with customizable content.",
    files: [
      {
        name: "hooks/useClickOutside.ts",
        path: path.join(process.cwd(), "src", "hooks", "useClickOutside.ts"),
        type: "registry:hook",
      },
    ],
  },
  {
    name: "bento-grid",
    path: path.join(process.cwd(), "src", "components", "content", "bento-grid.tsx"),
    registryDependencies: [],
    title: "Bento Grid",
    dependencies: ["motion"],
    author: "AbuPsng",
    description: "A Multi-column grid layout with bento boxes.",
    files: [
      {
        name: "hooks/useClickOutside.ts",
        path: path.join(process.cwd(), "src", "hooks", "useClickOutside.ts"),
        type: "registry:hook",
      },
    ],
  },
  {
    name: "fuzzy-text",
    path: path.join(process.cwd(), "src", "components", "content", "fuzzy-text.tsx"),
    registryDependencies: [],
    title: "Fuzzy Text",
    dependencies: [],
    author: "Harshit Pant <hrshit.in>",
    description: "Experience Fuzzy effect on hover",
  },
  {
    name: "mouse-trailer",
    path: path.join(process.cwd(), "src", "components", "content", "mouse-trailer.tsx"),
    registryDependencies: [],
    title: "Mouse Trailer",
    dependencies: [],
    author: "Aditya Joshi",
    description: "Colorful mouse trailer with bunch of customization options.",
  },
  {
    name: "smooth-slider",
    path: path.join(process.cwd(), "src", "components", "content", "smooth-slider.tsx"),
    registryDependencies: [],
    title: "Smooth Slider",
    dependencies: [],
    author: "Harshit Pant <hrshit.in>",
    description: "Google's new released series inspired slider component with smooth animation.",
  },
  {
    name: "help-desk",
    path: path.join(process.cwd(), "src", "components", "content", "help-desk.tsx"),
    registryDependencies: [],
    title: "Help Desk",
    dependencies: [],
    author: "Harshit Pant <hrshit.in>",
    description:
      "Got a question? We're here to help, click the help desk and resolve your queries.",
  },
  {
    name: "tilted-carousel",
    path: path.join(process.cwd(), "src", "components", "content", "tilted-carousel.tsx"),
    registryDependencies: [],
    title: "Tilted Carousel",
    dependencies: [],
    author: "Anmol-TheDev",
    description:
      "A visually immersive tilted carousel component with smooth bidirectional animations.",
  },
  {
    name: "thinking-loader",
    path: path.join(process.cwd(), "src", "components", "content", "thinking-loader.tsx"),
    registryDependencies: [],
    title: "Thinking Loader",
    dependencies: [],
    author: "Harshit Pant <hrshit.in>",
    description:
      "A customizable loader component that displays a sequence of phrases with an icon.",
    files: [
      {
        name: "thinking-loader.css",
        path: path.join(process.cwd(), "src", "components", "content", "thinking-loader.css"),
        type: "registry:theme",
      },
    ],
  },
];
