import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

export interface TrailPoint {
  x: number;
  y: number;
}

export interface BlurEffect {
  enabled: boolean;
  intensity: number;
}

export interface FadeEffect {
  enabled: boolean;
  startOpacity: number;
  endOpacity: number;
}

export interface CustomImage {
  src: string;
  width: number;
  height?: number;
}

export interface SpringPreset {
  stiffness: number;
  damping: number;
  mass: number;
}

export interface MouseTrailerProps {
  trailLength?: number;
  speed?: number;
  blur?: BlurEffect;
  fade?: FadeEffect;
  customImage?: CustomImage;
  color?: string;
  size?: number;
  className?: string;
  springPreset?:
    | "very-tight"
    | "controlled-snap"
    | "smooth-follow"
    | "strict-controlled"
    | SpringPreset;
}

export const MouseTrailer: React.FC<MouseTrailerProps> = ({
  trailLength = 20,
  speed = 3,
  blur = { enabled: false, intensity: 5 },
  fade = { enabled: false, startOpacity: 1, endOpacity: 0.1 },
  customImage,
  color = "#3B82F6",
  size = 12,
  springPreset = "strict-controlled",
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const mousePosRef = useRef<TrailPoint>({ x: 0, y: 0 });
  const imagePosRef = useRef<TrailPoint>({ x: 0, y: 0 });
  const velocityRef = useRef<TrailPoint>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const presets: Record<string, SpringPreset> = {
    "very-tight": { stiffness: 0.3, damping: 2, mass: 0.2 },
    "controlled-snap": { stiffness: 0.2, damping: 0.8, mass: 0.7 },
    "smooth-follow": { stiffness: 0.15, damping: 0.7, mass: 1.0 },
    "strict-controlled": { stiffness: 0.15, damping: 5, mass: 0.5 },
  };

  const { stiffness, damping, mass } =
    typeof springPreset === "string" ? presets[springPreset] : springPreset;

  useEffect(() => {
    if (customImage) {
      const img = new Image();
      img.src = customImage.src;
      img.onload = () => {
        imageRef.current = img;
      };
    } else {
      imageRef.current = null;
    }
  }, [customImage?.src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      trailRef.current = [];
      imagePosRef.current = { x: 0, y: 0 };
      velocityRef.current = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let lastTime = 0;
    const updateInterval = 1000 / (60 * speed);

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (imageRef.current && customImage) {
        // Spring-based motion for single image
        const dx = mousePosRef.current.x - imagePosRef.current.x;
        const dy = mousePosRef.current.y - imagePosRef.current.y;

        // Calculate acceleration based on spring force
        const ax = (stiffness * dx - damping * velocityRef.current.x) / mass;
        const ay = (stiffness * dy - damping * velocityRef.current.y) / mass;

        // Update velocity and position
        velocityRef.current.x += ax / 60; // ~(60 FPS)
        velocityRef.current.y += ay / 60;
        imagePosRef.current.x += velocityRef.current.x;
        imagePosRef.current.y += velocityRef.current.y;

        // image at top-left corner of mouse position
        ctx.drawImage(
          imageRef.current,
          imagePosRef.current.x,
          imagePosRef.current.y,
          customImage.width,
          customImage.height || customImage.width
        );
      } else {
        if (timestamp - lastTime >= updateInterval) {
          trailRef.current.push({ ...mousePosRef.current });
          if (trailRef.current.length > trailLength) {
            trailRef.current.shift();
          }
          lastTime = timestamp;
        }

        trailRef.current.forEach((point, index) => {
          const progress = 1 - index / (trailRef.current.length - 1);
          const opacity = fade.enabled
            ? fade.startOpacity + (fade.endOpacity - fade.startOpacity) * progress
            : 1;
          const blurAmount = blur.enabled ? blur.intensity * (1 - progress) : 0;

          ctx.save();
          ctx.globalAlpha = opacity;
          if (blur.enabled) ctx.filter = `blur(${blurAmount}px)`;

          ctx.beginPath();
          ctx.arc(point.x, point.y, size / 2, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();

          ctx.restore();
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [trailLength, speed, blur, fade, customImage, color, size, stiffness, damping, mass]);

  return (
    <canvas ref={canvasRef} className={cn("pointer-events-none fixed inset-0 z-50", className)} />
  );
};

MouseTrailer.displayName = "MouseTrailer";

// DevelopedBy: AetherUI
