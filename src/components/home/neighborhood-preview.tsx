"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { MapExplorer } from "@/components/neighborhoods/map-explorer";

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

        {/* Interactive Map */}
        <AnimateIn>
          <div className="mb-16">
            <MapExplorer />
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
