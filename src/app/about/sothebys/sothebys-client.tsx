"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui";

/* ─── Data ─── */

const globalStats = [
  { value: "1,100+", label: "Offices Worldwide" },
  { value: "83", label: "Countries & Territories" },
  { value: "26,000+", label: "Sales Associates" },
  { value: "$204B+", label: "Annual Sales Volume" },
];

const marketingPillars = [
  {
    title: "Unrivaled Brand Heritage",
    description:
      "The Sotheby's name carries over 280 years of prestige. In luxury real estate, brand association matters - it opens doors and commands attention in ways that no amount of marketing spend can replicate.",
  },
  {
    title: "Curated Property Films",
    description:
      "Every significant listing receives a cinematic property film produced to the standard of a luxury brand campaign - not a slideshow with music, but genuine storytelling that captures the soul of a home.",
  },
  {
    title: "Global Digital Reach",
    description:
      "SIR properties are syndicated across 120+ global real estate portals, from sothebysrealty.com to curated placements in the Financial Times, Wall Street Journal, and Mansion Global.",
  },
  {
    title: "Auction House Synergy",
    description:
      "Access to Sotheby's auction house client database - a curated network of ultra-high-net-worth collectors and investors whose passion for exceptional things extends to exceptional properties.",
  },
];

/* ─── Component ─── */

