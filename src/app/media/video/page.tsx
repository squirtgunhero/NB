import type { Metadata } from "next";
import Image from "next/image";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { Badge } from "@/components/ui";

export const metadata: Metadata = { title: "Video" };

const VIDEOS = [
  { id: 1, title: "432 Park Avenue Penthouse - Exclusive Tour", category: "Property Tour", thumbnail: "/images/placeholder-property-1.svg", duration: "4:32", description: "Step inside one of Manhattan's most iconic residences with breathtaking 360-degree views." },
  { id: 2, title: "Manhattan Market Update: Spring 2026", category: "Market Update", thumbnail: "/images/placeholder-property-2.svg", duration: "8:15", description: "Nicole breaks down the latest luxury market data and what it means for buyers and sellers." },
  { id: 3, title: "Living in Tribeca: A Neighborhood Portrait", category: "NYC Living", thumbnail: "/images/placeholder-property-1.svg", duration: "6:48", description: "An intimate look at the streets, restaurants, and residences that define Tribeca." },
  { id: 4, title: "The Art of the Open House at Sotheby's", category: "Property Tour", thumbnail: "/images/placeholder-property-2.svg", duration: "5:21", description: "How Sotheby's creates an unforgettable experience for discerning buyers." },
  { id: 5, title: "Upper East Side: Classic Elegance Reimagined", category: "NYC Living", thumbnail: "/images/placeholder-property-1.svg", duration: "7:03", description: "Exploring the UES renaissance - new restaurants, galleries, and a vibrant cultural scene." },
  { id: 6, title: "Q4 2025 Luxury Market Recap", category: "Market Update", thumbnail: "/images/placeholder-property-2.svg", duration: "10:42", description: "A comprehensive review of the year's final quarter in Manhattan luxury real estate." },
  { id: 7, title: "72 Mercer Street Penthouse Walk-Through", category: "Property Tour", thumbnail: "/images/placeholder-property-1.svg", duration: "3:55", description: "A stunning SoHo penthouse featuring original cast-iron details and panoramic views." },
  { id: 8, title: "Central Park Views: Manhattan's Most Coveted Asset", category: "NYC Living", thumbnail: "/images/placeholder-property-2.svg", duration: "5:18", description: "Why Central Park proximity remains the single most powerful driver of property value." },
];

const CATEGORIES = ["All", "Property Tour", "Market Update", "NYC Living"];

export default function VideoPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative bg-midnight py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="font-body text-[12px] font-medium uppercase tracking-[0.2em] text-champagne mb-4">
              Media &amp; Press
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory max-w-3xl">
              Video
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-stone-400 text-lg max-w-xl leading-relaxed">
              Property tours, market updates, and neighborhood portraits.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Video Grid ─── */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <div className="w-14 h-14 rounded-full bg-champagne/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-midnight ml-0.5" fill="currentColor" viewBox="0 0 24 24">
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
                  <h3 className="font-display text-lg text-midnight group-hover:text-champagne transition-colors mb-2">
                    {video.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
