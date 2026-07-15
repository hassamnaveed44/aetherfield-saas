"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  id: string;
  label: string;
  url: string;
  isButton?: boolean;
}

const NAVIGATION_LINKS: NavItem[] = [
  { id: "1", label: "Webinar", url: "#" },
  { id: "2", label: "About us", url: "#" },
  { id: "3", label: "News", url: "#" },
  { id: "4", label: "Careers", url: "#" },
  { id: "5", label: "Get Started →", url: "#", isButton: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoText: string = "ActionField";

  return (
    <nav className="w-full h-20 bg-gradient-to-b from-sky-200 to-sky-100 text-[#0F172A] font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-1 py-2 md:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/logo.png"
            alt="ActionField Logo"
            width={80} // Adjust width as needed
            height={40} // Adjust height as needed
            priority // Ensures the logo loads immediately
            className="h-8 w-auto object-contain" // Tailwind classes for sizing
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

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 focus:outline-none hover:opacity-75 active:scale-95 transition-all flex items-center justify-center"
          aria-label="Toggle navigation menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-black/5 ${
          isOpen
            ? "max-h-[300px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
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
    </nav>
  );
}
