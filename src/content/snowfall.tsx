"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SnowfallProps {
  /** Duration of snowfall in milliseconds (default: 8000) */
  duration?: number
  /** Duration of fade-out effect in milliseconds (default: 1500) */
  fadeOutDuration?: number
  /** Number of snowflakes (default: 200) */
  intensity?: number
  /** Color of snowflakes (default: white) */
  color?: string
  /** Size range for snowflakes in pixels (default: { min: 2, max: 6 }) */
  size?: { min: number; max: number }
  /** Speed range for snowflakes in seconds (default: { min: 8, max: 20 }) */
  speed?: { min: number; max: number }
  /** Height to which snow will fall (default: "25vh" - 25% of viewport height) */
  fallHeight?: string | number
  /** Additional class names */
  className?: string
}

/**
 * Snowfall component that creates a snow effect overlay
 *
 * @example
 * // Basic usage with default settings (25% screen height)
 * <Snowfall />
 *
 * @example
 * // Custom fall height (full screen)
 * <Snowfall fallHeight="100vh" />
 *
 * @example
 * // Custom settings
 * <Snowfall
 *   intensity={300}
 *   duration={10000}
 *   fadeOutDuration={2000}
 *   fallHeight="50vh"
 *   color="#f0f8ff"
 * />
 */
export function Snowfall({
  duration = 8000,
  fadeOutDuration = 1500,
  intensity = 200,
  color = "white",
  size = { min: 2, max: 6 },
  speed = { min: 8, max: 20 },
  fallHeight = "25vh", // Default to 25% of viewport height
  className,
}: SnowfallProps) {
  const [active, setActive] = useState(true)
  const [visible, setVisible] = useState(true)
  const [snowflakes, setSnowflakes] = useState<
    Array<{
      id: number
      size: number
      left: string
      delay: string
      duration: string
      opacity: number
      blur: string
      swayAmount: number
    }>
  >([])

  // Convert fallHeight to a string with units if it's a number
  const formattedFallHeight = typeof fallHeight === "number" ? `${fallHeight}px` : fallHeight

  useEffect(() => {
    // Generate snowflakes with varied properties
    const flakes = Array.from({ length: intensity }).map((_, i) => {
      const flakeSize = Math.random() * (size.max - size.min) + size.min
      const fallDuration = Math.random() * (speed.max - speed.min) + speed.min

      return {
        id: i,
        size: flakeSize,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${fallDuration}s`,
        opacity: Math.random() * 0.7 + 0.3, // Between 0.3 and 1
        blur: `${Math.random() > 0.8 ? "1px" : "0px"}`, // Some flakes are slightly blurred
        swayAmount: Math.random() * 15 - 7.5, // Between -7.5 and 7.5
      }
    })

    setSnowflakes(flakes)

    // Start fade-out after duration
    const fadeOutTimer = setTimeout(() => {
      setVisible(false)
    }, duration)

    // Completely unmount component after fade-out completes
    const unmountTimer = setTimeout(() => {
      setActive(false)
    }, duration + fadeOutDuration)

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(unmountTimer)
    }
  }, [duration, fadeOutDuration, intensity, size.max, size.min, speed.max, speed.min])

  if (!active) return null

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity", className)}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${fadeOutDuration}ms`,
      }}
      aria-hidden="true"
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full"
          style={{
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            backgroundColor: color,
            left: flake.left,
            top: "-10px",
            opacity: flake.opacity,
            filter: `blur(${flake.blur})`,
            boxShadow: `0 0 ${flake.size / 2}px ${color}`,
            animation: `
              snowfall-${formattedFallHeight.replace(/[^a-zA-Z0-9]/g, "")} ${flake.duration} linear ${flake.delay} infinite,
              snowfall-sway ${Number(flake.duration.replace("s", "")) * 0.5}s ease-in-out ${flake.delay} infinite alternate
            `,
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes snowfall-${formattedFallHeight.replace(/[^a-zA-Z0-9]/g, "")} {
          0% {
            top: -10px;
          }
          100% {
            top: calc(${formattedFallHeight} + 10px);
          }
        }
        
        @keyframes snowfall-sway {
          0% {
            transform: translateX(-7.5px);
          }
          100% {
            transform: translateX(7.5px);
          }
        }
      `}</style>
    </div>
  )
}
