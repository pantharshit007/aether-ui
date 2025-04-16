"use client";
import { cn } from "@/lib/utils";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type CodePreviewProps = {
  code: string;
  children: React.ReactNode;
  expandable?: boolean;
};

export default function CodePreview({
  code,
  children,
  expandable: shouldExpand,
}: CodePreviewProps) {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Copy button */}
      <div className="absolute top-4 right-4 z-10">
        <button className="cursor-pointer bg-transparent p-2" onClick={onCopy}>
          <div
            className={`absolute inset-0 transform transition-all duration-300 ${
              hasCheckIcon ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <Copy className="h-4 w-4 text-zinc-50" />
          </div>

          <div
            className={`absolute inset-0 transform transition-all duration-300 ${
              hasCheckIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <Check className="h-4 w-4 text-zinc-50" />
          </div>
        </button>
      </div>

      {shouldExpand && (
        <>
          {!isExpanded && (
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent" />
          )}

          {/* Collapse/Expand button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary !bg-primary-foreground absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-1 px-3 py-1.5 font-sans text-xs transition-colors"
            variant={"outline"}
          >
            {isExpanded ? <span>Collapse</span> : <span>Expand</span>}
          </Button>
        </>
      )}

      <div
        className={cn(
          "editor-bg rounded-md pb-2.5 transition-all duration-300",
          isExpanded && shouldExpand
            ? "max-h-[650px] overflow-auto"
            : "max-h-[200px] overflow-hidden"
        )}
      >
        <div className="inline-block overflow-x-auto p-4 text-sm">{children}</div>
      </div>
    </div>
  );
}
