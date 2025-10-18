"use client";

import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type AnimatedCardContextType = {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
};

const AnimatedCardContext = createContext<AnimatedCardContextType | null>(null);

export const useAnimatedCard = () => {
  const context = useContext(AnimatedCardContext);
  if (!context) {
    throw new Error("useAnimatedCard must be used within a AnimatedCard Provider");
  }

  return context;
};

type AnimatedSliderProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
  gap?: number;
  scrollAmount?: number;
} & React.ComponentProps<"div">;

function AnimatedSlider({ gap = 16, scrollAmount = 300, ...props }: AnimatedSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = () => {
    if (!sliderRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10); // when there is enough space to scroll to the right
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", checkArrows);
    window.addEventListener("resize", checkArrows);

    checkArrows();

    return () => {
      slider.removeEventListener("scroll", checkArrows);
      window.removeEventListener("resize", checkArrows);
    };
  }, []);

  const scrollHandler = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const currentScroll = sliderRef.current.scrollLeft;
    // left: 500-300 (move 300 units to left), right: 500+300 (move 300 units to right)
    const newScrollLeft =
      direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount;

    sliderRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("w-full", props.className)} {...props}>
      {props.title && <h2 className="text-primary mb-4 text-2xl font-bold">{props.title}</h2>}

      <div className="group relative">
        <div
          ref={sliderRef}
          className="scrollbar-hide flex overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            gap: `${gap}px`,
          }}
        >
          {props.children}
        </div>

        {showLeftArrow && (
          <button
            onClick={() => scrollHandler("left")}
            className="absolute top-1/2 left-0 z-10 -translate-x-2 -translate-y-1/2 scale-0 rounded-full bg-black/50 p-2 text-white transition-transform group-hover:translate-x-2 group-hover:scale-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={() => scrollHandler("right")}
            className="absolute top-1/2 right-0 z-10 translate-x-2 -translate-y-1/2 scale-0 rounded-full bg-black/50 p-2 text-white transition-transform group-hover:-translate-x-2 group-hover:scale-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}

AnimatedSlider.displayName = "AnimatedSlider";

type AnimatedCardProps = {
  className?: string;
  children: React.ReactNode;
  defaultWidth?: string;
  expandedWidth?: string;
  height?: string;
  transitionDuration?: string;
  transitionEasing?:
    | "linear"
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | `cubic-bezier(${number}, ${number}, ${number}, ${number})`;
} & React.ComponentProps<"div">;

function AnimatedCard({
  children,
  className,
  defaultWidth = "180px",
  expandedWidth = "320px",
  height = "270px",
  transitionDuration = "0.4s",
  transitionEasing = "ease",
  ...props
}: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatedCardContext.Provider value={{ isHovered, setIsHovered }}>
      <div
        className={cn("relative shrink-0 cursor-pointer", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: isHovered ? expandedWidth : defaultWidth,
          height,
          transition: `width ${transitionDuration} ${transitionEasing}`,
        }}
        {...props}
      >
        {children}
      </div>
    </AnimatedCardContext.Provider>
  );
}

AnimatedCard.displayName = "AnimatedCard";

type CardContentProps = {
  className?: string;
  children: React.ReactNode;
  defaultAspectRatio?: string;
  expandedAspectRatio?: string;
} & React.ComponentProps<"div">;

function CardContent({
  className,
  children,
  defaultAspectRatio = "aspect-[2/3]",
  expandedAspectRatio = "aspect-video",
  ...props
}: CardContentProps) {
  const { isHovered } = useAnimatedCard();

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-lg transition-all duration-[400] ease-in",
        isHovered ? expandedAspectRatio : defaultAspectRatio,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

CardContent.displayName = "CardContent";

type OnHoverProps = {
  className?: string;
  children: React.ReactNode;
  fadeInDuration?: string;
} & React.ComponentProps<"div">;

function OnHover({ className, children, fadeInDuration = "0.3s", ...props }: OnHoverProps) {
  const { isHovered } = useAnimatedCard();

  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-all duration-300 ease-in-out",
        isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        className
      )}
      style={{
        animation: `fadeIn ${fadeInDuration} ease-in-out`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

OnHover.displayName = "OnHover";

type DefaultViewProps = {
  className?: string;
  children: React.ReactNode;
} & React.ComponentProps<"div">;

function DefaultView({ className, children, ...props }: DefaultViewProps) {
  const { isHovered } = useAnimatedCard();

  return (
    <div
      className={cn(
        "fade-in-20 absolute right-0 bottom-0 left-0 truncate p-2 text-sm font-medium text-white transition-all duration-200 ease-in-out",
        !isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

DefaultView.displayName = "DefaultView";

export { AnimatedSlider, AnimatedCard, CardContent, OnHover, DefaultView };
