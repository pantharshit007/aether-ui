export type RegistryType =
  | "registry:ui"
  | "registry:hook"
  | "registry:block"
  | "registry:component"
  | "registry:lib"
  | "registry:page"
  | "registry:file";

export interface RegistryFile {
  path: string;
  content: string;
  type: RegistryType;
  target?: string;
}

export interface TailwindConfig {
  config?: Record<string, object>;
}

export interface CssVars {
  light: Record<string, string>;
  dark: Record<string, string>;
}

export interface Schema {
  name: string;
  type: RegistryType;
  registryDependencies?: string[];
  title: string;
  author?: string;
  description: string;
  dependencies?: string[];
  devDependencies?: string[];
  tailwind?: TailwindConfig;
  cssVars?: CssVars;
  files: RegistryFile[];
  componentName?: string;
}

export type V0Schema = Omit<
  Schema,
  | "registryDependencies"
  | "title"
  | "author"
  | "tailwind"
  | "cssVars"
  | "dependencies"
  | "devDependencies"
>;

export interface argsAccepted {
  name: string;
  author?: string;
  v0?: boolean | string;
}
