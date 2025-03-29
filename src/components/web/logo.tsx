import { cn } from "@/lib/utils";
import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "font-instrument-serif text-shadow-glow text-6xl tracking-wide text-zinc-950 dark:text-white",
        className
      )}
    >
      Aether <span className="text-gradient">UI</span>
    </p>
  );
}

export default Logo;
