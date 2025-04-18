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
    description: "A simple button component with default and destructive variants.",
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
];
