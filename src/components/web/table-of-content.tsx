"use client";

import React, { useEffect, useState } from "react";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Heading = {
  id: string;
  text: string;
  level: number;
  url: string;
};

function Toc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    function handleRouteChange() {
      const elements = Array.from(document.querySelectorAll("[data-heading]"));
      const subheadings: Heading[] = elements
        .map((elem) => {
          const level = parseInt(elem.getAttribute("data-heading") || "2", 10);
          if (level === 1) return null;

          return {
            id: `lvl-${level}-${elem.id}`,
            url: elem.id,
            text: elem.textContent ?? "",
            level,
          };
        })
        .filter((heading) => heading !== null);

      setHeadings(subheadings);
    }

    handleRouteChange();

    // window.addEventListener("hashchange", handleRouteChange);
    // return () => window.removeEventListener("hashchange", handleRouteChange);
  }, [pathname]);

  const activeHeading = useActiveHeading(headings);
  // const mounted = useMounted();

  if (headings.length === 0) {
    return (
      <div className="space-y-2">
        <p className="mb-2 font-sans text-sm font-medium text-black dark:text-white">
          On this page
        </p>
        <p className="text-sm text-zinc-700 dark:text-zinc-400">No table of contents available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <p className="mb-2 font-sans text-sm font-medium text-black dark:text-white">On this page</p>
      <TreeView tree={headings} activeHeading={activeHeading} path={pathname} />
    </div>
  );
}

type TreeViewProps = {
  tree: Heading[];
  activeHeading?: string | null;
  path: string;
};

function TreeView({ tree, activeHeading, path }: TreeViewProps) {
  return (
    <>
      <ul
        className="list-none space-y-2 text-sm/relaxed text-zinc-700 dark:text-zinc-400"
        role="list"
        aria-labelledby="toc-heading"
        key={path}
      >
        {tree.map((item) => (
          <li
            key={`toc-${item.id}`}
            className={cn(
              "font-sans transition-colors",
              item.level === 2 && "pl-2",
              item.level === 3 && "pl-4",
              item.level === 4 && "pl-6"
            )}
          >
            <a
              href={`#${item.url}`}
              className={cn(
                "hover:text-foreground",
                activeHeading === item.url && "text-foreground font-medium"
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * This hook is used to track the active heading in the table of contents
 * @param subheadings
 * @returns activeId
 */
function useActiveHeading(subheadings: Heading[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  // This observer is used to track the intersection of the heading with the viewport
  useEffect(() => {
    // prettier-ignore
    const observer = new IntersectionObserver((entries) => {
      const intersecting = entries.filter((entry) => entry.isIntersecting);

      if (intersecting.length > 0) {
        // pick the first heading (closest to top)
        setActiveId(intersecting[0].target.id);
      }
    }, { rootMargin: "0px 0px -50% 0px" });

    subheadings?.forEach((subheading) => {
      const element = document.getElementById(subheading.url);
      if (element) observer.observe(element);
    });

    return () => {
      subheadings?.forEach((subheading) => {
        const element = document.getElementById(subheading.url);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [subheadings]);

  return activeId;
}

export default Toc;
