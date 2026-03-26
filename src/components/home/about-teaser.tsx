"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimateIn } from "@/components/shared/animate-in";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "$2B+", label: "In Sales" },
  { value: "50+", label: "Countries Served" },
];

export function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-ivory overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image - 55% */}
          <div className="lg:col-span-7 relative">
            <AnimateIn direction="left">
              <motion.div
                style={{ y: imageY }}
                className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden"
              >
                <div className="absolute inset-0 bg-stone-200 skeleton" />
                <Image
                  src="/images/nikki-editorial.svg"
                  alt="Nicole Beauchamp - Luxury Real Estate Advisor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  unoptimized
                />
              </motion.div>
            </AnimateIn>
            {/* Accent detail */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border border-champagne/30" />
          </div>

          {/* Text - 45% */}
          <div className="lg:col-span-5">
            <AnimateIn direction="right">
              <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                Meet Your Advisor
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-midnight">
                Nikki Beauchamp
              </h2>
              <p className="mt-6 text-stone-500 text-[17px] leading-relaxed">
                More than an agent - a trusted advisor, knowledge broker, and
                solutions strategist. With nearly two decades navigating New York
                City&apos;s most complex real estate landscape, Nikki brings a
                rare combination of market intelligence, global perspective, and
                white-glove service to every client relationship.
              </p>
              <p className="mt-4 text-stone-500 text-[17px] leading-relaxed">
                Multilingual and tech-forward, she connects discerning buyers
                and sellers through Sotheby&apos;s International Realty&apos;s
                unparalleled worldwide network.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl md:text-4xl text-midnight">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-stone-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center mt-10 text-[13px] font-medium uppercase tracking-[0.1em] text-champagne hover:text-champagne-light transition-colors group"
              >
                Learn More About Nikki
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
