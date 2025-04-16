import React from "react";
import Header from "@/components/web/nav/header";
import { NavigationDesktop, NavigationMobile } from "@/components/web/nav/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Toc from "@/components/web/table-of-content";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="px-6 lg:px-8">
        <div className="mx-auto md:max-w-7xl">
          <div className="mx-auto flex w-full flex-col items-start justify-between font-sans md:flex-row md:space-x-12">
            <NavigationDesktop />
            <NavigationMobile />
            <main className="prose prose-zinc dark:prose-invert prose-h1:scroll-m-20 prose-h1:text-2xl prose-h1:font-semibold prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-xl prose-h2:font-medium prose-h3:scroll-m-20 prose-h3:text-base prose-h3:font-medium prose-h4:scroll-m-20 prose-h5:scroll-m-20 prose-h6:scroll-m-20 prose-strong:font-medium prose-table:block prose-table:overflow-y-auto mr-0 max-w-full min-w-0 flex-1 pt-8 pb-16 lg:pt-12 xl:mr-12 xl:max-w-4xl">
              {children}
            </main>
            <aside className="sticky top-14 hidden h-[calc(100dvh-(--spacing(16)))] w-[220px] shrink-0 pt-8 lg:pt-12 xl:block">
              <ScrollArea className="h-full w-full">
                <Toc />
              </ScrollArea>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default layout;
