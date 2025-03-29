import { cn } from "@/lib/utils";
import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <h1
      className={cn(
        "text-shadow-glow font-instrument-serif text-6xl tracking-wide text-white",
        className
      )}
    >
      Aether <span className="text-gradient">UI</span>
    </h1>
  );
}

export default Logo;
