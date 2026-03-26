"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";
import { AnimateIn } from "@/components/shared/animate-in";

const BLOG_POSTS = [
  {
    slug: "nyc-luxury-market-spring-2026",
    title: "NYC Luxury Market: What Spring 2026 Holds",
    category: "Market Insights",
    date: "March 15, 2026",
    excerpt:
      "A deep dive into the trends shaping Manhattan's luxury market this season — from pricing dynamics to emerging buyer profiles.",
    image: "/images/blog/market-spring.jpg",
    readTime: 6,
    featured: true,
  },
  {
    slug: "best-restaurants-tribeca",
    title: "The Definitive Guide to Dining in Tribeca",
    category: "NYC Living",
    date: "March 8, 2026",
    excerpt:
      "From hidden omakase counters to neighborhood institutions, a curated guide to Tribeca's culinary scene.",
    image: "/images/blog/tribeca-dining.jpg",
    readTime: 4,
  },
  {
    slug: "first-time-buyer-manhattan",
    title: "Buying Your First Manhattan Apartment: What Nobody Tells You",
    category: "Buyer Tips",
    date: "February 28, 2026",
    excerpt:
      "Board packages, co-op vs. condo, financing nuances — the insider knowledge that makes the difference.",
    image: "/images/blog/first-time-buyer.jpg",
    readTime: 8,
  },
];

export function BlogPreview() {
  const featured = BLOG_POSTS[0];
  const recent = BLOG_POSTS.slice(1);

  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6">
        <AnimateIn>
          <SectionHeader
            label="The New York Edit"
            title="Stories from the City"
          />
        </AnimateIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Post */}
          <AnimateIn className="lg:col-span-7" direction="left">
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] bg-champagne/20 text-champagne backdrop-blur-sm rounded-full mb-3">
                    {featured.category}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-ivory group-hover:text-champagne transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-stone-300 line-clamp-2 max-w-lg">
                    {featured.excerpt}
                  </p>
                  <p className="mt-3 text-[12px] text-stone-400">
                    {featured.date} &middot; {featured.readTime} min read
                  </p>
                </div>
              </div>
            </Link>
          </AnimateIn>

          {/* Recent Posts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {recent.map((post, i) => (
              <AnimateIn key={post.slug} direction="right" delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex gap-5 items-start"
                >
                  <div className="relative w-32 md:w-40 flex-shrink-0 aspect-[4/3] overflow-hidden bg-stone-200">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="160px"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-champagne">
                      {post.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg text-midnight group-hover:text-champagne transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-stone-400">
                      {post.date} &middot; {post.readTime} min read
                    </p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-[13px] font-medium uppercase tracking-[0.1em] text-champagne hover:text-champagne-light transition-colors"
          >
            Read the Blog
            <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
