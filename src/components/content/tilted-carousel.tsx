"use client";
import { cn } from "@/lib/utils";

export interface TiltedCarouselProps {
  images: string[];
  className?: string;
  rowClassName?: string;
  imageClassName?: string;
  speed?: number;
  rows?: number;
  multiplier?: number;
  direction?: "left" | "right" | "alternate";
  pauseOnHover?: boolean;
  preset?: "default" | "compact" | "spacious" | "dramatic";
}

const PRESETS = {
  default: {
    className: "h-[800px]",
    rowClassName: "gap-4",
    imageClassName: "h-64 w-48 rounded-2xl shadow-2xl",
  },
  compact: {
    className: "h-[600px]",
    rowClassName: "gap-2",
    imageClassName: "h-48 w-36 rounded-xl shadow-lg",
  },
  spacious: {
    className: "h-[1000px]",
    rowClassName: "gap-6",
    imageClassName: "h-80 w-60 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
  },
  dramatic: {
    className: "h-[900px]",
    rowClassName: "gap-5",
    imageClassName: "h-72 w-52 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]",
  },
};

export function TiltedCarousel({
  images,
  className,
  rowClassName,
  imageClassName,
  speed = 30,
  rows = 4,
  multiplier = 6,
  direction = "alternate",
  pauseOnHover = false,
  preset = "default",
}: TiltedCarouselProps) {
  if (!images || !images.length) {
    return (
      <div className="flex h-[800px] w-full items-center justify-center bg-black">
        <p className="text-white/50">No images provided</p>{" "}
      </div>
    );
  }

  const presetConfig = PRESETS[preset];
  const finalClassName = cn(presetConfig.className, className);
  const finalRowClassName = cn(presetConfig.rowClassName, rowClassName);
  const finalImageClassName = cn(presetConfig.imageClassName, imageClassName);
  const duplicatedImages = Array.from({ length: multiplier }, () => images).flat();
  const imagesPerRow = Math.ceil(duplicatedImages.length / rows);
  const imageRows = Array.from({ length: rows }, (_, rowIndex) =>
    duplicatedImages.slice(rowIndex * imagesPerRow, (rowIndex + 1) * imagesPerRow)
  );

  const getAnimationName = () => {
    switch (direction) {
      case "left":
        return "scroll-left";
      case "right":
        return "scroll-right";
      case "alternate":
        return "scroll-bidirectional";
      default:
        return "scroll-bidirectional";
    }
  };

  const animationName = getAnimationName();

  return (
    <div
      className={cn("relative h-screen w-full overflow-hidden bg-black", finalClassName)}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="absolute inset-0 -top-60 flex flex-col gap-4 py-8"
        style={{
          transform: "rotateX(25deg) rotateY(-15deg) rotateZ(5deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {imageRows.map((rowImages, rowIndex) => (
          <div
            key={rowIndex}
            className={cn(
              "flex shrink-0",
              finalRowClassName,
              pauseOnHover && "hover:![animation-play-state:paused]"
            )}
            style={{
              animation:
                speed > 0
                  ? `${animationName} ${speed}s linear infinite ${direction === "alternate" ? "alternate" : ""}`
                  : "none",
              animationDelay: `${rowIndex * -3}s`,
            }}
          >
            {[...rowImages, ...rowImages].map((image, imageIndex) => (
              <div
                key={`${rowIndex}-${imageIndex}`}
                className={cn("relative shrink-0 overflow-hidden", finalImageClassName)}
                style={{ transform: "translateZ(20px)" }}
              >
                <img
                  src={image}
                  alt={`Carousel image ${imageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          div[class*="flex shrink-0"] {
            animation: none !important;
          }
        }

        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes scroll-bidirectional {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

// DevelopedBy: AetherUI
