import path from "path";
import { Schema } from "./registery-schema";

type ComponentDefinition = Omit<
  Schema,
  | "title"
  | "author"
  | "registryDependencies"
  | "tailwind"
  | "cssVars"
  | "type"
  | "files"
  | "dependencies"
  | "devDependencies"
> & {
  name: string;
  path: string;
  description: string;
  files: {
    name: string;
    path: string;
    type?: "registry:hook" | "registry:ui" | "registry:lib";
  }[];
};

export const examples: Record<string, ComponentDefinition[]> = {
  button: [
    {
      name: "button-basic",
      path: path.join(process.cwd(), "src", "app", "docs", "button", "button-basic.tsx"),
      description: "A customizable button component with a variety of variants to choose from.",
      componentName: "button-basic",
      files: [
        {
          name: "button.tsx",
          path: path.join(process.cwd(), "src", "content", "button.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
  "hover-card": [
    {
      name: "hover-card-demo",
      path: path.join(process.cwd(), "src", "app", "docs", "hover-card", "hover-card-demo.tsx"),
      description: "A Esthetic hover card component with a glowing effect on the edges.",
      componentName: "hover-card",
      files: [
        {
          name: "hover-card.tsx",
          path: path.join(process.cwd(), "src", "content", "hover-card.tsx"),
          type: "registry:ui",
        },
      ],
    },
    {
      name: "hover-card-demo-2",
      path: path.join(process.cwd(), "src", "app", "docs", "hover-card", "hover-card-demo-2.tsx"),
      description: "A Esthetic hover card component with a glowing effect on the edges.",
      componentName: "hover-card",
      files: [
        {
          name: "hover-card.tsx",
          path: path.join(process.cwd(), "src", "content", "hover-card.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
  "morphing-card": [
    {
      name: "morphing-card-basic",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "morphing-card",
        "morphing-card-basic.tsx"
      ),
      description: "A morphing card component with a glowing effect on the edges.",
      componentName: "morphing-card",
      files: [
        {
          name: "morphing-card.tsx",
          path: path.join(process.cwd(), "src", "content", "morphing-card.tsx"),
          type: "registry:ui",
        },
      ],
    },
    {
      name: "morphing-card-custom",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "morphing-card",
        "morphing-card-custom.tsx"
      ),
      description: "A morphing card component with a glowing effect on the edges.",
      componentName: "morphing-card",
      files: [
        {
          name: "morphing-card.tsx",
          path: path.join(process.cwd(), "src", "content", "morphing-card.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
  "feedback-modal": [
    {
      name: "feedback-modal-demo",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "feedback-modal",
        "feedback-modal-demo.tsx"
      ),
      description: "A feedback/suggestion modal component with customizable content.",
      componentName: "feedback-modal",
      files: [
        {
          name: "feedback-modal.tsx",
          path: path.join(process.cwd(), "src", "content", "feedback-modal.tsx"),
          type: "registry:ui",
        },
        {
          name: "hooks/useClickOutside.ts",
          path: path.join(process.cwd(), "src", "hooks", "useClickOutside.ts"),
          type: "registry:hook",
        },
      ],
    },
    {
      name: "feedback-modal-demo2",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "feedback-modal",
        "feedback-modal-demo2.tsx"
      ),
      description: "A feedback/suggestion modal component with customizable content.",
      componentName: "feedback-modal",
      files: [
        {
          name: "feedback-modal.tsx",
          path: path.join(process.cwd(), "src", "content", "feedback-modal.tsx"),
          type: "registry:ui",
        },
        {
          name: "hooks/useClickOutside.ts",
          path: path.join(process.cwd(), "src", "hooks", "useClickOutside.ts"),
          type: "registry:hook",
        },
      ],
    },
  ],
  "bento-grid": [
    {
      name: "bento-grid-demo",
      path: path.join(process.cwd(), "src", "app", "docs", "bento-grid", "bento-grid-demo.tsx"),
      description: "A Multi-column grid layout with bento boxes.",
      componentName: "bento-grid",
      files: [
        {
          name: "bento-grid.tsx",
          path: path.join(process.cwd(), "src", "content", "bento-grid.tsx"),
          type: "registry:ui",
        },
        {
          name: "hooks/useClickOutside.ts",
          path: path.join(process.cwd(), "src", "hooks", "useClickOutside.ts"),
          type: "registry:hook",
        },
      ],
    },
    {
      name: "bento-grid-demo2",
      path: path.join(process.cwd(), "src", "app", "docs", "bento-grid", "bento-grid-demo2.tsx"),
      description: "A Multi-column grid layout with bento boxes.",
      componentName: "bento-grid",
      files: [
        {
          name: "bento-grid.tsx",
          path: path.join(process.cwd(), "src", "content", "bento-grid.tsx"),
          type: "registry:ui",
        },
        {
          name: "hooks/useClickOutside.ts",
          path: path.join(process.cwd(), "src", "hooks", "useClickOutside.ts"),
          type: "registry:hook",
        },
      ],
    },
  ],
  "fuzzy-text": [
    {
      name: "fuzzy-text-demo",
      path: path.join(process.cwd(), "src", "app", "docs", "fuzzy-text", "fuzzy-text-demo.tsx"),
      description: "Experience Fuzzy effect on hover",
      componentName: "fuzzy-text",
      files: [
        {
          name: "fuzzy-text.tsx",
          path: path.join(process.cwd(), "src", "content", "fuzzy-text.tsx"),
          type: "registry:ui",
        },
      ],
    },
    {
      name: "fuzzy-text-demo-2",
      path: path.join(process.cwd(), "src", "app", "docs", "fuzzy-text", "fuzzy-text-demo-2.tsx"),
      description: "Experience Fuzzy effect on hover",
      componentName: "fuzzy-text",
      files: [
        {
          name: "fuzzy-text.tsx",
          path: path.join(process.cwd(), "src", "content", "fuzzy-text.tsx"),
          type: "registry:ui",
        },
      ],
    },
    {
      name: "fuzzy-text-demo-3",
      path: path.join(process.cwd(), "src", "app", "docs", "fuzzy-text", "fuzzy-text-demo-3.tsx"),
      description: "Experience Fuzzy effect on hover",
      componentName: "fuzzy-text",
      files: [
        {
          name: "fuzzy-text.tsx",
          path: path.join(process.cwd(), "src", "content", "fuzzy-text.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
  "mouse-trailer": [
    {
      name: "mouse-trailer-demo",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "mouse-trailer",
        "mouse-trailer-demo.tsx"
      ),
      description: "Colorful mouse trailer with bunch of customization options.",
      componentName: "mouse-trailer",
      files: [
        {
          name: "mouse-trailer.tsx",
          path: path.join(process.cwd(), "src", "content", "mouse-trailer.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
  "smooth-slider": [
    {
      name: "smooth-slider-demo-1",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "smooth-slider",
        "smooth-slider-demo-1.tsx"
      ),
      description: "Google's new released series inspired slider component with smooth animation.",
      componentName: "smooth-slider",
      files: [
        {
          name: "smooth-slider.tsx",
          path: path.join(process.cwd(), "src", "content", "smooth-slider.tsx"),
          type: "registry:ui",
        },
      ],
    },
    {
      name: "smooth-slider-demo-2",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "smooth-slider",
        "smooth-slider-demo-2.tsx"
      ),
      description: "Google's new released series inspired slider component with smooth animation.",
      componentName: "smooth-slider",
      files: [
        {
          name: "smooth-slider.tsx",
          path: path.join(process.cwd(), "src", "content", "smooth-slider.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
  "help-desk": [
    {
      name: "help-desk-demo-1",
      path: path.join(process.cwd(), "src", "app", "docs", "help-desk", "help-desk-demo-1.tsx"),
      description:
        "Got a question? We're here to help, click the help desk and resolve your queries.",
      componentName: "help-desk",
      files: [
        {
          name: "help-desk.tsx",
          path: path.join(process.cwd(), "src", "content", "help-desk.tsx"),
          type: "registry:ui",
        },
      ],
    },
    {
      name: "help-desk-demo-2",
      path: path.join(process.cwd(), "src", "app", "docs", "help-desk", "help-desk-demo-2.tsx"),
      description:
        "Got a question? We're here to help, click the help desk and resolve your queries.",
      componentName: "help-desk",
      files: [
        {
          name: "help-desk.tsx",
          path: path.join(process.cwd(), "src", "content", "help-desk.tsx"),
          type: "registry:ui",
        },
      ],
    },
    {
      name: "help-desk-demo-3",
      path: path.join(process.cwd(), "src", "app", "docs", "help-desk", "help-desk-demo-3.tsx"),
      description:
        "Got a question? We're here to help, click the help desk and resolve your queries.",
      componentName: "help-desk",
      files: [
        {
          name: "help-desk.tsx",
          path: path.join(process.cwd(), "src", "content", "help-desk.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
};
