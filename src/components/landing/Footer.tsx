import Link from "next/link";
import GithubIcon from "../web/icon/github";
import Logo from "../web/logo";
import XIcon from "../web/icon/twitter";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer
      className="relative -mt-10 w-full rounded-t-[2.5rem] border-t border-cyan-700 bg-zinc-950"
      style={{ zIndex: 10 }}
    >
      <div className="container mx-auto flex flex-col gap-8 px-5 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-2">
          <Logo defaultTheme="dark" />
          <p className="font-mono text-sm text-zinc-100">Animate Your Web Presence</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Connect With Us</h3>
          <div className="flex space-x-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-white"
            >
              <GithubIcon className="h-5 w-5" fill="white" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-white"
            >
              <XIcon className="h-5 w-5" fill="white" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-cyan-700 py-6">
        <p className="text-muted-foreground text-center text-sm">
          © {new Date().getFullYear()} Aether UI, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
