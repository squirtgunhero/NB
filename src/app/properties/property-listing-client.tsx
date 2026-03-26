"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader, Button, Badge } from "@/components/ui";
import { formatPrice } from "@/lib/utils";
import type { PropertyCard } from "./page";

/* ─── Filter Options ─── */
const NEIGHBORHOODS = [
  "All Neighborhoods",
  "Midtown",
  "Midtown West",
  "Tribeca",
  "Upper East Side",
  "Upper West Side",
  "SoHo",
  "Gramercy",
  "West Village",
  "Hudson Yards",
];

const PRICE_RANGES = [
  { value: "all", label: "Any Price" },
  { value: "0-10000000", label: "Under $10M" },
  { value: "10000000-20000000", label: "$10M – $20M" },
  { value: "20000000-50000000", label: "$20M – $50M" },
  { value: "50000000-999999999", label: "$50M+" },
  { value: "0-50000", label: "Rentals" },
];

const BEDROOMS = [
  { value: "all", label: "Any Bedrooms" },
  { value: "1", label: "1+ Beds" },
  { value: "2", label: "2+ Beds" },
  { value: "3", label: "3+ Beds" },
  { value: "4", label: "4+ Beds" },
  { value: "5", label: "5+ Beds" },
];

const PROPERTY_TYPES = [
  { value: "all", label: "All Types" },
  { value: "Condo", label: "Condo" },
  { value: "Co-op", label: "Co-op" },
  { value: "Townhouse", label: "Townhouse" },
  { value: "Rental", label: "Rental" },
];

const SORT_OPTIONS = [
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "sqft-desc", label: "Size: Largest" },
  { value: "beds-desc", label: "Bedrooms: Most" },
];

const VISIBLE_INCREMENT = 6;

