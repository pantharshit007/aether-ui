"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavigationItem, NavigationLinks } from "@/data/navigation";
import { motion } from "motion/react";

function NavigationDesktop() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-14 hidden h-[calc(100dvh-(--spacing(16)))] w-[220px] shrink-0 pt-8 md:block lg:pt-12">
      <nav>
        <ul role="list" className="h-full pb-9 [&>li:not(:first-child)>div]:pt-6">
          {NavigationLinks.map((item, index) => {
            return (
              <li key={`${item.name}-${index}`}>
                <div className="relative z-10 w-11/12 pb-4 font-sans text-sm tracking-wide text-zinc-950 dark:bg-zinc-950 dark:text-white">
                  {item.name}
                </div>
                <ul
                  role="list"
                  className="space-y-3.5 border-l border-zinc-200 dark:border-zinc-800"
                >
                  {item.children.map((child: NavigationItem) =>
                    NavSubItems({ item: child, pathname })
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

function NavSubItems({ item, pathname }: { item: NavigationItem; pathname: string }) {
  {
    const isActive = pathname === item.href;

    return (
      <li key={item.href}>
        <Link
          className={cn(
            "relative inline-flex items-center pl-4 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100",
            isActive && "text-zinc-950 dark:text-zinc-100"
          )}
          href={item.href}
        >
          {isActive && (
            <motion.div
              layout
              className="absolute top-0 -left-[1px] h-full w-0.5 rounded-[4px] bg-zinc-950 dark:bg-white"
              transition={{
                type: "spring",
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
              layoutId="moving-sidebar-pane"
            />
          )}

          <span>{item.name}</span>

          {item?.isNew && (
            <span className="ml-2 rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold whitespace-nowrap text-emerald-800 dark:bg-emerald-950 dark:text-emerald-50">
              New
            </span>
          )}

          {item?.isUpdated && (
            <span className="ml-2 rounded-lg bg-amber-100 px-2 text-[10px] font-semibold whitespace-nowrap text-amber-800 dark:bg-amber-950 dark:text-amber-50">
              Updated
            </span>
          )}
        </Link>
      </li>
    );
  }
}

export { NavigationDesktop };
