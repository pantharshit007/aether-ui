"use client";

import { cn } from "@/lib/utils";
import { Brain } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_LOADING_PHRASES = [
  "Loading tools…",
  "Hooking up things…",
  "Wiring logic…",
  "Almost there…",
  "Just thinking…",
  "Finalizing stuff…",
  "Staring into the void…",
  "Summoning electrons…",
];

interface ThinkingLoaderProps {
  className?: string;
  phrases?: string[];
  duration?: number;
  children?: React.ReactNode;
  textClassName?: string;
}

function ThinkingLoader({
  className,
  phrases = DEFAULT_LOADING_PHRASES,
  duration = 2500,
  children,
  textClassName,
}: ThinkingLoaderProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, duration);

    return () => clearInterval(interval);
  }, [phrases, duration]);

  return (
    <div className={cn("text-muted-foreground flex items-center gap-2", className)}>
      {children || <Brain className="h-5 w-5 flex-shrink-0" />}
      <span className={cn("relative inline-block w-40 truncate overflow-hidden", textClassName)}>
        <span
          className="animate-shimmer via-foreground/80 bg-gradient-to-r from-transparent to-transparent bg-[length:200%_100%] bg-clip-text text-transparent"
          style={{
            animation: "shimmer 3s ease-in-out infinite",
          }}
        >
          {phrases[currentPhraseIndex]}
        </span>
      </span>
      <style>
        {`
        @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
        }
      `}
      </style>
    </div>
  );
}

export default ThinkingLoader;

// DevelopedBy: AetherUI
