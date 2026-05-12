"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "01. Briefing" },
    { href: "/schedule", label: "02. Timeline" },
    { href: "/team", label: "03. Operators" },
    { href: "/sponsors", label: "04. Logistics" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-md border-b border-structural w-full">
        <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <div className="font-display font-bold tracking-tight leading-none text-ink text-sm">
              HACK DAYS<br />
              <span className="text-[10px] text-neutral font-mono">
                by Atria Summer of Code
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs font-medium text-neutral">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-all px-3 py-1",
                  pathname === link.href
                    ? "bg-ink text-bg font-bold"
                    : "hover:text-ink hover:bg-neutral/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://events.mlh.io/events/13939-hack-days-by-atria-summer-of-code"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden sm:flex px-4 py-1.5 bg-accent text-white font-mono text-xs font-bold",
                "hover:-translate-y-0.5 shadow-sm transition-all items-center gap-2"
              )}
            >
              REGISTER
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-neutral hover:text-ink transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[100] bg-ink transition-all duration-500 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0 opacity-100 visible" : "translate-x-full opacity-0 invisible"
        )}
      >
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 bg-white opacity-[0.03] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col h-full p-6 pt-24">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-6 p-2 text-bg/50 hover:text-bg transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-3xl font-display font-bold uppercase tracking-tighter transition-all",
                  pathname === link.href ? "text-accent" : "text-bg hover:text-accent"
                )}
              >
                {link.label.split(". ")[1]}
                <span className="block text-[10px] font-mono text-bg/30 mt-1">
                  {link.label.split(". ")[0]}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-12 border-t border-white/10">
            <a
              href="https://events.mlh.io/events/13939-hack-days-by-atria-summer-of-code"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-accent text-white font-mono text-sm font-bold shadow-accent"
            >
              REGISTER FOR HACK DAYS
            </a>
            <div className="mt-8 flex justify-between items-center font-mono text-[10px] text-bg/40">
              <span>HACK DAYS 2026</span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                ENCRYPTED SESSION
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
