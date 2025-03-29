import React from "react";
import Link from "next/link";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";

function Header({ landing = false }: { landing?: boolean }) {
  return (
    <nav className="bg-whi sticky top-0 z-10 border-b border-zinc-200 dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[3.5rem] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
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
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;
