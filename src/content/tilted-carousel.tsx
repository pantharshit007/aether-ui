"use client";
import { cn } from "@/lib/utils";

interface TiltedCarouselProps {
  images: string[];
  className?: string;
  speed?: number;
  rows?: number;
}

export function TiltedCarousel({ images, className, speed = 30, rows = 4 }: TiltedCarouselProps) {
  const duplicatedImages = [...images, ...images, ...images, ...images, ...images, ...images];

  const imagesPerRow = Math.ceil(duplicatedImages.length / rows);
  const imageRows = Array.from({ length: rows }, (_, rowIndex) =>
    duplicatedImages.slice(rowIndex * imagesPerRow, (rowIndex + 1) * imagesPerRow)
  );

  return (
    <div
      className={cn("relative h-screen w-full overflow-hidden bg-black", className)}
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
            className="flex shrink-0 gap-4"
            style={{
              animation: `scroll-bidirectional ${speed}s ease-in-out infinite alternate`,
              animationDelay: `${rowIndex * -3}s`,
              transform: rowIndex === 0 || rowIndex === 1 ? "translateX(-50%)" : "translateX(0)",
            }}
          >
            {rowImages.map((image, imageIndex) => (
              <div
                key={`${rowIndex}-${imageIndex}`}
                className="relative h-64 w-48 shrink-0 overflow-hidden rounded-2xl shadow-2xl"
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Carousel image ${imageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-bidirectional {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
