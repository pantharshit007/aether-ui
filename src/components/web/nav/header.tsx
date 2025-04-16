"use client";

import React from "react";
import Link from "next/link";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";
import SideBarToggle from "./sidebar-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import CommandMenu from "./command-menu";

function Header({ landing = false }: { landing?: boolean }) {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-15 border-b border-dotted border-zinc-400 bg-white px-6 dark:border-white/20 dark:bg-zinc-950">
      <div className="mx-auto flex h-[3.5rem] w-full items-center justify-between max-sm:px-2 md:max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-x-4 px-1">
          <Link href={landing ? "/" : "/docs"}>
            <Logo className="text-2xl font-medium tracking-widest" />
          </Link>

          {/* Navigation Links */}
          <div className="ml-3 hidden md:block">
            <div className="flex items-center space-x-4 font-sans text-sm tracking-wide">
              <Link
                href="/docs"
                className={cn(
                  "hover:text-foreground transition-colors hover:font-medium",
                  pathname.startsWith("/docs") ? "text-foreground" : "text-foreground/80"
                )}
              >
                Components
              </Link>

              <Link
                href="/showcase"
                className={cn(
                  "hover:text-foreground transition-colors hover:font-medium",
                  pathname.startsWith("/showcase") ? "text-foreground" : "text-foreground/80"
                )}
              >
                Showcase
              </Link>
              <Link
                href="/community"
                className={cn(
                  "hover:text-foreground transition-colors hover:font-medium",
                  pathname.startsWith("/community") ? "text-foreground" : "text-foreground/80"
                )}
              >
                Community
              </Link>
            </div>
          </div>
        </div>

        <span className="flex items-center gap-x-4">
          <CommandMenu />

          <ThemeToggle />
          <SideBarToggle />
        </span>
      </div>
    </nav>
  );
}

export default Header;
