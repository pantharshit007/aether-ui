"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

import ThemeToggle from "../web/theme-toggle";
import Logo from "../web/logo";
import { Button } from "../ui/button";
import GithubIcon from "../web/icon/github";
import { siteConfig } from "@/config/site";

function LandingHeader() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 container mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut", type: "spring", damping: 10 }}
        className="bg-secondary/15 border-primary/10 mx-auto mt-6 flex w-[95%] justify-between rounded-2xl border px-6 py-3 shadow-lg shadow-neutral-600/5 backdrop-blur-lg md:w-[80%] lg:w-[70%]"
      >
        <Link href={"/"} className="">
          <Logo defaultTheme="dark" />
        </Link>
        <div className="flex items-center gap-x-4">
          <Button variant={"outline2"} size={"icon"} className="h-9 w-9 cursor-pointer px-0">
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <GithubIcon className="!size-6" fill="currentColor" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>

          <ThemeToggle variant="outline2" />
        </div>
      </motion.div>
    </nav>
  );
}

export default LandingHeader;
