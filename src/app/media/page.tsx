"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader, Badge, Button } from "@/components/ui";

/* ─── Press Data ─── */
const PRESS_ITEMS = [
  { id: 1, publication: "The New York Times", title: "How Top Agents Are Navigating Manhattan's Luxury Shift", date: "March 2026", url: "#" },
  { id: 2, publication: "Wall Street Journal", title: "NYC's Most In-Demand Neighborhoods for Ultra-Luxury Buyers", date: "February 2026", url: "#" },
  { id: 3, publication: "Forbes", title: "The Tech-Savvy Broker: How Nicole Beauchamp Leads with Innovation", date: "January 2026", url: "#" },
  { id: 4, publication: "Mansion Global", title: "Manhattan's $10M+ Market Sees Strongest Quarter in Five Years", date: "December 2025", url: "#" },
  { id: 5, publication: "Inman News", title: "Sotheby's Nicole Beauchamp on the Future of Luxury Real Estate", date: "November 2025", url: "#" },
  { id: 6, publication: "Curbed New York", title: "Inside the City's Most Extraordinary Penthouse Listings", date: "October 2025", url: "#" },
];

/* ─── Video Data ─── */
const VIDEOS = [
  { id: 1, title: "432 Park Avenue Penthouse Tour", category: "Property Tour", thumbnail: "/images/placeholder-property-1.svg", duration: "4:32" },
  { id: 2, title: "Manhattan Market Update: Spring 2026", category: "Market Update", thumbnail: "/images/placeholder-property-2.svg", duration: "8:15" },
  { id: 3, title: "Living in Tribeca: A Neighborhood Portrait", category: "NYC Living", thumbnail: "/images/placeholder-property-1.svg", duration: "6:48" },
  { id: 4, title: "The Art of the Open House at Sotheby's", category: "Property Tour", thumbnail: "/images/placeholder-property-2.svg", duration: "5:21" },
];

/* ─── Podcast Data ─── */
const PODCASTS = [
  { id: 1, title: "The Future of Manhattan Real Estate", description: "Nicole discusses emerging trends, AI in real estate, and what the next decade holds for luxury buyers.", date: "March 2026", duration: "38 min" },
  { id: 2, title: "Navigating Co-op Boards Like a Pro", description: "A candid conversation about the board approval process and how to present the strongest application.", date: "February 2026", duration: "29 min" },
  { id: 3, title: "International Buyers & NYC: What You Need to Know", description: "From visa considerations to tax implications, a comprehensive guide for global purchasers.", date: "January 2026", duration: "42 min" },
  { id: 4, title: "Design Trends Shaping Luxury Interiors in 2026", description: "Nicole speaks with a leading interior designer about the aesthetics defining this year's finest homes.", date: "December 2025", duration: "35 min" },
];

export default function MediaPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-midnight py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="font-body text-[12px] font-medium uppercase tracking-[0.2em] text-champagne mb-4">
              In the Spotlight
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory max-w-3xl">
              Media &amp; Press
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-stone-400 text-lg max-w-xl leading-relaxed">
              Featured coverage, video content, and podcast episodes from Nicole Beauchamp.
            </p>
          </AnimateIn>

          {/* Anchor Links */}
          <AnimateIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                { label: "Press", href: "#press" },
                { label: "Video", href: "#video" },
                { label: "Podcast", href: "#podcast" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-6 py-3 text-[12px] font-medium uppercase tracking-[0.1em] border border-champagne/40 text-champagne hover:bg-champagne/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Press Section ─── */}
      <section id="press" className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="flex items-center justify-between mb-12">
              <SectionHeader label="Featured In" title="Press Coverage" align="left" className="mb-0" />
              <Link href="/media/press">
                <Button variant="outlined" size="sm">View All Press</Button>
              </Link>
            </div>
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESS_ITEMS.map((item) => (
              <StaggerItem key={item.id}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white border border-stone-200 p-6 hover:border-champagne/40 transition-colors h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-20 h-8 bg-stone-100 flex items-center justify-center">
                      <span className="text-[10px] font-medium text-stone-400 uppercase tracking-wider">
                        Logo
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-stone-300 group-hover:text-champagne transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </div>
                  <p className="font-medium text-[11px] uppercase tracking-wider text-champagne mb-2">
                    {item.publication}
                  </p>
                  <h3 className="font-display text-lg text-midnight group-hover:text-champagne transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-[12px] uppercase tracking-wider">{item.date}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Video Section ─── */}
      <section id="video" className="bg-white py-20 md:py-28 border-t border-stone-100">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="flex items-center justify-between mb-12">
              <SectionHeader label="Watch" title="Video" align="left" className="mb-0" />
              <Link href="/media/video">
                <Button variant="outlined" size="sm">View All Videos</Button>
              </Link>
            </div>
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VIDEOS.map((video) => (
              <StaggerItem key={video.id}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-video w-full overflow-hidden bg-stone-100 mb-4">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-midnight/30 group-hover:bg-midnight/40 transition-colors" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-champagne/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-midnight ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    {/* Duration */}
                    <span className="absolute bottom-3 right-3 bg-midnight/80 text-ivory text-[11px] px-2 py-1 font-medium">
                      {video.duration}
                    </span>
                  </div>
                  <Badge variant="champagne" className="mb-2">{video.category}</Badge>
                  <h3 className="font-display text-xl text-midnight group-hover:text-champagne transition-colors">
                    {video.title}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ─── Podcast Section ─── */}
      <section id="podcast" className="bg-ivory py-20 md:py-28 border-t border-stone-100">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="flex items-center justify-between mb-12">
              <SectionHeader label="Listen" title="Podcast" align="left" className="mb-0" />
              <Link href="/media/podcast">
                <Button variant="outlined" size="sm">View All Episodes</Button>
              </Link>
            </div>
          </AnimateIn>

          <StaggerChildren className="space-y-6">
            {PODCASTS.map((ep) => (
              <StaggerItem key={ep.id}>
                <div className="group flex items-start gap-6 bg-white border border-stone-200 p-6 hover:border-champagne/40 transition-colors">
                  {/* Cover art placeholder */}
                  <div className="shrink-0 w-20 h-20 bg-midnight flex items-center justify-center">
                    <span className="font-display text-champagne text-2xl">NB</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-midnight group-hover:text-champagne transition-colors mb-1">
                      {ep.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-3 line-clamp-2">
                      {ep.description}
                    </p>
                    <div className="flex items-center gap-4 text-stone-400 text-[11px] uppercase tracking-wider">
                      <span>{ep.date}</span>
                      <span className="w-1 h-1 rounded-full bg-champagne" />
                      <span>{ep.duration}</span>
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    {/* Play button */}
                    <button className="w-10 h-10 rounded-full border border-champagne text-champagne flex items-center justify-center hover:bg-champagne hover:text-midnight transition-colors">
                      <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
