"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui";

/* ─── Gallery Images ─── */

const galleryImages = [
  { src: "/images/hudson/hudson-01.svg", alt: "Hudson lounging at the office" },
  { src: "/images/hudson/hudson-02.svg", alt: "Hudson greeting clients" },
  { src: "/images/hudson/hudson-03.svg", alt: "Hudson at an open house" },
  { src: "/images/hudson/hudson-04.svg", alt: "Hudson in Central Park" },
  { src: "/images/hudson/hudson-05.svg", alt: "Hudson posing for the camera" },
  { src: "/images/hudson/hudson-06.svg", alt: "Hudson on a city walk" },
];

/* ─── Component ─── */

export function HudsonPageClient() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hudson/hudson-hero.svg"
            alt="Hudson - Golden Retriever and Brand Ambassador"
            fill
            className="object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/30 to-transparent" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 md:pb-24 px-6">
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12px] font-medium uppercase tracking-[0.25em] text-champagne mb-4"
            >
              Chief Happiness Officer
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[88px] text-ivory leading-[1.05]"
            >
              Meet Hudson
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-lg md:text-xl text-stone-300 max-w-lg"
            >
              Golden retriever. Client whisperer. Professional snack enthusiast.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Personality ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Image Column */}
            <div className="lg:col-span-5">
              <AnimateIn direction="left">
                <div className="relative aspect-[4/5] rounded-[6px] overflow-hidden">
                  <Image
                    src="/images/hudson/hudson-portrait.svg"
                    alt="Hudson portrait"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Fun stats card */}
                <div className="mt-6 bg-stone-100 rounded-[6px] p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-display text-2xl text-midnight">100%</p>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-stone-400 mt-1">Client Approval</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl text-midnight">&infin;</p>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-stone-400 mt-1">Treats Consumed</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl text-midnight">0</p>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-stone-400 mt-1">Bad Days</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7">
              <AnimateIn direction="right">
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                  The Unofficial Office Mascot
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-midnight mb-8">
                  Not Your Average<br />Brand Ambassador
                </h2>

                <div className="space-y-6 text-stone-500 text-[17px] leading-relaxed">
                  <p>
                    If you&apos;ve ever had a meeting with Nikki, there&apos;s a good chance you&apos;ve
                    also met Hudson &mdash; the golden retriever who has quietly become one of
                    New York real estate&apos;s most beloved personalities. With a wagging tail
                    that can disarm even the most hard-nosed negotiator, Hudson has been
                    unofficially welcoming clients since puppyhood.
                  </p>
                  <p>
                    Hudson takes his responsibilities seriously. He attends open houses
                    (where he excels at making small talk by the kitchen island), greets
                    visitors at the office (with enthusiasm that would put most doormen
                    to shame), and provides emotional support during the more stressful
                    moments of any transaction. He also has impeccable taste in
                    neighborhoods &mdash; though his opinions may be disproportionately
                    influenced by proximity to dog parks.
                  </p>

                  <blockquote className="relative pl-6 border-l-2 border-champagne/50 my-8">
                    <p className="font-accent text-2xl text-midnight leading-snug italic">
                      &ldquo;Hudson has closed more deals with a single tail wag than most
                      agents close in a quarter.&rdquo;
                    </p>
                    <cite className="mt-3 block text-[12px] font-medium uppercase tracking-[0.15em] text-stone-400 not-italic">
                      An anonymous (but accurate) client
                    </cite>
                  </blockquote>

                  <p>
                    Beyond his obvious charm, Hudson is a genuine part of the Beauchamp
                    brand &mdash; a reminder that real estate, at its best, is about warmth,
                    trust, and the feeling of home. He regularly appears on Nikki&apos;s social
                    media channels, where his following may or may not rival his human
                    counterpart&apos;s.
                  </p>
                  <p>
                    Whether he&apos;s photobombing listing photos, napping through contract
                    reviews, or simply being the most photogenic presence in any room,
                    Hudson reminds everyone that the best experiences in real estate come
                    with a little joy attached.
                  </p>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-16 md:py-20 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="Gallery"
              title="Hudson in Action"
              description="A curated selection of his finest moments on the job."
              align="center"
            />
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((img) => (
              <StaggerItem key={img.src}>
                <div className="relative aspect-square rounded-[6px] overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/20 transition-colors duration-300" />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-midnight text-center">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.25em] text-champagne mb-4">
              Ready to Say Hello?
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory mb-6">
              Schedule a Visit
            </h2>
            <p className="font-accent text-xl md:text-2xl text-stone-400 italic mb-10">
              (Hudson Approved)
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-champagne text-midnight text-[13px] font-medium uppercase tracking-[0.1em] rounded-[4px] hover:bg-champagne-light transition-colors duration-200"
            >
              Get in Touch
              <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
