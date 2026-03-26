"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui";

/* ─── Data ─── */

const awards = [
  { name: "RISMedia Real Estate Newsmaker", year: "2024" },
  { name: "Sotheby's International Realty Top Producer", year: "2023" },
  { name: "REBNY Henry Forster Award Nominee", year: "2022" },
  { name: "Inman Innovator Award Finalist", year: "2023" },
  { name: "NAR Tech Edge Ambassador", year: "2024" },
  { name: "Luxury Real Estate Board Member", year: "2023" },
];

const approachCards = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-champagne">
        <path d="M8 40V18L24 6l16 12v22H8z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 40V28h12v12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Market Intelligence",
    description:
      "Every recommendation is grounded in deep data analysis, proprietary market insights, and decades of pattern recognition — never gut feelings. You deserve clarity in complexity.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-champagne">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="24" cy="24" rx="8" ry="18" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="6" y1="32" x2="42" y2="32" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
    title: "Global Reach",
    description:
      "Through Sotheby's International Realty's unrivaled worldwide network spanning 83 countries and territories, your property reaches qualified buyers across every continent.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 text-champagne">
        <path d="M24 6l4 8h8l-6 5 2 9-8-5-8 5 2-9-6-5h8l4-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 38h24M16 42h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "White Glove Service",
    description:
      "From the first conversation to well beyond the closing, every detail is managed with precision — staging, legal coordination, timeline management, and post-close concierge.",
  },
];

/* ─── Component ─── */

