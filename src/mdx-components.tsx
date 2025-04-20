import React, { ComponentPropsWithoutRef, HTMLProps } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "./lib/utils";
import CodeBlock from "./components/web/code-block";
import { InstallationCli } from "./components/web/installation-cli";

type HeadingProps = ComponentPropsWithoutRef<"h1"> & HTMLProps<HTMLHeadingElement>;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type OrderedListProps = ComponentPropsWithoutRef<"ol">;
type UnOrderedListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const generateId = (name: string) => {
  return name
    .toLowerCase()
    .replace(/_/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

const components = {
  h1: ({ children, ...props }: HeadingProps) => {
    const id = generateId(children?.toString() ?? "");
    return (
      <h1 id={id} data-heading="1" {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ children, ...props }: HeadingProps) => {
    const id = generateId(children?.toString() ?? "");
    return (
      <h2 id={id} data-heading="2" {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: HeadingProps) => {
    const id = generateId(children?.toString() ?? "");
    return (
      <h3 id={id} data-heading="3" {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ children, ...props }: HeadingProps) => {
    const id = generateId(children?.toString() ?? "");
    return (
      <h4 id={id} data-heading="4" {...props}>
        {children}
      </h4>
    );
  },
  p: (props: ParagraphProps) => <p className="" {...props} />,
  ol: (props: OrderedListProps) => (
    <ol className="list-decimal space-y-2 pl-5 text-gray-800 dark:text-zinc-300" {...props} />
  ),
  ul: (props: UnOrderedListProps) => (
    <ul className="list-disc space-y-1 pl-5 text-gray-800 dark:text-zinc-300" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    );
  },
  Steps: (props: ComponentPropsWithoutRef<"div">) => (
    <div className="steps mb-12 ml-4 flex flex-col border-l pl-8 [counter-reset:step]" {...props} />
  ),
  Step: ({ children, className, ...props }: ComponentPropsWithoutRef<"h3">) => (
    <h3
      id={generateId(children?.toString() || "")}
      className={cn("step mt-7", className)}
      data-heading="3"
      {...props}
    >
      {children}
    </h3>
  ),
  // code: (props: CodeBlockProps) => <code className="text-sm" {...props} />,

  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code className="not-prose" dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="not-prose relative w-full table-auto overflow-auto rounded-lg border border-zinc-200 text-sm dark:border-zinc-800">
      <table className="w-full">
        <thead className="bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
          <tr className="h-10">
            {data.headers.map((header, index) => (
              <th key={index} className="px-4 pb-0 text-left align-middle font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 dark:divide-y dark:divide-zinc-600">
          {data.rows.map((row, index) => (
            <tr key={index} className="h-10">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={cn(
                    "px-4 py-2 text-left align-middle",
                    cellIndex < 3 ? "font-mono" : ""
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props: BlockquoteProps) => <blockquote className="" {...props} />,
  Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
    <Tabs className={cn("z-10 mt-6 w-full", className)} {...props} />
  ),
  TabsList: ({ className, ...props }: React.ComponentProps<typeof TabsList>) => (
    <TabsList className={cn(className)} {...props} />
  ),
  TabsTrigger: ({ className, ...props }: React.ComponentProps<typeof TabsTrigger>) => (
    <TabsTrigger className={cn(className)} {...props} />
  ),
  TabsContent: ({ className, ...props }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent className={cn(className)} {...props} />
  ),
  CodeBlock: ({ className, ...props }: React.ComponentProps<typeof CodeBlock>) => (
    <CodeBlock className={cn(className)} {...props} />
  ),
  InstallationCli: ({ ...props }: React.ComponentProps<typeof InstallationCli>) => (
    <InstallationCli {...props} />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
