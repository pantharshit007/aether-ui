"use client";
import { cn } from "@/lib/utils";
import React from "react";

type FuzzyTextProps = {
  text?: string;
  orignal: string;
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function fuzzyText({ text, orignal, children, className, ...props }: FuzzyTextProps) {
  const element = React.useRef<HTMLSpanElement | null>(null);
  const childrenCopy = text && text?.length !== 0 ? text : orignal;
  const fuzzyText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let interval: NodeJS.Timeout | null = null;

  if (orignal.length === 0) {
    return <span className="text-red-500">ORIGNAL TEXT CANNOT BE EMPTY</span>;
  }

  function animateText(targetText: string, callback?: () => void) {
    let iteration = 0;
    clearInterval(interval as NodeJS.Timeout);

    interval = setInterval(() => {
      if (!element.current || element.current.innerText === "") {
        clearInterval(interval as NodeJS.Timeout);
        return;
      }

      const newText = targetText.replace(/./g, (char, idx) => {
        if (idx < iteration) return targetText[idx];
        const randomIndex = Math.floor(Math.random() * fuzzyText.length);
        return fuzzyText[randomIndex];
      });

      element.current.innerText = newText;
      iteration += 1 / 3;

      if (iteration >= targetText.length) {
        clearInterval(interval as NodeJS.Timeout);
        interval = null;
        if (callback) {
          callback();
        }
      }
    }, 30);
  }

  function handleMouseOver(e: React.MouseEvent<HTMLSpanElement>) {
    animateText(childrenCopy);
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    animateText(orignal);
  }

  return (
    <span
      ref={element}
      className={cn(
        "cursor-crosshair rounded-sm px-1.5 py-1 font-mono uppercase transition-all duration-200 hover:bg-black/90 hover:text-white/90 dark:hover:bg-white/90 dark:hover:text-black/80",
        className
      )}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </span>
  );
}

export default fuzzyText;
