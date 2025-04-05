"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg bg-transparent p-[3px]",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const ele = triggerRef.current;
    if (ele) {
      setActive(ele.dataset.state === "active");

      const observer = new MutationObserver(() => {
        setActive(ele.dataset.state === "active");
      });

      observer.observe(ele, { attributes: true });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <TabsPrimitive.Trigger
      ref={triggerRef}
      data-slot="tabs-trigger"
      className={cn(
        "dark:data-[state=active]:text-foreground group focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-foreground dark:text-muted-foreground relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border-transparent px-2 py-1 text-[1rem] leading-6 font-medium tracking-wider whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute -bottom-1 flex h-0.5 w-full justify-center"
        animate={{
          opacity: active ? 1 : 0,
        }}
        initial={false}
      >
        <div className={cn("h-0.5 w-4/5 rounded-lg bg-zinc-950 dark:bg-white")} />
      </motion.div>
      {children}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
