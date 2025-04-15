import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodePreview from "./code-preview";
import CodeRenderer from "./code-renderer";
import { readCode } from "@/lib/readFile";
import FinalPreview from "./final-preview";

type ComponentCodePreview = {
  component: React.ReactElement;
  filePath: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
};

function ComponentCodePreview({
  component,
  filePath,
  hasReTrigger,
  classNameComponentContainer,
}: ComponentCodePreview) {
  const fileContent = readCode(filePath);

  return (
    <div className="not-prose z-0 flex items-center justify-between pb-4">
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <TabsList className="bg-transparent">
          <TabsTrigger value="preview" className="tracking-wide">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="tracking-wide">
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="rounded-md border border-zinc-200 dark:border-zinc-800"
        >
          <FinalPreview
            component={component}
            className={classNameComponentContainer}
            filePath={filePath}
          />
        </TabsContent>
        <TabsContent
          value="code"
          className="rounded-md border border-zinc-200 dark:border-zinc-800"
        >
          <CodePreview code={fileContent} expandable>
            <CodeRenderer code={fileContent} lang="tsx" />
          </CodePreview>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ComponentCodePreview;
