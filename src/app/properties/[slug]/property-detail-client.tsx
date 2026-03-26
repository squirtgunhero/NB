"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader, Button, Badge } from "@/components/ui";
import { formatPrice, formatFullPrice } from "@/lib/utils";

/* ─── Types ─── */
interface Property {
  slug: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  neighborhood: string;
  neighborhoodSlug: string;
  images: string[];
  description: string[];
  amenities: string[];
  buildingDetails: { label: string; value: string }[];
}

interface RelatedProperty {
  slug: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  neighborhood: string;
  image: string;
}

/* ─── Main Component ─── */
export function PropertyDetailClient({
  property,
  related,
}: {
  property: Property;
  related: RelatedProperty[];
}) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      {/* ─── Image Gallery ─── */}
      <section className="bg-stone-100">
        <div className="max-w-[1400px] mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[21/9] md:aspect-[21/8] overflow-hidden bg-stone-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={property.images[activeImage]}
                  alt={`${property.address} — photo ${activeImage + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent" />

            {/* Image counter */}
            <div className="absolute bottom-4 right-4 bg-midnight/70 backdrop-blur-sm px-3 py-1.5 rounded-[4px]">
              <span className="text-[12px] font-medium text-ivory tracking-wide">
                {activeImage + 1} / {property.images.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 p-3 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 overflow-hidden transition-all duration-300 ${
                  i === activeImage
                    ? "ring-2 ring-champagne opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                  unoptimized
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Content + Sidebar ─── */}
      <section className="py-12 md:py-20 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-16">
            {/* ── Main Content ── */}
            <div className="min-w-0">
              {/* Title block (mobile) */}
              <div className="lg:hidden mb-10">
                <MobileHeader property={property} />
              </div>

              {/* Description */}
              <AnimateIn>
                <div className="mb-14">
                  <h2 className="font-display text-2xl md:text-3xl text-midnight mb-6">
                    About This Residence
                  </h2>
                  {property.description.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[15px] leading-relaxed text-stone-600 mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </AnimateIn>

              {/* Amenities */}
              <AnimateIn delay={0.1}>
                <div className="mb-14">
                  <h2 className="font-display text-2xl md:text-3xl text-midnight mb-6">
                    Amenities &amp; Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {property.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-3">
                        <svg
                          className="w-4 h-4 text-champagne flex-shrink-0"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 8.5L6.5 12L13 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-[14px] text-stone-600">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Building Details */}
              <AnimateIn delay={0.15}>
                <div className="mb-14">
                  <h2 className="font-display text-2xl md:text-3xl text-midnight mb-6">
                    Building Details
                  </h2>
                  <div className="border border-stone-200 divide-y divide-stone-200">
                    {property.buildingDetails.map((detail) => (
                      <div
                        key={detail.label}
                        className="flex justify-between items-center px-5 py-3.5"
                      >
                        <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-stone-400">
                          {detail.label}
                        </span>
                        <span className="text-[14px] text-midnight font-medium">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Floor Plan Placeholder */}
              <AnimateIn delay={0.2}>
                <div className="mb-14">
                  <h2 className="font-display text-2xl md:text-3xl text-midnight mb-6">
                    Floor Plan
                  </h2>
                  <div className="aspect-[4/3] bg-stone-100 border border-stone-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 text-stone-300 mx-auto mb-3"
                        viewBox="0 0 48 48"
                        fill="none"
                      >
                        <rect
                          x="4"
                          y="4"
                          width="40"
                          height="40"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <line x1="4" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1" />
                        <line x1="34" y1="24" x2="34" y2="44" stroke="currentColor" strokeWidth="1" />
                      </svg>
                      <p className="text-[13px] text-stone-400">
                        Floor plan available upon request
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Neighborhood context */}
              <AnimateIn delay={0.25}>
                <div className="p-6 md:p-8 bg-stone-50 border border-stone-200">
                  <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-champagne mb-2">
                    Neighborhood
                  </p>
                  <h3 className="font-display text-2xl text-midnight mb-3">
                    {property.neighborhood}
                  </h3>
                  <p className="text-[14px] text-stone-500 leading-relaxed mb-5">
                    Discover the character, dining, culture, and lifestyle that define one of
                    New York City&apos;s most sought-after neighborhoods.
                  </p>
                  <Link
                    href={`/neighborhoods/${property.neighborhoodSlug}`}
                    className="inline-flex items-center text-[12px] font-medium uppercase tracking-[0.1em] text-champagne hover:text-champagne-light transition-colors"
                  >
                    Explore {property.neighborhood}
                    <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M13 8L8 3M13 8L8 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* ── Sticky Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-8">
                <AnimateIn direction="right" delay={0.1}>
                  <div className="bg-white border border-stone-200 p-8">
                    {/* Price */}
                    <p className="font-accent text-4xl text-midnight mb-1">
                      {property.type === "Rental"
                        ? `${formatPrice(property.price)}/mo`
                        : formatFullPrice(property.price)}
                    </p>
                    {property.type !== "Rental" && (
                      <p className="text-[12px] text-stone-400 uppercase tracking-wide mb-6">
                        Asking Price
                      </p>
                    )}

                    {/* Address */}
                    <h1 className="font-display text-xl text-midnight mb-6">
                      {property.address}
                    </h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <StatBox label="Bedrooms" value={String(property.bedrooms)} />
                      <StatBox label="Bathrooms" value={String(property.bathrooms)} />
                      <StatBox label="Square Feet" value={property.sqft.toLocaleString()} />
                      <StatBox label="Type" value={property.type} />
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3 mb-6">
                      <Button variant="filled" size="lg" className="w-full">
                        Schedule a Viewing
                      </Button>
                      <Button variant="outlined" size="lg" className="w-full">
                        Ask About This Property
                      </Button>
                    </div>

                    {/* Share */}
                    <button className="flex items-center justify-center gap-2 w-full py-3 text-[12px] font-medium uppercase tracking-[0.1em] text-stone-400 hover:text-champagne transition-colors">
                      <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M4 8V14H12V8M8 2V10M8 2L5 5M8 2L11 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Share This Property
                    </button>
                  </div>
                </AnimateIn>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ─── Mobile Sticky CTA ─── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-4 py-3 z-40 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-accent text-xl text-midnight truncate">
            {property.type === "Rental"
              ? `${formatPrice(property.price)}/mo`
              : formatFullPrice(property.price)}
          </p>
        </div>
        <Button variant="filled" size="sm">
          Schedule Viewing
        </Button>
      </div>

      {/* ─── You Might Also Like ─── */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 bg-stone-50">
          <div className="max-w-[1400px] mx-auto px-6">
            <AnimateIn>
              <SectionHeader
                label="More to Explore"
                title="You Might Also Like"
              />
            </AnimateIn>

            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <Link href={`/properties/${r.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                      <Image
                        src={r.image}
                        alt={r.address}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="champagne">{r.type}</Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="font-accent text-2xl text-ivory">
                          {formatPrice(r.price)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-display text-xl text-midnight group-hover:text-champagne transition-colors duration-300">
                        {r.address}
                      </h3>
                      <p className="mt-1 text-[13px] text-stone-500">{r.neighborhood}</p>
                      <div className="mt-2 flex items-center gap-3 text-[13px] text-stone-400">
                        <span>{r.bedrooms} Beds</span>
                        <span className="text-stone-300">|</span>
                        <span>{r.bathrooms} Baths</span>
                        <span className="text-stone-300">|</span>
                        <span>{r.sqft.toLocaleString()} SF</span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <div className="mt-12 text-center">
              <Link
                href="/properties"
                className="inline-flex items-center text-[13px] font-medium uppercase tracking-[0.1em] text-champagne hover:text-champagne-light transition-colors"
              >
                View All Properties
                <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="lg:hidden h-16" />
    </>
  );
}

/* ─── Sub-components ─── */

function MobileHeader({ property }: { property: Property }) {
  return (
    <div>
      <Badge variant="champagne" className="mb-4">
        {property.type}
      </Badge>
      <h1 className="font-display text-2xl md:text-3xl text-midnight mb-2">
        {property.address}
      </h1>
      <p className="text-[13px] text-stone-500 mb-4">{property.neighborhood}</p>
      <p className="font-accent text-3xl text-midnight mb-4">
        {property.type === "Rental"
          ? `${formatPrice(property.price)}/mo`
          : formatFullPrice(property.price)}
      </p>
      <div className="flex items-center gap-4 text-[13px] text-stone-400">
        <span>{property.bedrooms} Beds</span>
        <span className="text-stone-300">|</span>
        <span>{property.bathrooms} Baths</span>
        <span className="text-stone-300">|</span>
        <span>{property.sqft.toLocaleString()} SF</span>
      </div>
    </div>
  );
}

function StatBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-stone-50 p-4 text-center">
      <p className="font-accent text-2xl text-midnight">{value}</p>
      <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-stone-400 mt-1">
        {label}
      </p>
    </div>
  );
}
