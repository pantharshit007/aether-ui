import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "metal" | "ball";
  size?: "default" | "sm" | "lg" | "icon";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  variant = "default",
  size = "default",
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:h-4 [&_svg:not([class*='size-'])]:w-4 cursor-pointer";

  const variantClasses = {
    default:
      "bg-gray-900 text-white hover:bg-gray-700 focus-visible:outline-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:outline-gray-50",
    destructive:
      "bg-red-500 text-white hover:bg-red-700 focus-visible:outline-red-600 dark:bg-red-700 dark:hover:bg-red-800 dark:focus-visible:outline-red-700",
    metal: {
      outer:
        "relative inline-flex transform-gpu rounded-full bg-gradient-to-b from-[#000] to-[#A0A0A0] p-[1.25px] will-change-transform",
      inner:
        "absolute inset-[1px] transform-gpu rounded-full bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5] will-change-transform",
      button:
        "relative z-10 m-[2.5px] inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-[#B9B9B9] to-[#969696] px-6 pt-4 pb-5 text-2xl leading-none font-bold text-white will-change-transform outline-none [text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]",
    },
    ball: {
      button:
        "group relative overflow-hidden rounded-lg bg-black px-10 py-5 text-white shadow-lg transition-all duration-300 hover:shadow-2xl",
      circle:
        "from-orange-red pointer-events-none absolute aspect-square h-full rounded-full bg-gradient-to-r from-red-900 via-blue-900 to-violet-900 blur-lg transition-all duration-75 ease-out",
    },
  };

  const sizeClasses = {
    default: "h-9 px-4 py-2 has-[>svg]:px-3",
    sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
    icon: "size-9",
  };
  //Adding algorithm for metal button

  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [ball, setBall] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;

    //function to make ball follow cursor under button
    const follow = () => {
      setBall((prev) => {
        const dx = cursor.x - prev.x;
        const dy = cursor.y - prev.y;
        return {
          x: prev.x + dx * 0.009,
          y: prev.y + dy * 0.009,
        };
      });
      animationFrameId = requestAnimationFrame(follow);
    };

    if (hovering) follow();

    return () => cancelAnimationFrame(animationFrameId);
  }, [cursor, hovering]);

  //making sure device is not touchscreen for meata

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  if (variant === "metal") {
    const buttonText = children || "Button";

    const handleInternalMouseDown = () => {
      setIsPressed(true);
    };
    const handleInternalMouseUp = () => {
      setIsPressed(false);
    };
    const handleInternalMouseLeave = () => {
      setIsPressed(false);
      setIsHovered(false);
    };
    const handleInternalMouseEnter = () => {
      if (!isTouchDevice) {
        setIsHovered(true);
      }
    };
    const handleInternalTouchStart = () => {
      setIsPressed(true);
    };
    const handleInternalTouchEnd = () => {
      setIsPressed(false);
    };
    const handleInternalTouchCancel = () => {
      setIsPressed(false);
    };

    // function to dynamically handle animation of hover , click and pressed
    const dynamicBtnStyle = (isPressed: boolean, isHovered: boolean, isTouchDevice: boolean) => {
      const transitionStyle = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";

      return {
        wrapperStyle: {
          transform: isPressed ? "translateY(2.5px) scale(0.99)" : "translateY(0) scale(1)",
          boxShadow: isPressed
            ? "0 1px 2px rgba(0, 0, 0, 0.15)"
            : isHovered && !isTouchDevice
              ? "0 4px 12px rgba(0, 0, 0, 0.12)"
              : "0 3px 8px rgba(0, 0, 0, 0.08)",
          transition: transitionStyle,
          transformOrigin: "center center",
        },
        innerStyle: {
          transition: transitionStyle,
          transformOrigin: "center center",
          filter: isHovered && !isPressed && !isTouchDevice ? "brightness(1.05)" : "none",
        },
        buttonStyle: {
          transform: isPressed ? "scale(0.97)" : "scale(1)",
          transition: transitionStyle,
          transformOrigin: "center center",
          filter: isHovered && !isPressed && !isTouchDevice ? "brightness(1.02)" : "none",
        },
      };
    };

    // this variable will contain current  effect which according to user interaction
    const dynamicBtnStyleState = dynamicBtnStyle(isPressed, isHovered, isTouchDevice);

    // function which return a glossy effect
    const ShineEffect = ({ isPressed }: { isPressed: boolean }) => {
      return (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-full transition-opacity duration-300",
            isPressed ? "opacity-20" : "opacity-0"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
        </div>
      );
    };

    return (
      <div className={variantClasses.metal.outer} style={dynamicBtnStyleState.wrapperStyle}>
        <div className={variantClasses.metal.inner} style={dynamicBtnStyleState.innerStyle}></div>
        <button
          className={cn(variantClasses.metal.button, className)}
          style={dynamicBtnStyleState.buttonStyle}
          {...props}
          onMouseDown={handleInternalMouseDown}
          onMouseUp={handleInternalMouseUp}
          onMouseLeave={handleInternalMouseLeave}
          onMouseEnter={handleInternalMouseEnter}
          onTouchStart={handleInternalTouchStart}
          onTouchEnd={handleInternalTouchEnd}
          onTouchCancel={handleInternalTouchCancel}
        >
          <ShineEffect isPressed={isPressed} />
          {buttonText}
          {isHovered && !isPressed && !isTouchDevice && (
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/5" />
          )}
        </button>
      </div>
    );
  }

  //for ball button
  if (variant === "ball") {
    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = btnRef.current?.getBoundingClientRect();

      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursor({ x, y });
    };

    const handleMouseEnter = () => setHovering(true);
    const handleMouseLeave = () => setHovering(false);

    return (
      <button
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(variantClasses.ball.button, className)}
      >
        {hovering && (
          <div
            className={cn(variantClasses.ball.circle)}
            style={{
              left: `${ball.x - 24}px`,
              top: `${ball.y - 24}px`,
            }}
          />
        )}
        {children || "Hover Me"}
      </button>
    );
  }

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button, type ButtonProps };
Button.displayName = "Button";

// DevelopedBy: AetherUI