export function AboutPageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImageY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroOverlayOpacity = useTransform(heroScroll, [0, 1], [0.5, 0.85]);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <motion.div style={{ y: heroImageY }} className="absolute inset-0">
          <Image
            src="/images/nikki-editorial-full.svg"
            alt="Nicole Beauchamp — Editorial Portrait"
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />
        </motion.div>
        <motion.div
          style={{ opacity: heroOverlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 md:pb-24 px-6">
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12px] font-medium uppercase tracking-[0.25em] text-champagne mb-4"
            >
              About Nicole
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[88px] text-ivory leading-[1.05] max-w-4xl"
            >
              Nikki Beauchamp
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-lg md:text-xl text-stone-300 max-w-xl"
            >
              Associate Broker &middot; Sotheby&apos;s International Realty
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Pull Quote — Left Column */}
            <div className="lg:col-span-4 flex flex-col justify-start lg:pt-8">
              <AnimateIn direction="left">
                <blockquote className="relative pl-6 border-l-2 border-champagne/50">
                  <p className="font-accent text-2xl md:text-3xl lg:text-[32px] text-midnight leading-snug italic">
                    &ldquo;I don&apos;t sell real estate. I advise people through one
                    of the most significant decisions of their lives.&rdquo;
                  </p>
                  <cite className="mt-4 block text-[12px] font-medium uppercase tracking-[0.15em] text-stone-400 not-italic">
                    Nicole Beauchamp
                  </cite>
                </blockquote>

                <div className="mt-12 hidden lg:block">
                  <blockquote className="relative pl-6 border-l-2 border-champagne/30">
                    <p className="font-accent text-xl text-stone-600 leading-snug italic">
                      &ldquo;Technology is a tool, not a replacement. The art is knowing
                      when data ends and intuition begins.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </AnimateIn>
            </div>

            {/* Narrative — Right Column */}
            <div className="lg:col-span-8">
              <AnimateIn direction="right">
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                  The Story
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-midnight mb-8">
                  Nearly Two Decades of<br />New York Excellence
                </h2>

                <div className="space-y-6 text-stone-500 text-[17px] leading-relaxed">
                  <p>
                    Nicole &ldquo;Nikki&rdquo; Beauchamp has spent nearly two decades navigating
                    the most intricate and high-stakes real estate transactions in New York City.
                    From the historic brownstones of the Upper West Side to the soaring glass towers
                    of Hudson Yards, she brings an advisory-first approach to every engagement &mdash;
                    one grounded in market intelligence, fiduciary responsibility, and a genuine
                    commitment to her clients&apos; long-term wellbeing.
                  </p>
                  <p>
                    Fluent in <span className="text-midnight font-medium">English, French, German, and Russian</span>,
                    Nikki has built a truly global practice. Her multilingual capabilities are not merely
                    conversational &mdash; they reflect a deep cultural fluency that allows her to connect
                    with international buyers, sellers, and investors in ways that transcend language barriers.
                    This global perspective, combined with Sotheby&apos;s International Realty&apos;s worldwide network,
                    gives her clients an extraordinary competitive advantage.
                  </p>
                  <p>
                    A recognized technology innovator in the industry, Nikki was one of the first agents
                    to embrace digital marketing, social media strategy, and data-driven pricing models.
                    She views technology not as a disruption but as a force multiplier &mdash; amplifying
                    the human insight that only comes from years of walking buildings, reading market
                    cycles, and understanding the psychology of high-net-worth transactions.
                  </p>
                  <p>
                    Her philosophy is simple but uncommon: <em>advisory over salesmanship</em>. Sometimes
                    the best advice is to wait. Sometimes it&apos;s to walk away. That willingness to
                    prioritize the client&apos;s interest over the commission check is what has earned
                    Nikki a loyal base of repeat clients and referrals across decades.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials & Awards ── */}
      <section className="py-16 md:py-20 bg-stone-100 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 mb-10">
          <AnimateIn>
            <SectionHeader
              label="Recognition"
              title="Credentials & Awards"
              description="Recognized by the industry's most respected organizations for excellence, innovation, and leadership."
              align="center"
            />
          </AnimateIn>
        </div>

        {/* Horizontal scroll row */}
        <AnimateIn>
          <div className="relative">
            <div className="flex gap-6 px-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
              {awards.map((award, i) => (
                <motion.div
                  key={award.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 snap-start w-[260px] md:w-[300px] bg-ivory rounded-[6px] p-8 flex flex-col items-center text-center border border-stone-200/60 hover:border-champagne/40 transition-colors"
                >
                  {/* Badge placeholder */}
                  <div className="w-16 h-16 rounded-full bg-stone-200/80 flex items-center justify-center mb-5">
                    <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7 text-champagne">
                      <path
                        d="M16 4l3 6.5h7l-5.5 4.5 2 7L16 18l-6.5 4 2-7L6 10.5h7L16 4z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="font-display text-lg text-midnight leading-tight">{award.name}</p>
                  <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.1em] text-stone-400">
                    {award.year}
                  </p>
                </motion.div>
              ))}
            </div>
            {/* Fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-stone-100 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-stone-100 to-transparent" />
          </div>
        </AnimateIn>
      </section>

      {/* ── The Approach ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="The Approach"
              title="How Nikki Works"
              description="Three pillars that define a fundamentally different real estate experience."
              align="center"
              dark
            />
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {approachCards.map((card) => (
              <StaggerItem key={card.title}>
                <div className="group p-8 md:p-10 rounded-[6px] border border-stone-700/50 hover:border-champagne/30 transition-colors duration-300 h-full">
                  <div className="mb-6">{card.icon}</div>
                  <h3 className="font-display text-2xl text-ivory mb-4">{card.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{card.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Hudson Teaser ── */}
      <section className="py-16 md:py-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <Link href="/about/hudson" className="group block">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-stone-100 rounded-[8px] overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto md:h-full min-h-[280px] overflow-hidden">
                  <Image
                    src="/images/hudson-teaser.svg"
                    alt="Hudson — Nicole Beauchamp's Golden Retriever"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    unoptimized
                  />
                </div>
                {/* Copy */}
                <div className="md:col-span-7 p-8 md:p-12">
                  <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-3">
                    The Unofficial Office Mascot
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-midnight mb-4">
                    Meet Hudson
                  </h3>
                  <p className="text-stone-500 text-[17px] leading-relaxed max-w-md">
                    Every great advisor needs a great wingman. Hudson, the golden retriever
                    who has charmed more clients than most agents ever will, is very much
                    part of the brand.
                  </p>
                  <span className="inline-flex items-center mt-6 text-[13px] font-medium uppercase tracking-[0.1em] text-champagne group-hover:text-champagne-light transition-colors">
                    Meet Hudson
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
