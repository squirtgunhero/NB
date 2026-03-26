"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui";
import { formatPrice } from "@/lib/utils";

const NEIGHBORHOOD_DATA: Record<string, {
  name: string;
  vibe: string;
  description: string;
  heroImage: string;
  medianPrice: number;
  avgPricePerSqFt: number;
  inventory: number;
  avgDaysOnMarket: number;
  highlights: { category: string; items: { name: string; description: string }[] }[];
}> = {
  "upper-east-side": {
    name: "Upper East Side",
    vibe: "Old-world elegance meets modern sophistication",
    description: "The Upper East Side is Manhattan's gold standard for refined living. Tree-lined streets of limestone townhouses give way to Museum Mile's cultural treasures, while Madison Avenue boutiques and world-class dining define the neighborhood's quietly luxurious character. This is where New York's most established families have lived for generations - and where a new generation of discerning buyers continues to invest.",
    heroImage: "/images/neighborhoods/ues-hero.svg",
    medianPrice: 2450000,
    avgPricePerSqFt: 1850,
    inventory: 342,
    avgDaysOnMarket: 78,
    highlights: [
      { category: "Dining", items: [
        { name: "Daniel", description: "Daniel Boulud's flagship French fine dining" },
        { name: "Café Sabarsky", description: "Viennese café in the Neue Galerie" },
        { name: "Sushi Noz", description: "Intimate omakase counter on East 77th" },
      ]},
      { category: "Culture", items: [
        { name: "The Metropolitan Museum of Art", description: "The world's encyclopedic art museum" },
        { name: "The Frick Collection", description: "Old Master paintings in a Gilded Age mansion" },
        { name: "Guggenheim Museum", description: "Frank Lloyd Wright's iconic spiral" },
      ]},
      { category: "Parks & Recreation", items: [
        { name: "Central Park (East)", description: "The Conservatory Garden, Reservoir, and beyond" },
        { name: "Carl Schurz Park", description: "Quiet riverside green space with East River views" },
        { name: "John Jay Park", description: "Neighborhood pool and playground" },
      ]},
    ],
  },
  "tribeca": {
    name: "Tribeca",
    vibe: "Industrial grandeur turned family-friendly luxury",
    description: "Tribeca has evolved from a warehouse district into Manhattan's most coveted residential neighborhood. Cast-iron buildings now house sprawling loft conversions, while cobblestone streets lead to some of the city's best restaurants. It's where celebrities, finance executives, and creative entrepreneurs live side by side - drawn by the space, the quiet, and the unmistakable sense of arrival.",
    heroImage: "/images/neighborhoods/tribeca-hero.svg",
    medianPrice: 3800000,
    avgPricePerSqFt: 2200,
    inventory: 156,
    avgDaysOnMarket: 62,
    highlights: [
      { category: "Dining", items: [
        { name: "Nobu", description: "Robert De Niro's iconic Japanese-Peruvian restaurant" },
        { name: "Locanda Verde", description: "Andrew Carmellini's beloved Italian taverna" },
        { name: "Frenchette", description: "Modern French bistro on West Broadway" },
      ]},
      { category: "Culture", items: [
        { name: "Tribeca Film Festival", description: "The neighborhood's annual cultural centerpiece" },
        { name: "The Mysterious Bookshop", description: "Rare and first-edition mystery books" },
        { name: "Tribeca Performing Arts Center", description: "Community arts and performance space" },
      ]},
      { category: "Parks & Recreation", items: [
        { name: "Hudson River Park", description: "Waterfront greenway with playgrounds and piers" },
        { name: "Washington Market Park", description: "Tribeca's central community green space" },
        { name: "Pier 25", description: "Mini golf, volleyball, and river views" },
      ]},
    ],
  },
};

