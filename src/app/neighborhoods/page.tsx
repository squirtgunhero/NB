"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui";
import { MapExplorer } from "@/components/neighborhoods/map-explorer";

const NEIGHBORHOODS = [
  {
    slug: "upper-east-side",
    name: "Upper East Side",
    vibe: "Timeless elegance meets cultural grandeur along Museum Mile",
    medianPrice: "$3.2M",
    image: "/images/placeholder-property-1.svg",
  },
  {
    slug: "upper-west-side",
    name: "Upper West Side",
    vibe: "Intellectual charm, pre-war architecture, and Central Park at your doorstep",
    medianPrice: "$2.8M",
    image: "/images/placeholder-property-2.svg",
  },
  {
    slug: "tribeca",
    name: "Tribeca",
    vibe: "Cobblestone streets, soaring lofts, and Manhattan's most coveted zip code",
    medianPrice: "$5.1M",
    image: "/images/placeholder-property-1.svg",
  },
  {
    slug: "soho",
    name: "SoHo",
    vibe: "Cast-iron facades, world-class shopping, and artistic energy",
    medianPrice: "$4.2M",
    image: "/images/placeholder-property-2.svg",
  },
  {
    slug: "greenwich-village",
    name: "Greenwich Village",
    vibe: "Bohemian soul, tree-lined streets, and a vibrant culinary scene",
    medianPrice: "$3.5M",
    image: "/images/placeholder-property-1.svg",
  },
  {
    slug: "chelsea",
    name: "Chelsea",
    vibe: "Gallery district glamour, the High Line, and modern luxury",
    medianPrice: "$2.9M",
    image: "/images/placeholder-property-2.svg",
  },
  {
    slug: "midtown",
    name: "Midtown",
    vibe: "Iconic skyline living, world-class dining, and unmatched convenience",
    medianPrice: "$3.8M",
    image: "/images/placeholder-property-1.svg",
  },
  {
    slug: "financial-district",
    name: "Financial District",
    vibe: "Historic grandeur reimagined with sleek new towers and waterfront access",
    medianPrice: "$2.1M",
    image: "/images/placeholder-property-2.svg",
  },
];

export default function NeighborhoodsPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-midnight py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="font-body text-[12px] font-medium uppercase tracking-[0.2em] text-champagne mb-4">
              Neighborhood Guide
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory max-w-4xl">
              Explore Manhattan&apos;s Finest Neighborhoods
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-stone-400 text-lg max-w-xl leading-relaxed">
              Each neighborhood has its own character, rhythm, and appeal. Discover the one that feels like home.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Interactive Map ─── */}
      <section className="bg-midnight border-t border-stone-800">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <AnimateIn>
            <MapExplorer />
          </AnimateIn>
        </div>
      </section>

      {/* ─── Neighborhood Grid ─── */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <SectionHeader
              label="Discover"
              title="Manhattan Neighborhoods"
              description="From the tree-lined avenues of the Upper East Side to the cobblestone streets of Tribeca, find your perfect neighborhood."
            />
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEIGHBORHOODS.map((hood) => (
              <StaggerItem key={hood.slug}>
                <Link
                  href={`/neighborhoods/${hood.slug}`}
                  className="group block relative aspect-[3/4] overflow-hidden bg-stone-200"
                >
                  <Image
                    src={hood.image}
                    alt={hood.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl md:text-2xl text-ivory mb-2">
                      {hood.name}
                    </h3>
                    <p className="text-stone-300 text-sm leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {hood.vibe}
                    </p>
                    <p className="text-champagne text-[12px] font-medium uppercase tracking-wider">
                      From {hood.medianPrice}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
