"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader, Badge, Button } from "@/components/ui";

/* ─── Blog post data ─── */
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const CATEGORIES = [
  "All",
  "Market Insights",
  "NYC Living",
  "Buyer Tips",
  "Seller Tips",
  "Neighborhood Spotlights",
];

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "manhattan-luxury-market-q1-2026",
    title: "Manhattan Luxury Market: What Q1 2026 Tells Us About the Year Ahead",
    excerpt:
      "The first quarter of 2026 has delivered surprising momentum to Manhattan's luxury segment, with signed contracts up 18% year-over-year.",
    category: "Market Insights",
    date: "March 18, 2026",
    readTime: "6 min read",
    image: "/images/placeholder-property-1.svg",
    featured: true,
  },
  {
    slug: "art-of-staging-luxury-home",
    title: "The Art of Staging a Luxury Home: Lessons from Sotheby's Finest Sales",
    excerpt:
      "Why the right staging strategy can add millions to your final sale price — and the common mistakes that cost sellers dearly.",
    category: "Seller Tips",
    date: "March 10, 2026",
    readTime: "5 min read",
    image: "/images/placeholder-property-2.svg",
  },
  {
    slug: "tribeca-neighborhood-guide",
    title: "Living in Tribeca: The Definitive Insider's Guide",
    excerpt:
      "From cobblestone streets to world-class dining, discover why Tribeca remains Manhattan's most coveted neighborhood.",
    category: "Neighborhood Spotlights",
    date: "March 3, 2026",
    readTime: "8 min read",
    image: "/images/placeholder-property-1.svg",
  },
  {
    slug: "first-time-luxury-buyer-guide",
    title: "Your First Luxury Purchase: A Step-by-Step Guide to Buying Above $5M",
    excerpt:
      "Navigating the nuances of high-end real estate — from board packages to bespoke financing — with confidence.",
    category: "Buyer Tips",
    date: "February 24, 2026",
    readTime: "7 min read",
    image: "/images/placeholder-property-2.svg",
  },
  {
    slug: "best-rooftop-terraces-nyc",
    title: "The 10 Best Rooftop Terraces in New York City Real Estate",
    excerpt:
      "Outdoor space is the ultimate luxury. These properties boast terraces that redefine city living.",
    category: "NYC Living",
    date: "February 15, 2026",
    readTime: "4 min read",
    image: "/images/placeholder-property-1.svg",
  },
  {
    slug: "spring-2026-market-forecast",
    title: "Spring 2026 Market Forecast: Inventory, Pricing & What to Expect",
    excerpt:
      "With interest rates stabilizing and new developments delivering, here is what buyers and sellers should anticipate this season.",
    category: "Market Insights",
    date: "February 8, 2026",
    readTime: "6 min read",
    image: "/images/placeholder-property-2.svg",
  },
  {
    slug: "upper-east-side-renaissance",
    title: "The Upper East Side Renaissance: Why This Classic Neighborhood Is Buzzing Again",
    excerpt:
      "A new generation of restaurants, galleries, and boutiques are reshaping the UES while preserving its timeless appeal.",
    category: "Neighborhood Spotlights",
    date: "January 30, 2026",
    readTime: "5 min read",
    image: "/images/placeholder-property-1.svg",
  },
  {
    slug: "selling-co-op-vs-condo",
    title: "Selling a Co-op vs. Condo: Key Differences Every NYC Seller Must Know",
    excerpt:
      "The board process, flip taxes, and disclosure requirements differ dramatically. Here is how to prepare for each.",
    category: "Seller Tips",
    date: "January 22, 2026",
    readTime: "6 min read",
    image: "/images/placeholder-property-2.svg",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featuredPost = filtered.find((p) => p.featured) ?? filtered[0];
  const gridPosts = filtered.filter((p) => p.slug !== featuredPost?.slug);

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-midnight py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="font-body text-[12px] font-medium uppercase tracking-[0.2em] text-champagne mb-4">
              The New York Edit
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory max-w-3xl">
              Stories, Insights &amp; City Living
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-stone-400 text-lg max-w-xl leading-relaxed">
              Expert perspectives on Manhattan real estate, neighborhood guides, and the art of luxury living.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Category Filter ─── */}
      <section className="bg-ivory border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <AnimateIn>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-[12px] font-medium uppercase tracking-[0.1em] transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-champagne text-midnight"
                      : "bg-stone-100 text-stone-500 hover:bg-stone-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Featured Post ─── */}
      {featuredPost && (
        <section className="bg-ivory py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateIn>
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="relative aspect-[21/9] w-full overflow-hidden bg-stone-200">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <Badge variant="champagne" className="mb-4">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="font-display text-2xl md:text-4xl text-ivory max-w-2xl mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-stone-300 text-sm max-w-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-stone-400 text-[12px] uppercase tracking-wider">
                      <span>{featuredPost.date}</span>
                      <span className="w-1 h-1 rounded-full bg-champagne" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* ─── Post Grid ─── */}
      <section className="bg-ivory pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerChildren className="columns-1 md:columns-2 gap-8 space-y-8">
            {gridPosts.map((post) => (
              <StaggerItem key={post.slug} className="break-inside-avoid">
                <Link href={`/blog/${post.slug}`} className="group block bg-white border border-stone-200 hover:border-champagne/40 transition-colors duration-300">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="champagne" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="font-display text-xl md:text-2xl text-midnight mb-2 group-hover:text-champagne transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-stone-400 text-[11px] uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-champagne" />
                      <span>{post.readTime}</span>
                    </div>
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
