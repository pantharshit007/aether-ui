"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

import GithubIcon from "@/components/web/icon/github";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const NODE_ENV = process.env.NODE_ENV;
const src =
  NODE_ENV === "development"
    ? "https://images.unsplash.com/photo-1574071216925-911b63088da0?q=80&w=2128&auto=format&fit=crop"
    : "https://res.cloudinary.com/di0av3xly/image/upload/v1744919181/Aether-ui/landing-img_gafup9.avif";

const variant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    delay: 0.25,
    type: "spring",
    damping: 10,
    stiffness: 100,
  },
};

function Hero() {
  return (
    <main className="relative h-screen w-full">
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-20 h-32 bg-gradient-to-b from-zinc-950/80 via-cyan-500 to-transparent [mask-image:radial-gradient(ellipse_at_top,rgba(0,0,0,1)_0%,rgba(0,0,0,0.8)_20%,rgba(0,0,0,0.1)_60%,transparent_100%)]" />

      <Image
        src={src}
        className="absolute inset-0 h-full w-full object-cover"
        fill
        alt="hero-bg-image"
        priority
        placeholder="empty"
      />

      <div className="relative flex h-full flex-col items-center justify-center">
        <motion.div
          variants={variant}
          initial="initial"
          animate="animate"
          transition={variant.transition}
          className="mx-auto -mt-12 flex w-fit max-w-screen-lg flex-col justify-center"
        >
          <div className="font-instrument-serif text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl xl:text-[5rem] xl:leading-[1]">
            <p className="landing-gradient">
              Build <span className="text-shadow-glow text-cyan-900">Fast.</span> Animate{" "}
              <span className="text-shadow-glow text-cyan-900">Bold.</span>
            </p>
            <p className="landing-gradient pb-1.5">
              Ship <span className="text-shadow-glow text-cyan-900">Beautiful.</span>
            </p>
          </div>

          <p className="font-bricolage-grotesque text-shadow-glow-2 mx-auto mt-2.5 text-center text-base tracking-tight text-zinc-200 md:w-[70%] md:text-lg">
            Breathe life into your website with beautifully designed animated components, a
            collection of stunning motion components designed to captivate.
          </p>
        </motion.div>

        <motion.div
          variants={variant}
          initial="initial"
          animate="animate"
          transition={variant.transition}
          className="mt-8 flex items-center justify-center gap-x-4"
        >
          <Button variant="marketing" className="group font-bri text-lg tracking-tight" asChild>
            <Link href="/docs">
              Get Started{" "}
              <ArrowRight className="text-shadow-glow-2 inline-block h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </Button>

          <Button
            variant="marketing2"
            className="group font-bri text-lg tracking-tight text-black"
            asChild
          >
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <GithubIcon className="h-5 w-5" />
              Github
              <ArrowRight className="text-shadow-glow-2 ml-1 inline-block h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}

export default Hero;
