"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunDimIcon } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { useCallback } from "react";
import { VariantProps } from "class-variance-authority";

export default function ThemeToggle({
  variant,
}: {
  variant?: VariantProps<typeof buttonVariants>["variant"];
}) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(
    () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    [resolvedTheme, setTheme]
  );

  return (
    <Button
      variant={variant ?? "secondary"}
      className="h-8 w-8 cursor-pointer px-0"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <SunDimIcon className="absolute !size-5 scale-0 rotate-90 transition-all [html.dark_&]:scale-100 [html.dark_&]:rotate-0" />
      <MoonIcon className="absolute !size-5 scale-0 rotate-90 transition-all [html.light_&]:scale-100 [html.light_&]:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
