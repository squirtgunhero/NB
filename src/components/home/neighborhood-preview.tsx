"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";

const NEIGHBORHOODS = [
  {
    slug: "upper-east-side",
    name: "Upper East Side",
    image: "/images/neighborhoods/ues.svg",
    startingPrice: "$1.2M",
  },
  {
    slug: "tribeca",
    name: "Tribeca",
    image: "/images/neighborhoods/tribeca.svg",
    startingPrice: "$2.5M",
  },
  {
    slug: "soho",
    name: "SoHo",
    image: "/images/neighborhoods/soho.svg",
    startingPrice: "$1.8M",
  },
  {
    slug: "greenwich-village",
    name: "Greenwich Village",
    image: "/images/neighborhoods/village.svg",
    startingPrice: "$1.5M",
  },
];

export function NeighborhoodPreview() {
  return (
    <section className="py-20 md:py-28 bg-midnight overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <AnimateIn>
          <SectionHeader
            label="Explore Manhattan"
            title="Find Your Neighborhood"
            description="Every block tells a different story. Discover the neighborhood that speaks to your lifestyle."
            dark
          />
        </AnimateIn>

        {/* Mini Map Placeholder - will be replaced with Mapbox */}
        <AnimateIn>
          <div className="relative w-full max-w-3xl mx-auto aspect-[3/4] md:aspect-[4/3] mb-16 rounded overflow-hidden bg-stone-900 border border-stone-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 mx-auto text-stone-700 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-[12px] uppercase tracking-[0.15em] text-stone-600">
                  Interactive Map
                </p>
                <p className="mt-1 text-[14px] text-stone-500">
                  Mapbox neighborhood explorer
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Neighborhood Cards */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEIGHBORHOODS.map((hood) => (
            <StaggerItem key={hood.slug}>
              <Link
                href={`/neighborhoods/${hood.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <div className="absolute inset-0 bg-stone-800" />
                <Image
                  src={hood.image}
                  alt={hood.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-2xl text-ivory group-hover:text-champagne transition-colors">
                    {hood.name}
                  </h3>
                  <p className="mt-1 text-[13px] text-stone-400">
                    From {hood.startingPrice}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-12 text-center">
          <Link
            href="/neighborhoods"
            className="inline-flex items-center text-[13px] font-medium uppercase tracking-[0.1em] text-champagne hover:text-champagne-light transition-colors"
          >
            Explore All Neighborhoods
            <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
