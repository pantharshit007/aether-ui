"use client";

import { useState } from "react";
import { ShadcnLogo } from "./icon/shadcn-icon";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { srcUrl } from "@/lib/data";

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
  const command: Command = {
    label: "shadcn",
    icon: <ShadcnLogo className="size-4" />,
    code: `npx shadcn@latest add "${srcUrl}/c/${value}.json"`,
  };

  const [isCopied, setIsCopied] = useState(false);

  const onCopy = async () => {
    if (!command?.code) return;

    try {
      await navigator.clipboard.writeText(command.code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800",
        className
      )}
    >
      <div className="bg-secondary flex flex-row items-center justify-between p-3">
        <div className="flex items-center gap-1.5 text-zinc-950 dark:text-white">
          {command.icon}
          {command.label}
        </div>
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
      <pre
        className="not-prose p-4 font-mono text-sm text-zinc-50"
        style={{
          backgroundColor: "#18181b",
        }}
      >
        {command.code}
      </pre>
    </div>
  );
}
