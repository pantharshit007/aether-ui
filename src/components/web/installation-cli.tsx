"use client";

import { useState } from "react";
import { ShadcnLogo } from "./icon/shadcn-icon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon, Terminal } from "lucide-react";
import { srcUrl } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type Command = {
  label: string;
  icon: React.ReactNode;
  code: string;
};

export type InstallationCliProps = {
  value: string;
  className?: string;
};

export function InstallationCli({ value, className }: InstallationCliProps) {
  const pkgManager: Command[] = [
    {
      label: "npm",
      icon: <ShadcnLogo className="size-4" />,
      code: `npx shadcn@latest add "${srcUrl}/c/${value}.json"`,
    },
    {
      label: "pnpm",
      icon: <Terminal className="size-4" />,
      code: `pnpm dlx shadcn@latest add "${srcUrl}/c/${value}.json"`,
    },
    {
      label: "yarn",
      icon: <ShadcnLogo className="size-4" />,
      code: `npx shadcn@latest add "${srcUrl}/c/${value}.json"`,
    },
    {
      label: "bun",
      icon: <ShadcnLogo className="size-4" />,
      code: `bunx --bun add "${srcUrl}/c/${value}.json"`,
    },
  ];

  const [activeTab, setActiveTab] = useState(pkgManager[0].label);
  const [isCopied, setIsCopied] = useState(false);
  const currentTab = pkgManager.find((tab) => tab.label === activeTab);

  const onCopy = async () => {
    if (!currentTab?.code) return;

    try {
      await navigator.clipboard.writeText(currentTab.code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Tabs
      defaultValue={activeTab}
      onValueChange={setActiveTab}
      className={cn(
        "group mt-2 gap-0 overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800",
        className
      )}
    >
      <div className="bg-accent flex flex-row items-center justify-between overflow-hidden rounded-t-md border border-b-0 border-zinc-200 dark:border-zinc-800">
        <TabsList className="">
          {pkgManager.map((tab) => (
            <TabsTrigger
              key={tab.label}
              value={tab.label}
              className="flex flex-row items-center justify-center gap-x-1 p-2 font-mono text-sm text-zinc-800 dark:text-zinc-200"
              triggerClass="bottom-0"
            >
              <span>{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        <Button
          variant="ghost"
          size="icon"
          onClick={onCopy}
          className={cn(
            "relative opacity-0 transition-opacity group-hover:opacity-100",
            isCopied && "pointer-events-none"
          )}
        >
          <CopyIcon className={cn("size-4 transition-all", isCopied && "scale-0 opacity-0")} />
          <CheckIcon
            className={cn(
              "absolute size-4 transition-all",
              isCopied ? "scale-100 opacity-100" : "scale-0 opacity-0"
            )}
          />
        </Button>
      </div>

      {pkgManager.map((cmd) => (
        <TabsContent
          key={cmd.label}
          value={cmd.label}
          className="overflow-hidden rounded-b-md border-none"
        >
          <pre
            className="not-prose p-4 font-mono text-sm text-zinc-50"
            style={{
              backgroundColor: "#18181b",
            }}
          >
            {cmd.code}
          </pre>
        </TabsContent>
      ))}
    </Tabs>
  );
}
