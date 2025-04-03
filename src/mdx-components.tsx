import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "./lib/utils";
import CodeBlock from "./components/web/code-block";
import { InstallationCli } from "./components/web/installation-cli";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type CodeBlockProps = ComponentPropsWithoutRef<"code">;

const components = {
  h1: (props: HeadingProps) => <h1 className="" {...props} />,
  h2: (props: HeadingProps) => <h2 className="" {...props} />,
  h3: (props: HeadingProps) => <h3 className="" {...props} />,
  h4: (props: HeadingProps) => <h4 className="" {...props} />,
  p: (props: ParagraphProps) => <p className="" {...props} />,
  ol: (props: ListProps) => (
    <ol className="list-decimal space-y-2 pl-5 text-gray-800 dark:text-zinc-300" {...props} />
  ),
  ul: (props: ListProps) => (
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
  Step: (props: ComponentPropsWithoutRef<"div">) => <h3 className="" {...props} />,
  // code: (props: CodeBlockProps) => <code className="text-sm" {...props} />,

  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code className="not-prose" dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
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
