"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { AnimateIn } from "@/components/shared/animate-in";
import { formatPrice } from "@/lib/utils";

// Placeholder data — will be replaced with Sanity data
const FEATURED_PROPERTIES = [
  {
    slug: "432-park-avenue-ph",
    title: "432 Park Avenue, Penthouse",
    address: "432 Park Avenue",
    price: 45000000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8255,
    image: "/images/placeholder-property-1.jpg",
    neighborhood: "Midtown",
  },
  {
    slug: "one-57-unit-87",
    title: "One57 - Full Floor Residence",
    address: "157 West 57th Street",
    price: 28500000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6240,
    image: "/images/placeholder-property-2.jpg",
    neighborhood: "Midtown West",
  },
  {
    slug: "tribeca-loft",
    title: "Tribeca Full-Floor Loft",
    address: "443 Greenwich Street",
    price: 18750000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5100,
    image: "/images/placeholder-property-3.jpg",
    neighborhood: "Tribeca",
  },
  {
    slug: "ues-townhouse",
    title: "Upper East Side Townhouse",
    address: "163 East 64th Street",
    price: 22000000,
    bedrooms: 7,
    bathrooms: 8,
    sqft: 8500,
    image: "/images/placeholder-property-4.jpg",
    neighborhood: "Upper East Side",
  },
];

export function FeaturedProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <AnimateIn>
          <SectionHeader
            label="Curated Collection"
            title="Properties Selected for You"
          />
        </AnimateIn>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {FEATURED_PROPERTIES.map((property, i) => (
              <motion.div
                key={property.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%] snap-start"
              >
                <Link href={`/properties/${property.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                    <div className="absolute inset-0 bg-stone-300 skeleton" />
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 85vw, (max-width: 768px) 60vw, 30vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-accent text-2xl text-ivory">
                        {formatPrice(property.price)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-display text-xl text-midnight group-hover:text-champagne transition-colors">
                      {property.address}
                    </h3>
                    <p className="mt-1 text-[13px] text-stone-500">
                      {property.neighborhood}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-[13px] text-stone-400">
                      <span>{property.bedrooms} Beds</span>
                      <span className="text-stone-300">|</span>
                      <span>{property.bathrooms} Baths</span>
                      <span className="text-stone-300">|</span>
                      <span>{property.sqft.toLocaleString()} SF</span>
                    </div>
                    <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.08em] text-champagne group-hover:tracking-[0.12em] transition-all">
                      View Property &rarr;
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Nav Arrows */}
          <button
            onClick={() => scrollTo("left")}
            aria-label="Previous properties"
            className="hidden md:flex absolute left-2 top-[20%] -translate-y-1/2 w-10 h-10 items-center justify-center bg-white/90 backdrop-blur-sm border border-stone-200 hover:border-champagne transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={() => scrollTo("right")}
            aria-label="Next properties"
            className="hidden md:flex absolute right-2 top-[20%] -translate-y-1/2 w-10 h-10 items-center justify-center bg-white/90 backdrop-blur-sm border border-stone-200 hover:border-champagne transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center text-[13px] font-medium uppercase tracking-[0.1em] text-champagne hover:text-champagne-light transition-colors"
          >
            View All Properties
            <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
