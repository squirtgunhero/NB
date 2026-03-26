import type { Metadata } from "next";
import Link from "next/link";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Tools and resources to empower your real estate decisions - from mortgage calculators to relocation guides.",
};

const resources = [
  {
    href: "/resources/mortgage-calculator",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.504-6h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.498-6h.008v.008H15.75v-.008zm0 2.25h.008v.008H15.75v-.008zM4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "Mortgage Calculator",
    description:
      "Estimate your monthly payments and explore different financing scenarios for your next property purchase.",
  },
  {
    href: "/resources/home-valuation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Home Valuation",
    description:
      "Discover your property's current market value with a complimentary, no-obligation analysis from Nikki.",
  },
  {
    href: "/resources/dream-home",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Dream Home Finder",
    description:
      "Tell us exactly what you're looking for and let Nikki curate a personalized selection of properties just for you.",
  },
  {
    href: "/resources/financing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Financing Guide",
    description:
      "Navigate the complexities of NYC real estate financing - from co-op boards to jumbo loans and international buyers.",
  },
  {
    href: "/resources/relocation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 10-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438a2.253 2.253 0 01-1.699 2.608l-.096.025z" />
      </svg>
    ),
    title: "Relocation Services",
    description:
      "Moving to New York City? Nikki offers a white-glove relocation experience covering every detail of your transition.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4 text-center">
              Knowledge & Tools
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory text-center">
              Resources &amp; Tools
            </h1>
            <p className="mt-6 text-lg text-stone-400 text-center max-w-2xl mx-auto leading-relaxed">
              Empowering you to make informed real estate decisions with expert
              insights, interactive tools, and personalized guidance.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-7xl px-6">
          <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <StaggerItem key={r.href}>
                <Link
                  href={r.href}
                  className="group block h-full rounded-[4px] border border-stone-200 bg-white p-8 transition-all duration-300 hover:border-champagne hover:shadow-lg"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne/10 text-champagne transition-colors duration-300 group-hover:bg-champagne group-hover:text-midnight">
                    {r.icon}
                  </div>
                  <h3 className="font-display text-xl mb-3 text-midnight">
                    {r.title}
                  </h3>
                  <p className="text-stone-500 text-[15px] leading-relaxed mb-6">
                    {r.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-champagne text-[13px] font-medium uppercase tracking-[0.08em] transition-all duration-200 group-hover:gap-3">
                    Explore
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
