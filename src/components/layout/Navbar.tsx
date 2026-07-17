"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  id: string;
  label: string;
  url: string;
  isButton?: boolean;
}

const NAVIGATION_LINKS: NavItem[] = [
  { id: "1", label: "Product", url: "#product" },
  { id: "2", label: "Journal", url: "/journal" },
  { id: "3", label: "About", url: "/about" },
  { id: "4", label: "Careers", url: "/carrers" },
  { id: "5", label: "Get started →", url: "#get-started", isButton: true },
];

type NavbarBackground = "blue" | "white" | "transparent" | "adaptive";

/** One class string per background option — add more here as needed. */
const BACKGROUND_CLASSNAMES: Record<Exclude<NavbarBackground, "adaptive">, string> = {
  blue: "bg-gradient-to-b from-sky-200 to-sky-100",
  white: "bg-white",
  // Fully transparent — no fill, no border. Whatever background color/image
  // the page itself has shows straight through; only the blur is added.
  transparent: "bg-transparent backdrop-blur-md",
};

interface NavbarProps {
  /**
   * Background style for this page's navbar. Defaults to "white".
   * "adaptive" starts matching the hero (solid blue gradient) and
   * switches to solid white once the page is scrolled — use this on
   * pages whose hero sits directly under the nav with the same blue
   * gradient background.
   */
  background?: NavbarBackground;
}

export default function Navbar({ background = "white" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const logoText: string = "Aetherfield";

  // Only wire up the scroll listener when it's actually needed — no point
  // paying for it on pages using a fixed "blue"/"white"/"transparent" look.
  useEffect(() => {
    if (background !== "adaptive") return;

    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // set correct state on mount if already scrolled (e.g. anchor link, refresh)
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [background]);

  const backgroundClassName =
    background === "adaptive"
      ? scrolled
        ? BACKGROUND_CLASSNAMES.white
        : BACKGROUND_CLASSNAMES.blue
      : BACKGROUND_CLASSNAMES[background];

  return (
    <nav
      className={`sticky top-0 z-50 w-full text-[#0F172A] font-sans transition-colors duration-300 ${backgroundClassName} ${
        background === "adaptive" && scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-1 py-2 md:py-5 h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/logo.png"
            alt={`${logoText} Logo`}
            width={80}
            height={40}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-semibold">
          {NAVIGATION_LINKS.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className={`hover:opacity-75 transition-all ${
                item.isButton
                  ? "font-extrabold text-[#0F172A] border-b-2 border-transparent hover:border-[#0F172A]"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger / Plus Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none hover:opacity-75 active:scale-95 transition-all"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            {/* Horizontal stroke of the + — rotates to a diagonal of the × */}
            <path strokeLinecap="round" d="M4 12h16" />
            {/* Vertical stroke of the + — rotates to the other diagonal of the × */}
            <path strokeLinecap="round" d="M12 4v16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel — grid-rows trick sizes to content, so it can never clip */}
      <div
        className={`md:hidden grid transition-[grid-template-rows] duration-300 ease-in-out border-t border-black/5 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm font-semibold bg-black/5">
            {NAVIGATION_LINKS.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={() => setIsOpen(false)}
                className={`hover:underline py-1 ${
                  item.isButton
                    ? "text-[#0F172A] font-extrabold border-t pt-3 mt-1 border-black/5"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}