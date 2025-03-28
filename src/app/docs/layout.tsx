"use client";

import Header from "@/components/web/nav/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { NavigationItem, NavigationLinks } from "../data/navigation";
import { usePathname } from "next/navigation";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="px-6 lg:px-8">
        <div className="mx-auto md:max-w-7xl">
          <div className="mx-auto flex w-full flex-col items-start md:flex-row md:space-x-12">
            <NavigationDesktop />
            {/* <NavigationMobile /> */}
            <main className="">{children}</main>
          </div>
        </div>
      </div>
      {children}
    </>
  );
}

export default layout;

function NavigationDesktop() {
  const pathname = usePathname();
  const activeRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
      });
    }
  }, [pathname]);

  return (
    <aside className="sticky top-14 hidden h-[calc(100dvh-(--spacing(16)))] w-[220px] shrink-0 pt-8 md:block lg:pt-12">
      <nav>
        <ul
          role="list"
          className="h-full pb-9 [&>li:not(:first-child)>div]:pt-6"
        >
          {NavigationLinks.map((item, index) => {
            return (
              <li key={`${item.name}-${index}`}>
                <div className="font-instrument-serif relative z-10 w-11/12 bg-zinc-950 pb-4 text-xl font-[450] tracking-wider">
                  {item.name}
                </div>
                <ul
                  role="list"
                  className="space-y-3.5 border-l border-zinc-200 dark:border-zinc-800"
                >
                  {item.children.map((child: NavigationItem) => {
                    const isActive = pathname === child.href;

                    return (
                      <li key={child.href} ref={isActive ? activeRef : null}>
                        <Link
                          className={cn(
                            "relative inline-flex items-center pl-4 text-sm font-normal text-zinc-400 hover:text-white",
                            isActive && "text-zinc-200",
                          )}
                          href={child.href}
                        >
                          {isActive && <div />}
                          <span>{child.name}</span>
                          {child?.isNew && (
                            <span className="ml-2 rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold whitespace-nowrap text-emerald-800 dark:bg-emerald-950 dark:text-emerald-50">
                              New
                            </span>
                          )}
                          {child?.isUpdated && (
                            <span className="ml-2 rounded-lg bg-amber-100 px-2 text-[10px] font-semibold whitespace-nowrap text-amber-800 dark:bg-amber-950 dark:text-amber-50">
                              Updated
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
