"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

import { useIsMobile } from "@/hooks/use-mobile";

export interface ScrollIndicatorProps {
  showOnMobile?: boolean;
  showCornerIndicator?: boolean;
  showTopBar?: boolean;
}

export function ScrollIndicator({
  showOnMobile = false,
  showCornerIndicator = true,
  showTopBar = false,
}: ScrollIndicatorProps) {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  const calculateScrollPercentage = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const percentage = (scrolled / documentHeight) * 100;

    setScrollPercentage(Math.min(100, Math.max(0, percentage)));
    setIsVisible(scrolled > windowHeight - windowHeight / 3);
  }, []);

  useEffect(() => {
    calculateScrollPercentage();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateScrollPercentage();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", calculateScrollPercentage, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateScrollPercentage);
    };
  }, [calculateScrollPercentage]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const circumference = 2 * Math.PI * 42; // radius = 42 : 2*pi*r
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

  if (isMobile && !showOnMobile) {
    return null;
  }

  return (
    <>
      {showTopBar && (
        <div className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-900/20">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-300 ease-out"
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
      )}

      {showCornerIndicator && (
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "fixed right-4 bottom-4 z-50 flex h-15 w-15 items-center justify-center rounded-full bg-zinc-900 shadow-2xl transition-all duration-500 ease-out hover:scale-110",
            isVisible ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-32 opacity-0"
          )}
          aria-label="Scroll to top"
          style={{
            transitionProperty: "transform, opacity",
          }}
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgb(34, 211, 238)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300 ease-out"
            />
          </svg>

          <div className="relative flex items-center justify-center">
            <span
              className={cn(
                "text-sm font-bold text-white transition-all duration-300",
                isHovered ? "scale-0 opacity-0" : "scale-100 opacity-100"
              )}
            >
              {Math.round(scrollPercentage)}%
            </span>
            <svg
              className={cn(
                "absolute h-6 w-6 text-cyan-400 transition-all duration-300",
                isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        </button>
      )}
    </>
  );
}
