"use client";

import { cn } from "@/lib/utils";
import React, { CSSProperties, useEffect, useRef } from "react";

interface HoverAreaProps extends React.ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  size?: number;
}

type HoverCardProps = {
  color?: string;
  className?: string;
} & React.ComponentPropsWithoutRef<"div">;

function HoverArea({ children, className, size = 300, ...props }: HoverAreaProps) {
  const elem = useRef<HTMLDivElement>(null);
  const currFrameId = useRef<number | null>(null);
  const currCoordinates = useRef<{ x: number; y: number } | null>(null);

  /**
   * Update the position before the next browser paint in sync with render cycle.
   */
  function updateFramePosition() {
    if (currCoordinates.current && elem.current) {
      const { x, y } = currCoordinates.current;
      elem.current.style.setProperty("--glow-x", `${x}px`);
      elem.current.style.setProperty("--glow-y", `${y}px`);
    }

    currFrameId.current = null;
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const boundingClientRect = elem.current?.getBoundingClientRect();
    if (!boundingClientRect) return;

    currCoordinates.current = {
      x: e.clientX - boundingClientRect.left,
      y: e.clientY - boundingClientRect.top,
    };

    if (!currFrameId.current) {
      currFrameId.current = requestAnimationFrame(updateFramePosition);
    }
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (elem.current) {
      elem.current.style.removeProperty("--glow-x");
      elem.current.style.removeProperty("--glow-y");
    }
  }

  return (
    <div
      style={
        {
          position: "relative",
          "--glow-size": `${size}px`,
        } as CSSProperties
      }
      ref={elem}
      className={cn(className)}
      {...props}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

function HoverCard({ color = "blue", className, children, ...props }: HoverCardProps) {
  const element = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ele = element.current;
    if (ele && ele?.style) {
      ele.style.setProperty("--glow-top", `${ele.offsetTop}px`);
      ele.style.setProperty("--glow-left", `${ele.offsetLeft}px`);
    }
  }, []);

  return (
    <div ref={element} className={cn(className, "relative")}>
      <div
        style={{
          backgroundImage: `radial-gradient(
            var(--glow-size) var(--glow-size) at calc(var(--glow-x, -99999px) - var(--glow-left, 0px))
            calc(var(--glow-y, -99999px) - var(--glow-top, 0px)),
            ${color} 0%,
            transparent 100%  
          )`,
        }}
        className={cn(
          "after:bg-background/90 pointer-events-none absolute inset-0 mix-blend-multiply after:absolute after:inset-0.25 after:rounded-[inherit] after:content-[''] dark:mix-blend-lighten",
          className
        )}
        {...props}
      />
      {children}
    </div>
  );
}

export { HoverCard, HoverArea };

HoverCard.displayName = "HoverCard";
HoverArea.displayName = "HoverArea";