export function SothebysPageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 80]);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-midnight">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="/images/sothebys-hero.svg"
            alt="Sotheby's International Realty"
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/40" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            {/* SIR Logo Placeholder */}
            <div className="w-20 h-20 mx-auto mb-6 border border-champagne/40 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 text-champagne">
                <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 14h32" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 14v18" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12px] font-medium uppercase tracking-[0.25em] text-champagne mb-4"
          >
            The World&apos;s Premier Luxury Brand
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-6xl lg:text-[72px] text-ivory leading-[1.1] max-w-4xl"
          >
            Sotheby&apos;s International Realty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg md:text-xl text-stone-400 max-w-xl"
          >
            Where art, legacy, and real estate converge
          </motion.p>
        </div>
      </section>

      {/* ── History & Heritage ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="lg:col-span-6">
              <AnimateIn direction="left">
                <div className="relative aspect-[3/4] rounded-[6px] overflow-hidden">
                  <Image
                    src="/images/sothebys-auction.svg"
                    alt="Sotheby's Auction House - A Legacy of Excellence"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent" />
                </div>
                {/* Timeline accent */}
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-champagne/30" />
                  <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne whitespace-nowrap">
                    Est. 1744 &middot; London
                  </p>
                  <div className="h-px flex-1 bg-champagne/30" />
                </div>
              </AnimateIn>
            </div>

            {/* Text */}
            <div className="lg:col-span-6">
              <AnimateIn direction="right">
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                  History & Heritage
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-midnight mb-8">
                  Over 280 Years of<br />Defining Value
                </h2>
                <div className="space-y-6 text-stone-500 text-[17px] leading-relaxed">
                  <p>
                    Founded in London in 1744, Sotheby&apos;s is the world&apos;s oldest and most
                    prestigious auction house &mdash; a name synonymous with exceptional taste,
                    rarity, and the pursuit of the extraordinary. For nearly three centuries,
                    the Sotheby&apos;s brand has set the standard for how the world&apos;s most
                    valuable objects are presented, marketed, and transacted.
                  </p>
                  <p>
                    The Sotheby&apos;s International Realty brand was founded in 1976 to serve
                    the unique needs of the auction house&apos;s distinguished clientele in the
                    realm of real estate. Today, the brand extends across 83 countries and
                    territories, with more than 1,100 offices staffed by 26,000 sales
                    associates &mdash; each one chosen for their expertise, local market
                    knowledge, and commitment to a level of service that mirrors the
                    auction house tradition.
                  </p>
                  <p>
                    This is not a franchise built on volume. It is a curated network built
                    on excellence. And that distinction matters.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Network ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="Global Network"
              title="A Truly Worldwide Presence"
              description="The Sotheby's International Realty network spans every major market on earth, connecting buyers and sellers across borders with seamless precision."
              align="center"
              dark
            />
          </AnimateIn>

          {/* Stats row */}
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {globalStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="font-display text-4xl md:text-5xl lg:text-6xl text-champagne">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-stone-400">
                    {stat.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {/* World map placeholder */}
          <AnimateIn>
            <div className="relative aspect-[21/9] rounded-[6px] overflow-hidden bg-stone-800/50 border border-stone-700/40">
              <Image
                src="/images/sothebys-global-map.svg"
                alt="Sotheby's International Realty Global Network Map"
                fill
                className="object-cover opacity-60"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-stone-500">
                  Global Network Visualization
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Marketing Excellence ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="Marketing Excellence"
              title="How SIR Markets Differently"
              description="In luxury real estate, how a property is presented is inseparable from its perceived value. Sotheby's International Realty understands this at a molecular level."
              align="center"
            />
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {marketingPillars.map((pillar, i) => (
              <StaggerItem key={pillar.title}>
                <div className="p-8 md:p-10 bg-stone-50 rounded-[6px] border border-stone-200/60 hover:border-champagne/30 transition-colors duration-300 h-full">
                  <div className="flex items-start gap-5">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center text-champagne font-display text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-midnight mb-3">
                        {pillar.title}
                      </h3>
                      <p className="text-stone-500 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Partnership with Nikki ── */}
      <section className="py-20 md:py-28 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div className="lg:col-span-7">
              <AnimateIn direction="left">
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                  Why It Matters
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-midnight mb-8">
                  What This Partnership<br />Means for You
                </h2>
                <div className="space-y-6 text-stone-500 text-[17px] leading-relaxed">
                  <p>
                    When Nikki Beauchamp chose Sotheby&apos;s International Realty, it was
                    a deliberate alignment of values &mdash; not a business convenience.
                    The SIR brand reflects the same principles that guide her practice:
                    discretion, expertise, global reach, and an unwavering commitment to
                    presenting every property and every client in the best possible light.
                  </p>
                  <p>
                    For sellers, this means your property benefits from the most powerful
                    luxury brand in real estate &mdash; a name that attracts qualified,
                    serious buyers from around the world. Your listing receives curated
                    exposure through SIR&apos;s proprietary marketing channels, global
                    syndication network, and the unmatched prestige of the Sotheby&apos;s name.
                  </p>
                  <p>
                    For buyers, this affiliation means access to exclusive inventory,
                    off-market opportunities, and a network of trusted professionals in
                    every major city on earth. When you work with Nikki through SIR,
                    you&apos;re not just working with one agent &mdash; you&apos;re connected
                    to 26,000 colleagues who share the same standard of service.
                  </p>
                </div>

                <blockquote className="relative pl-6 border-l-2 border-champagne/50 mt-10">
                  <p className="font-accent text-2xl text-midnight leading-snug italic">
                    &ldquo;The brand opens doors. My expertise ensures what&apos;s on the
                    other side is exactly right for you.&rdquo;
                  </p>
                  <cite className="mt-3 block text-[12px] font-medium uppercase tracking-[0.15em] text-stone-400 not-italic">
                    Nicole Beauchamp
                  </cite>
                </blockquote>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-champagne text-midnight text-[13px] font-medium uppercase tracking-[0.1em] rounded-[4px] hover:bg-champagne-light transition-colors duration-200"
                  >
                    Work with Nikki
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center justify-center px-8 py-4 border border-champagne text-champagne text-[13px] font-medium uppercase tracking-[0.1em] rounded-[4px] hover:bg-champagne/10 transition-colors duration-200"
                  >
                    About Nicole
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-5">
              <AnimateIn direction="right">
                <div className="relative aspect-[3/4] rounded-[6px] overflow-hidden">
                  <Image
                    src="/images/nikki-sothebys.svg"
                    alt="Nicole Beauchamp - Sotheby's International Realty"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Brand badge */}
                <div className="mt-6 p-6 bg-ivory rounded-[6px] border border-stone-200/60 text-center">
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 mb-2">
                    Associate Broker
                  </p>
                  <p className="font-display text-xl text-midnight">
                    Sotheby&apos;s International Realty
                  </p>
                  <div className="mt-3 h-px w-12 mx-auto bg-champagne/40" />
                  <p className="mt-3 text-[12px] text-stone-400">
                    New York City Brokerage
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
