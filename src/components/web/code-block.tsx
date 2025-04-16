import { readCode } from "@/lib/readFile";
import CodePreview from "./code-preview";
import CodeRenderer from "./code-renderer";
import { cn } from "@/lib/utils";
import type { BundledLanguage } from "shiki/bundle/web";

type CodeBlockProps = {
  filePath?: string;
  code?: string;
  lang?: BundledLanguage;
  className?: string;
  shouldExpand?: boolean;
};

export default function CodeBlock({
  filePath,
  code = "",
  lang = "tsx",
  className,
  shouldExpand = true,
}: CodeBlockProps) {
  const fileContent = filePath ? readCode(filePath) : code;

  return (
    <div
      className={cn(
        "not-prose overflow-auto overflow-x-auto overflow-y-hidden rounded-md text-sm dark:border dark:border-zinc-800",
        className
      )}
    >
      <CodePreview code={fileContent} expandable={lang !== "bash" && shouldExpand}>
        <CodeRenderer code={fileContent} lang={lang} />
      </CodePreview>
    </div>
  );
}