/* ─── Component ─── */
export function PropertyListingClient({ properties }: { properties: PropertyCard[] }) {
  const [neighborhood, setNeighborhood] = useState("All Neighborhoods");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [sort, setSort] = useState("price-desc");
  const [visibleCount, setVisibleCount] = useState(VISIBLE_INCREMENT);

  const filtered = useMemo(() => {
    let result = [...properties];

    /* Neighborhood */
    if (neighborhood !== "All Neighborhoods") {
      result = result.filter((p) => p.neighborhood === neighborhood);
    }

    /* Price */
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    /* Bedrooms */
    if (bedrooms !== "all") {
      result = result.filter((p) => p.bedrooms >= Number(bedrooms));
    }

    /* Type */
    if (propertyType !== "all") {
      result = result.filter((p) => p.type === propertyType);
    }

    /* Sort */
    result.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "sqft-desc":
          return b.sqft - a.sqft;
        case "beds-desc":
          return b.bedrooms - a.bedrooms;
        default:
          return 0;
      }
    });

    return result;
  }, [properties, neighborhood, priceRange, bedrooms, propertyType, sort]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const selectBase =
    "w-full px-4 py-3 bg-white/5 border border-champagne/30 text-ivory text-[13px] transition-colors duration-200 focus:border-champagne focus:outline-none appearance-none cursor-pointer backdrop-blur-sm rounded-[4px]";

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-midnight py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,177,143,0.08),transparent_70%)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 text-center">
          <AnimateIn>
            <p className="font-body text-[12px] font-medium uppercase tracking-[0.2em] text-champagne mb-6">
              Nicole Beauchamp Collection
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory font-normal">
              Properties
            </h1>
            <p className="mt-6 text-base md:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
              A curated selection of New York City&apos;s most distinguished residences,
              each hand-picked for discerning clients who expect the&nbsp;extraordinary.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section className="bg-midnight/95 border-t border-champagne/10 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* Neighborhood */}
            <div className="relative">
              <select
                value={neighborhood}
                onChange={(e) => { setNeighborhood(e.target.value); setVisibleCount(VISIBLE_INCREMENT); }}
                className={selectBase}
              >
                {NEIGHBORHOODS.map((n) => (
                  <option key={n} value={n} className="text-midnight">
                    {n}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </div>

            {/* Price Range */}
            <div className="relative">
              <select
                value={priceRange}
                onChange={(e) => { setPriceRange(e.target.value); setVisibleCount(VISIBLE_INCREMENT); }}
                className={selectBase}
              >
                {PRICE_RANGES.map((o) => (
                  <option key={o.value} value={o.value} className="text-midnight">
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </div>

            {/* Bedrooms */}
            <div className="relative">
              <select
                value={bedrooms}
                onChange={(e) => { setBedrooms(e.target.value); setVisibleCount(VISIBLE_INCREMENT); }}
                className={selectBase}
              >
                {BEDROOMS.map((o) => (
                  <option key={o.value} value={o.value} className="text-midnight">
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </div>

            {/* Property Type */}
            <div className="relative">
              <select
                value={propertyType}
                onChange={(e) => { setPropertyType(e.target.value); setVisibleCount(VISIBLE_INCREMENT); }}
                className={selectBase}
              >
                {PROPERTY_TYPES.map((o) => (
                  <option key={o.value} value={o.value} className="text-midnight">
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className={selectBase}
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value} className="text-midnight">
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </div>

            {/* Results count */}
            <div className="flex items-center justify-center lg:justify-end col-span-2 md:col-span-3 lg:col-span-1">
              <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-stone-400">
                {filtered.length} {filtered.length === 1 ? "Property" : "Properties"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Property Grid ─── */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          {filtered.length === 0 ? (
            <AnimateIn>
              <div className="text-center py-20">
                <p className="font-display text-2xl text-midnight mb-4">
                  No properties match your criteria
                </p>
                <p className="text-stone-500 mb-8 max-w-md mx-auto">
                  Try adjusting your filters to discover more of our luxury collection.
                </p>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setNeighborhood("All Neighborhoods");
                    setPriceRange("all");
                    setBedrooms("all");
                    setPropertyType("all");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </AnimateIn>
          ) : (
            <>
              <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                <AnimatePresence mode="popLayout">
                  {visible.map((property) => (
                    <StaggerItem key={property.slug}>
                      <PropertyGridCard property={property} />
                    </StaggerItem>
                  ))}
                </AnimatePresence>
              </StaggerChildren>

              {hasMore && (
                <div className="mt-16 text-center">
                  <Button
                    variant="outlined"
                    size="lg"
                    onClick={() => setVisibleCount((c) => c + VISIBLE_INCREMENT)}
                  >
                    Load More Properties
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

/* ─── Property Card ─── */
function PropertyGridCard({ property }: { property: PropertyCard }) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      {/* Image with hover swap */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
        <Image
          src={property.image}
          alt={property.address}
          fill
          className="object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
        <Image
          src={property.image2}
          alt={`${property.address} - alternate view`}
          fill
          className="object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 scale-[1.03] group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <Badge variant="champagne">{property.type}</Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-accent text-2xl text-ivory">
            {property.type === "Rental"
              ? `${formatPrice(property.price)}/mo`
              : formatPrice(property.price)}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="font-display text-xl text-midnight group-hover:text-champagne transition-colors duration-300">
          {property.address}
        </h3>
        <p className="mt-1 text-[13px] text-stone-500">{property.neighborhood}</p>
        <div className="mt-2 flex items-center gap-3 text-[13px] text-stone-400">
          <span>{property.bedrooms} Beds</span>
          <span className="text-stone-300">|</span>
          <span>{property.bathrooms} Baths</span>
          <span className="text-stone-300">|</span>
          <span>{property.sqft.toLocaleString()} SF</span>
        </div>
        <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.08em] text-champagne group-hover:tracking-[0.12em] transition-all duration-300">
          View Property &rarr;
        </p>
      </div>
    </Link>
  );
}

/* ─── Shared select chevron ─── */
function ChevronIcon() {
  return (
    <svg
      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-champagne/60"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
