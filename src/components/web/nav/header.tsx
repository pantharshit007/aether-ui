import React from "react";
import Link from "next/link";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";
import SideBarToggle from "./sidebar-toggle";

function Header({ landing = false }: { landing?: boolean }) {
  return (
    <nav className="sticky top-0 z-10 border-b border-dotted border-zinc-200 bg-white px-6 dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto flex h-[3.5rem] w-full items-center justify-between max-sm:px-2 md:max-w-7xl">
        {/* Logo */}
        <div className="px-1">
          <Link href={landing ? "/" : "/docs"}>
            <Logo className="text-2xl font-medium tracking-widest" />
          </Link>
        </div>

        <span className="flex items-center gap-x-4">
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/docs"
                className="text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Components
              </Link>

              <Link
                href="/showcase"
                className="text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Showcase
              </Link>
              <Link
                href="/community"
                className="text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Community
              </Link>
            </div>
          </div>

          <ThemeToggle />
          <SideBarToggle />
        </span>
      </div>
    </nav>
  );
}

export default Header;