const DEFAULT_NEIGHBORHOOD = {
  name: "Manhattan Neighborhood",
  vibe: "Where New York comes alive",
  description: "One of Manhattan's most vibrant and sought-after neighborhoods, offering a unique blend of culture, cuisine, and community that makes it an exceptional place to call home.",
  heroImage: "/images/neighborhoods/default-hero.svg",
  medianPrice: 2000000,
  avgPricePerSqFt: 1600,
  inventory: 200,
  avgDaysOnMarket: 85,
  highlights: [
    { category: "Dining", items: [
      { name: "Local Favorite", description: "Neighborhood dining at its finest" },
      { name: "Fine Dining", description: "World-class culinary experience" },
      { name: "Hidden Gem", description: "A discovery worth making" },
    ]},
    { category: "Culture", items: [
      { name: "Museum", description: "Art and culture nearby" },
      { name: "Gallery", description: "Contemporary art scene" },
      { name: "Theater", description: "Live performance venue" },
    ]},
    { category: "Parks & Recreation", items: [
      { name: "Central Park", description: "New York's iconic green space" },
      { name: "Local Park", description: "Neighborhood green space" },
      { name: "Waterfront", description: "River views and recreation" },
    ]},
  ],
};

const ALL_NEIGHBORHOODS = [
  { slug: "upper-east-side", name: "Upper East Side" },
  { slug: "upper-west-side", name: "Upper West Side" },
  { slug: "tribeca", name: "Tribeca" },
  { slug: "soho", name: "SoHo" },
  { slug: "greenwich-village", name: "Greenwich Village" },
  { slug: "chelsea", name: "Chelsea" },
  { slug: "midtown", name: "Midtown" },
  { slug: "financial-district", name: "Financial District" },
];

export default function NeighborhoodDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = NEIGHBORHOOD_DATA[slug] || { ...DEFAULT_NEIGHBORHOOD, name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") };

  const galleryImages = Array.from({ length: 6 }, (_, i) => `/images/neighborhoods/${slug}-${i + 1}.svg`);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-midnight">
        <Image
          src={data.heroImage}
          alt={data.name}
          fill
          className="object-cover opacity-60"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full pb-16 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12px] font-medium uppercase tracking-[0.2em] text-champagne mb-4"
          >
            Neighborhood Guide
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl text-ivory"
          >
            {data.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-lg text-stone-300 font-accent italic"
          >
            {data.vibe}
          </motion.p>
        </div>
      </section>

      {/* The Vibe */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
              The Vibe
            </p>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              {data.description}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-midnight">
        <div className="max-w-4xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: formatPrice(data.medianPrice), label: "Median Sale Price" },
              { value: `$${data.avgPricePerSqFt.toLocaleString()}`, label: "Avg Price/SqFt" },
              { value: data.inventory.toString(), label: "Active Listings" },
              { value: `${data.avgDaysOnMarket}`, label: "Avg Days on Market" },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="font-display text-3xl md:text-4xl text-ivory">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.08em] text-stone-400">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateIn>
            <SectionHeader label="Gallery" title={`Life in ${data.name}`} />
          </AnimateIn>
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <StaggerItem key={i}>
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <Image
                    src={src}
                    alt={`${data.name} ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Local Highlights */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="Curated by Nikki"
              title="Local Highlights"
              description="The places that define the character of this neighborhood."
            />
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.highlights.map((group) => (
              <AnimateIn key={group.category}>
                <h3 className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-5">
                  {group.category}
                </h3>
                <div className="space-y-5">
                  {group.items.map((item) => (
                    <div key={item.name} className="border-l-2 border-stone-200 pl-4">
                      <p className="font-medium text-midnight">{item.name}</p>
                      <p className="text-[14px] text-stone-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Other Neighborhoods */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-6 text-center">
            Explore Other Neighborhoods
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {ALL_NEIGHBORHOODS.filter((n) => n.slug !== slug).map((n) => (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="px-5 py-2.5 border border-stone-300 text-[13px] font-medium uppercase tracking-[0.08em] text-stone-600 hover:border-champagne hover:text-champagne transition-colors"
              >
                {n.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
