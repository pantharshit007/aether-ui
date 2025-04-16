import React, { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
}

interface BlurEffect {
  enabled: boolean;
  intensity: number;
}

interface FadeEffect {
  enabled: boolean;
  startOpacity: number;
  endOpacity: number;
}

interface CustomImage {
  src: string;
  width: number;
  height: number;
}

interface MouseTrailerProps {
  trailLength?: number;
  speed?: number;
  blur?: BlurEffect;
  fade?: FadeEffect;
  customImage?: CustomImage;
  color?: string;
  size?: number;
}

export const BlurTrailer: React.FC<MouseTrailerProps> = ({
  trailLength = 20,
  speed = 3,
  blur = { enabled: false, intensity: 5 },
  fade = { enabled: false, startOpacity: 1, endOpacity: 0.1 },
  customImage,
  color = "#3B82F6",
  size = 12,
}) => {
  const [mousePos, setMousePos] = useState<TrailPoint>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      // Clear trail on resize to prevent artifacts
      setTrail([]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const updateTrail = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;

      if (deltaTime >= 1000 / 60 / speed) {
        // 60 FPS adjusted by speed
        setTrail((prevTrail) => {
          const newTrail = [...prevTrail, mousePos];
          if (newTrail.length > trailLength) {
            return newTrail.slice(-trailLength);
          }
          return newTrail;
        });
        lastTimeRef.current = timestamp;
      }

      animationFrameRef.current = requestAnimationFrame(updateTrail);
    };

    animationFrameRef.current = requestAnimationFrame(updateTrail);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, trailLength, speed]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {trail.map((point, index) => {
        const progress = index / trail.length;
        const opacity = fade.enabled
          ? fade.startOpacity - (fade.startOpacity - fade.endOpacity) * progress
          : 1;

        const blurAmount = blur.enabled ? Math.floor(blur.intensity * (1 - progress)) : 0;

        const style: React.CSSProperties = {
          position: "absolute",
          left: point.x,
          top: point.y,
          transform: "translate(-50%, -50%)",
          opacity,
          filter: blur.enabled ? `blur(${blurAmount}px)` : undefined,
          transition: "opacity 0.2s ease-out",
        };

        if (customImage) {
          return (
            <img
              key={index}
              src={customImage.src}
              alt=""
              style={{
                ...style,
                width: customImage.width,
                height: customImage.height,
              }}
              className="select-none"
            />
          );
        }

        return (
          <div
            key={index}
            style={{
              ...style,
              backgroundColor: color,
              width: size,
              height: size,
            }}
            className="rounded-full"
          />
        );
      })}
    </div>
  );
};
