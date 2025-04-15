"use client";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { NavigationLinks } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { DialogProps } from "@radix-ui/react-dialog";
import { Component, ListStartIcon, Search, StarsIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    function keyPress(e: KeyboardEvent) {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        // don't invoke on editable content
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((status) => !status);
      }
    }

    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, []);

  const runCmd = React.useCallback((cmd: () => unknown) => {
    setOpen(false);
    cmd();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "bg-muted/50 text-muted-foreground relative h-8 w-fit justify-start rounded-[0.5rem] text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">
          <Search />
        </span>
        <kbd className="bg-muted pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="custom-scrollbar">
          <CommandEmpty>No results found</CommandEmpty>
          <CommandGroup heading="Getting Started" className="font-sans text-lg">
            {NavigationLinks.filter((group) => group.name === "Getting Started")
              .flatMap((group) => group.children)
              .map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.name}
                  onSelect={() => {
                    runCmd(() => router.push(item.href as string));
                  }}
                  className=""
                >
                  <ListStartIcon className="mr-2 !size-5 fill-zinc-300 text-zinc-500" />
                  {item.name}
                </CommandItem>
              ))}
          </CommandGroup>

          <CommandGroup heading="Components" className="font-sans text-lg">
            {NavigationLinks.filter((group) => group.name === "Components")
              .flatMap((group) => group.children)
              .map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.name}
                  onSelect={() => {
                    runCmd(() => router.push(item.href as string));
                  }}
                  className=""
                >
                  <Component className="mr-2 !size-5 fill-emerald-300 text-emerald-500" />
                  {item.name}
                </CommandItem>
              ))}
          </CommandGroup>

          <CommandGroup heading="Animations" className="font-sans text-lg">
            {NavigationLinks.filter((group) => group.name === "Animations")
              .flatMap((group) => group.children)
              .map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.name}
                  onSelect={() => {
                    runCmd(() => router.push(item.href as string));
                  }}
                  className=""
                >
                  <StarsIcon className="mr-2 !size-5 fill-amber-300 text-amber-500" />
                  {item.name}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

export default CommandMenu;
