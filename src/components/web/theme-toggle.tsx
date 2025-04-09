"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunDimIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useCallback } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = useCallback(
    () => setTheme(resolvedTheme === "dark" ? "light" : "dark"),
    [resolvedTheme, setTheme]
  );

  return (
    <Button
      variant={"secondary"}
      className="h-8 w-8 cursor-pointer px-0"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <SunDimIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all [html.dark_&]:scale-100 [html.dark_&]:rotate-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all [html.light_&]:scale-100 [html.light_&]:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
