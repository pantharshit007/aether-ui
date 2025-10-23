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
    type?: "registry:hook" | "registry:ui" | "registry:lib" | "registry:theme";
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
          path: path.join(process.cwd(), "src", "components", "content", "button.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "hover-card.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "hover-card.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "morphing-card.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "morphing-card.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "feedback-modal.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "feedback-modal.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "bento-grid.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "bento-grid.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "fuzzy-text.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "fuzzy-text.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "fuzzy-text.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "mouse-trailer.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "smooth-slider.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "smooth-slider.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "help-desk.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "help-desk.tsx"),
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
          path: path.join(process.cwd(), "src", "components", "content", "help-desk.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
  "tilted-carousel": [
    {
      name: "tilted-carousel-demo",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "tilted-carousel",
        "tilted-carousel-demo.tsx"
      ),
      description:
        "A visually immersive tilted carousel component with smooth bidirectional animations.",
      componentName: "tilted-carousel",
      files: [
        {
          name: "tilted-carousel.tsx",
          path: path.join(process.cwd(), "src", "components", "content", "tilted-carousel.tsx"),
          type: "registry:ui",
        },
      ],
    },
    {
      name: "tilted-carousel-demo2",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "tilted-carousel",
        "tilted-carousel-demo2.tsx"
      ),
      description:
        "A visually immersive tilted carousel component with smooth bidirectional animations.",
      componentName: "tilted-carousel",
      files: [
        {
          name: "tilted-carousel.tsx",
          path: path.join(process.cwd(), "src", "components", "content", "tilted-carousel.tsx"),
          type: "registry:ui",
        },
      ],
    },
  ],
  "thinking-loader": [
    {
      name: "thinking-loader-demo",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "thinking-loader",
        "thinking-loader-demo.tsx"
      ),
      description:
        "A customizable loader component that displays a sequence of phrases with an icon.",
      componentName: "thinking-loader",
      files: [
        {
          name: "thinking-loader.tsx",
          path: path.join(process.cwd(), "src", "components", "content", "thinking-loader.tsx"),
          type: "registry:ui",
        },
        {
          name: "thinking-loader.css",
          path: path.join(process.cwd(), "src", "components", "content", "thinking-loader.css"),
          type: "registry:theme",
        },
      ],
    },
  ],
  "scroll-indicator": [
    {
      name: "scroll-indicator-demo",
      path: path.join(
        process.cwd(),
        "src",
        "app",
        "docs",
        "scroll-indicator",
        "scroll-indicator-demo.tsx"
      ),
      description:
        "A scroll indicator component that shows scroll progress and allows scrolling to top.",
      componentName: "scroll-indicator",
      files: [
        {
          name: "scroll-indicator.tsx",
          path: path.join(process.cwd(), "src", "components", "content", "scroll-indicator.tsx"),
          type: "registry:ui",
        },
        {
          name: "hooks/use-mobile.ts",
          path: path.join(process.cwd(), "src", "hooks", "use-mobile.ts"),
          type: "registry:hook",
        },
      ],
    },
  ],
};
