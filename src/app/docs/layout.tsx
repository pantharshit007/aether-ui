"use client";

import Header from "@/components/web/nav/header";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { NavigationItem, NavigationLinks } from "../../data/navigation";
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
            <main className="prose prose-zinc dark:prose-invert prose-h1:scroll-m-20 prose-h1:text-2xl prose-h1:font-semibold prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-xl prose-h2:font-medium prose-h3:scroll-m-20 prose-h3:text-base prose-h3:font-medium prose-h4:scroll-m-20 prose-h5:scroll-m-20 prose-h6:scroll-m-20 prose-strong:font-medium prose-table:block prose-table:overflow-y-auto mr-0 max-w-full min-w-0 flex-1 pt-8 pb-16 lg:pt-12">
              {children}
            </main>
          </div>
        </div>
      </div>
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
        <ul role="list" className="h-full pb-9 [&>li:not(:first-child)>div]:pt-6">
          {NavigationLinks.map((item, index) => {
            return (
              <li key={`${item.name}-${index}`}>
                <div className="font-instrument-serif relative z-10 w-11/12 pb-4 text-xl tracking-wider text-zinc-950 dark:bg-zinc-950 dark:text-white">
                  {item.name}
                </div>
                <ul
                  role="list"
                  className="space-y-3.5 border-l border-zinc-200 dark:border-zinc-800"
                >
                  {item.children.map((child: NavigationItem) =>
                    NavSubItems({ item: child, pathname, activeRef })
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

function NavSubItems({
  item,
  pathname,
  activeRef,
}: {
  item: NavigationItem;
  pathname: string;
  activeRef: React.RefObject<HTMLLIElement | null>;
}) {
  {
    const isActive = pathname === item.href;

    return (
      <li key={item.href} ref={isActive ? activeRef : null}>
        <Link
          className={cn(
            "relative inline-flex items-center pl-4 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
            isActive && "text-zinc-950"
          )}
          href={item.href}
        >
          {/* {isActive && <div />} */}

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
