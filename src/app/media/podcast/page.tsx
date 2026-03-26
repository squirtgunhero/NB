import type { Metadata } from "next";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Podcast" };

const EPISODES = [
  {
    id: 1,
    title: "The Future of Manhattan Real Estate",
    description: "Nicole discusses emerging trends, AI in real estate, and what the next decade holds for luxury buyers and sellers in New York City.",
    date: "March 2026",
    duration: "38 min",
    episode: "Ep. 24",
  },
  {
    id: 2,
    title: "Navigating Co-op Boards Like a Pro",
    description: "A candid conversation about the board approval process and how to present the strongest application possible - even in the most selective buildings.",
    date: "February 2026",
    duration: "29 min",
    episode: "Ep. 23",
  },
  {
    id: 3,
    title: "International Buyers & NYC: What You Need to Know",
    description: "From visa considerations to tax implications and entity structuring, a comprehensive guide for global purchasers entering the Manhattan market.",
    date: "January 2026",
    duration: "42 min",
    episode: "Ep. 22",
  },
  {
    id: 4,
    title: "Design Trends Shaping Luxury Interiors in 2026",
    description: "Nicole speaks with a leading interior designer about the aesthetics, materials, and spatial philosophies defining this year's finest homes.",
    date: "December 2025",
    duration: "35 min",
    episode: "Ep. 21",
  },
  {
    id: 5,
    title: "The Psychology of Luxury Home Buying",
    description: "Understanding the emotional and rational drivers behind high-value real estate decisions, and how the best advisors guide clients through both.",
    date: "November 2025",
    duration: "31 min",
    episode: "Ep. 20",
  },
  {
    id: 6,
    title: "New Development Deep Dive: What to Ask Before You Buy",
    description: "Nicole shares her checklist for evaluating new construction - from sponsor financials and offering plans to construction timelines and building amenities.",
    date: "October 2025",
    duration: "44 min",
    episode: "Ep. 19",
  },
  {
    id: 7,
    title: "Selling Above Ask: Strategies That Actually Work",
    description: "Data-driven pricing, strategic staging, and targeted marketing - the tactics that consistently deliver above-ask results in competitive markets.",
    date: "September 2025",
    duration: "33 min",
    episode: "Ep. 18",
  },
  {
    id: 8,
    title: "Manhattan's Hidden Gem Neighborhoods",
    description: "Beyond the marquee addresses - exploring under-the-radar pockets of Manhattan that offer exceptional value and quality of life.",
    date: "August 2025",
    duration: "37 min",
    episode: "Ep. 17",
  },
];

export default function PodcastPage() {
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
              Podcast
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-stone-400 text-lg max-w-xl leading-relaxed">
              In-depth conversations on luxury real estate, market insights, and the art of living well in New York City.
            </p>
          </AnimateIn>

          {/* Platform Links */}
          <AnimateIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.1em] bg-champagne text-midnight hover:bg-champagne-light transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 16.99 2.97 12.5 4.7 9.56C5.55 8.1 7.13 7.17 8.82 7.14C10.1 7.12 11.32 8 12.11 8C12.89 8 14.37 6.87 15.92 7.09C16.55 7.12 18.35 7.36 19.49 9.04C19.4 9.1 17.17 10.4 17.19 13.15C17.22 16.42 20.06 17.47 20.09 17.48C20.06 17.56 19.61 19.14 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" /></svg>
                Apple Podcasts
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.1em] border border-champagne/40 text-champagne hover:bg-champagne/10 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                Spotify
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Episode List ─── */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerChildren className="space-y-6">
            {EPISODES.map((ep) => (
              <StaggerItem key={ep.id}>
                <div className="group flex flex-col md:flex-row items-start gap-6 bg-white border border-stone-200 p-6 md:p-8 hover:border-champagne/40 transition-colors">
                  {/* Cover art placeholder */}
                  <div className="shrink-0 w-24 h-24 bg-midnight flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-display text-champagne text-xl block">NB</span>
                      <span className="text-stone-500 text-[9px] uppercase tracking-wider">Podcast</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-champagne text-[11px] font-medium uppercase tracking-wider">
                        {ep.episode}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-stone-300" />
                      <span className="text-stone-400 text-[11px] uppercase tracking-wider">
                        {ep.date}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-midnight group-hover:text-champagne transition-colors mb-2">
                      {ep.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed mb-4">
                      {ep.description}
                    </p>

                    {/* Audio player placeholder */}
                    <div className="flex items-center gap-4">
                      <button className="w-10 h-10 rounded-full border border-champagne text-champagne flex items-center justify-center hover:bg-champagne hover:text-midnight transition-colors shrink-0">
                        <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <div className="flex-1 h-1 bg-stone-200 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-champagne rounded-full" />
                      </div>
                      <span className="text-stone-400 text-[12px] shrink-0">{ep.duration}</span>
                    </div>
                  </div>

                  {/* Platform Links */}
                  <div className="shrink-0 flex md:flex-col gap-2">
                    <a href="#" className="px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider border border-stone-200 text-stone-500 hover:border-champagne hover:text-champagne transition-colors text-center">
                      Apple
                    </a>
                    <a href="#" className="px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider border border-stone-200 text-stone-500 hover:border-champagne hover:text-champagne transition-colors text-center">
                      Spotify
                    </a>
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
