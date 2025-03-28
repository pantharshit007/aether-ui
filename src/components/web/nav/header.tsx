import React from "react";
import Link from "next/link";

function Header() {
  return (
    <nav className="bg-zinc-900 text-slate-200 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[3.5rem] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="font-instrument-serif text-shadow-glow text-2xl font-medium tracking-widest"
            >
              Aether <span className="text-gradient">UI</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/showcase"
                className="rounded-md px-3 py-2 text-gray-300 hover:text-gray-600"
              >
                Showcase
              </Link>
              <Link
                href="/community"
                className="rounded-md px-3 py-2 text-gray-300 hover:text-gray-600"
              >
                Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
