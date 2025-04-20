"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

function Logo({
  className,
  imgClassName,
  defaultTheme,
}: {
  className?: string;
  imgClassName?: string;
  defaultTheme?: "dark" | "light";
}) {
  const { theme } = useTheme();
  const val = defaultTheme ?? theme;
  const logo =
    val === "light"
      ? "https://res.cloudinary.com/di0av3xly/image/upload/v1744924578/Aether-ui/au-logo-black.png"
      : "https://res.cloudinary.com/di0av3xly/image/upload/v1744924537/Aether-ui/au-logo-light.png";
  return (
    <div className="flex cursor-pointer items-center gap-1.5">
      <Image
        src={logo}
        alt="Logo"
        width={300}
        height={200}
        className={cn("aspect-square size-12 object-cover", imgClassName)}
      />

      <p
        className={cn(
          "font-bricolage-grotesque text-shadow-glow text-2xl font-medium tracking-tight text-white",
          className
        )}
      >
        Aether/<span className="text-gradient font-bold">ui</span>
      </p>
    </div>
  );
}

export default Logo;
