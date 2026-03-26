"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Properties",
    href: "/properties",
  },
  {
    label: "Sell",
    href: "/sell",
  },
  {
    label: "Neighborhoods",
    href: "/neighborhoods",
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Nikki", href: "/about" },
      { label: "Meet Hudson", href: "/about/hudson" },
      { label: "Sotheby's International Realty", href: "/about/sothebys" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Press", href: "/media/press" },
      { label: "Video", href: "/media/video" },
      { label: "Podcast", href: "/media/podcast" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-midnight/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <span className="font-display text-xl md:text-2xl text-ivory tracking-wide">
              Nicole Beauchamp
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-champagne mt-0.5">
              Sotheby&apos;s International Realty
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="relative px-3 py-2 text-[13px] font-medium uppercase tracking-[0.1em] text-ivory/80 hover:text-ivory transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-champagne scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-midnight/95 backdrop-blur-md border border-stone-800 min-w-[220px] py-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.08em] text-ivory/70 hover:text-champagne hover:bg-white/5 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Desktop CTA + Phone */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:2126064152"
              className="text-[12px] font-medium uppercase tracking-[0.08em] text-ivory/60 hover:text-champagne transition-colors"
            >
              212.606.4152
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-champagne text-midnight text-[11px] font-medium uppercase tracking-[0.1em] rounded-[4px] hover:bg-champagne-light transition-colors duration-200"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block w-6 h-[1.5px] bg-ivory transition-all duration-300",
                mobileOpen && "translate-y-[4.5px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[1.5px] bg-ivory transition-all duration-300",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block w-6 h-[1.5px] bg-ivory transition-all duration-300",
                mobileOpen && "-translate-y-[4.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-midnight flex flex-col items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl text-ivory hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <a
                  href="tel:2126064152"
                  className="text-[13px] font-medium uppercase tracking-[0.1em] text-champagne"
                >
                  212.606.4152
                </a>
                <a
                  href="mailto:nicole.beauchamp@sothebys.realty"
                  className="text-[13px] font-medium uppercase tracking-[0.1em] text-stone-400 hover:text-ivory transition-colors"
                >
                  nicole.beauchamp@sothebys.realty
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
