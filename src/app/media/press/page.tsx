import type { Metadata } from "next";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui";

export const metadata: Metadata = { title: "Press" };

const PRESS_ITEMS = [
  { id: 1, publication: "The New York Times", title: "How Top Agents Are Navigating Manhattan's Luxury Shift", date: "March 2026", url: "#" },
  { id: 2, publication: "Wall Street Journal", title: "NYC's Most In-Demand Neighborhoods for Ultra-Luxury Buyers", date: "February 2026", url: "#" },
  { id: 3, publication: "Forbes", title: "The Tech-Savvy Broker: How Nicole Beauchamp Leads with Innovation", date: "January 2026", url: "#" },
  { id: 4, publication: "Mansion Global", title: "Manhattan's $10M+ Market Sees Strongest Quarter in Five Years", date: "December 2025", url: "#" },
  { id: 5, publication: "Inman News", title: "Sotheby's Nicole Beauchamp on the Future of Luxury Real Estate", date: "November 2025", url: "#" },
  { id: 6, publication: "Curbed New York", title: "Inside the City's Most Extraordinary Penthouse Listings", date: "October 2025", url: "#" },
  { id: 7, publication: "Bloomberg", title: "Manhattan Luxury Sales Signal Broader Market Confidence", date: "September 2025", url: "#" },
  { id: 8, publication: "Architectural Digest", title: "The Homes That Defined NYC's Design Renaissance", date: "August 2025", url: "#" },
  { id: 9, publication: "The Real Deal", title: "Top Brokers Sound Off on NYC's Evolving Luxury Landscape", date: "July 2025", url: "#" },
  { id: 10, publication: "Robb Report", title: "The Advisors Redefining High-End Real Estate Service", date: "June 2025", url: "#" },
];

export default function PressPage() {
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
              Press Coverage
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-6 text-stone-400 text-lg max-w-xl leading-relaxed">
              Nicole Beauchamp&apos;s expertise featured in the world&apos;s leading publications.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Press Grid ─── */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
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
    </>
  );
}
