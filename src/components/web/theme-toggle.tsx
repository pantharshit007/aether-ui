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
    <Button variant="ghost" className="h-8 w-8 cursor-pointer px-0" onClick={toggleTheme}>
      <SunDimIcon className="hidden [html.dark_&]:block" />
      <MoonIcon className="hidden [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
