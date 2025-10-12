<!-- This file is auto-generated. Do not edit manually. -->

# GEMINI.md - Aether/ui Project Context

## Project Overview

Aether/ui is a component library for Next.js and React, focusing on beautifully designed and animated components. It uses `Framer Motion` for animations and `Tailwind CSS` for styling. The project is structured as a monorepo-like system with a documentation site that showcases the components.

Components are managed through a registry system. Each component has its own source code, documentation (`.mdx` files), and one or more examples. A set of scripts in the `scripts/` directory are used to build JSON files (`public/c/` for components, `public/e/` for examples) that define the component registry.

**Key Technologies:**

- **Framework:** Next.js (with App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Linting:** ESLint
- **Formatting:** Prettier
- **Package Manager:** pnpm

## Building and Running

- **Development Server:** `pnpm dev`

  - Runs the Next.js development server with Turbopack.

- **Production Build:** `pnpm build`

  - Creates a production-ready build of the application.

- **Start Production Server:** `pnpm start`

  - Starts the production server after a build.

- **Linting:** `pnpm lint`
  - Runs ESLint to check for code quality and style issues.

## Development Conventions

### Adding a New Component

The `CHECKLIST.md` file outlines a clear, multi-step process for adding a new component to the library. The key steps are:

1.  **Update Navigation:** Add the component to `src/data/navigation.ts`.
2.  **Create Source File:** Add the component's `.tsx` file to `src/components/content/`.
3.  **Create Docs & Demo:** Add a documentation folder in `src/app/docs/` containing a `page.mdx` and at least one demo file (e.g., `[component-name]-demo.tsx`).
4.  **Register Component & Example:** Update `scripts/registery-components.ts` and `scripts/registery-examples.ts`.
5.  **Generate JSON:** Run the following commands to generate the registry JSON files:
    - `pnpm run register:all` or `pnpm run register -- --name=[component-name]` to create the main component JSON.
    - `pnpm run register:v0 -- --name=[component-name]` to create the example JSON.

### Component Registry

The project uses a custom registry system to manage components and their examples.

- **`scripts/registery-components.ts`**: Defines the metadata for each main component.
- **`scripts/registery-examples.ts`**: Defines the metadata and dependencies for each component example.
- **`scripts/registery-build.ts` & `scripts/registery-build-all.ts`**: Contain the logic to read the component/example source code and generate JSON files in `public/c` and `public/e`.

### Coding Style

- **Formatting:** Code is formatted with Prettier using the rules in `prettier.config.js` (e.g., 100 print width, no single quotes, trailing commas).
- **Linting:** ESLint is configured via `eslint.config.mjs` and extends the standard Next.js rules. Key rules include warnings for `console.log` and unused variables.
- **File Structure:** The `src` directory is well-organized, separating `app` (routing), `components`, `config`, `content` (component source), `data`, `hooks`, and `lib`.
