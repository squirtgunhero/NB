"use client";

import Image from "next/image";
import {
  AnimateIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/animate-in";
import { SectionHeader, Button, Input } from "@/components/ui";

/* ─── Data ─── */

const VALUE_PROPS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sotheby's Global Network",
    description:
      "Access to an unrivaled network of affluent buyers across 83 countries and territories. Your property reaches qualified purchasers worldwide through the most prestigious brand in luxury real estate.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Marketing Expertise",
    description:
      "Museum-quality photography, cinematic video tours, bespoke digital campaigns, and placement in the world's most respected publications. Every property is presented as the masterpiece it is.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Pricing Strategy",
    description:
      "Data-driven market analysis combined with two decades of local expertise. We position your property to attract maximum interest and achieve optimal value in any market condition.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description: "In-depth discussion about your goals, timeline, and property. We evaluate your home and craft a tailored strategy.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Pricing Strategy",
    description: "Comprehensive market analysis to determine the optimal listing price that maximizes value and buyer interest.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Marketing Launch",
    description: "Professional photography, staging, video tours, and a multi-channel campaign across digital, print, and global platforms.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Showings & Open Houses",
    description: "Curated private showings and exclusive broker events. Every viewing is an experience that highlights your property's finest attributes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Negotiation",
    description: "Expert negotiation leveraging market data, buyer psychology, and decades of experience to secure the strongest possible terms.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Closing",
    description: "Seamless coordination through closing day. From contract to keys, every detail is managed with precision and care.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const MARKETING_FEATURES = [
  { title: "Professional Photography", description: "Museum-quality imagery that captures the essence and emotion of every space." },
  { title: "Cinematic Video Tours", description: "Cinematic walkthroughs produced by top-tier videographers with aerial drone footage." },
  { title: "Social Media Campaigns", description: "Targeted advertising across Instagram, Facebook, and LinkedIn reaching affluent audiences." },
  { title: "Print & Publications", description: "Placement in The Wall Street Journal, New York Times, Mansion Global, and more." },
  { title: "Global Distribution", description: "Syndication to 150+ luxury real estate portals spanning six continents." },
  { title: "Exclusive Events", description: "Private broker previews and curated open houses designed as immersive experiences." },
];

const PAST_SALES = [
  { image: "/images/properties/sale-1.svg", address: "432 Park Avenue, Unit 78A", price: "$12,500,000", date: "2025" },
  { image: "/images/properties/sale-2.svg", address: "15 Central Park West, Unit 24B", price: "$8,750,000", date: "2025" },
  { image: "/images/properties/sale-3.svg", address: "56 Leonard Street, PH", price: "$6,200,000", date: "2024" },
  { image: "/images/properties/sale-4.svg", address: "220 Central Park South, 42C", price: "$9,100,000", date: "2024" },
  { image: "/images/properties/sale-5.svg", address: "30 Park Place, Unit 65A", price: "$5,450,000", date: "2024" },
  { image: "/images/properties/sale-6.svg", address: "111 West 57th Street, 38E", price: "$7,800,000", date: "2023" },
];

/* ─── Page ─── */

export default function SellPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-midnight">
        {/* Skyline suggestion overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/80 to-midnight" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/sell-hero.svg"
            alt="New York City skyline"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-6">
              Selling with Sotheby&apos;s International Realty
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-ivory leading-[1.05]">
              Sell with Confidence.
              <br />
              Sell with Nikki.
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="mt-8 text-lg md:text-xl text-stone-400 max-w-xl mx-auto leading-relaxed">
              Maximize the value of your most important asset with a proven strategy, unparalleled marketing, and the prestige of the world&apos;s leading luxury brand.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.45}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#valuation" size="lg">
                Get Your Home Valuation
              </Button>
              <Button href="#process" variant="outlined" size="lg">
                Our Process
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Value Proposition ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="The Nikki Difference"
              title="Why Sellers Choose Us"
              description="A combination of global reach, local expertise, and a relentless commitment to achieving the best possible outcome for every client."
            />
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {VALUE_PROPS.map((item) => (
              <StaggerItem key={item.title}>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-14 h-14 border border-champagne/30 text-champagne mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-midnight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section id="process" className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="Our Process"
              title="From Listing to Closing"
              description="A refined, six-step process designed to deliver exceptional results at every stage."
            />
          </AnimateIn>

          {/* Desktop: horizontal timeline */}
          <div className="hidden md:block">
            <StaggerChildren className="relative">
              {/* Connecting line */}
              <div className="absolute top-[38px] left-[8%] right-[8%] h-[1px] bg-champagne/30" />

              <div className="grid grid-cols-6 gap-4">
                {PROCESS_STEPS.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="relative text-center">
                      <div className="relative z-10 inline-flex items-center justify-center w-[76px] h-[76px] rounded-full border-2 border-champagne bg-stone-50 text-champagne mb-6">
                        {step.icon}
                      </div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-champagne mb-2">
                        Step {step.number}
                      </p>
                      <h4 className="font-display text-lg text-midnight mb-2">
                        {step.title}
                      </h4>
                      <p className="text-[13px] text-stone-500 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden">
            <StaggerChildren className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute top-0 bottom-0 left-[18px] w-[1px] bg-champagne/30" />

              <div className="space-y-10">
                {PROCESS_STEPS.map((step) => (
                  <StaggerItem key={step.number}>
                    <div className="relative">
                      <div className="absolute -left-8 top-0 z-10 flex items-center justify-center w-9 h-9 rounded-full border-2 border-champagne bg-stone-50 text-champagne">
                        <span className="text-[11px] font-medium">{step.number}</span>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-display text-lg text-midnight mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[14px] text-stone-500 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── Marketing Showcase ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="Marketing"
              title="How We Present Your Property"
              description="Every property deserves a campaign worthy of its character. Our marketing approach combines artistry with analytics."
            />
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <AnimateIn direction="left">
              <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                <Image
                  src="/images/marketing-showcase.svg"
                  alt="Luxury property marketing materials"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-accent text-xl italic text-ivory">
                    &ldquo;Your property, presented as the masterpiece it is.&rdquo;
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Features grid */}
            <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.08}>
              {MARKETING_FEATURES.map((feat) => (
                <StaggerItem key={feat.title}>
                  <div className="p-5 border border-stone-200 bg-white">
                    <h4 className="font-display text-[17px] text-midnight mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-[13px] text-stone-500 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ── Home Valuation CTA ── */}
      <section id="valuation" className="py-20 md:py-28 bg-midnight">
        <div className="max-w-[800px] mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                Complimentary Valuation
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory">
                What&apos;s Your Home Worth?
              </h2>
              <p className="mt-4 text-stone-400 text-lg max-w-lg mx-auto leading-relaxed">
                Receive a detailed, no-obligation market analysis of your property prepared personally by Nikki.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            <form
              className="space-y-5 bg-stone-900/50 border border-stone-800 p-8 md:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  id="val-name"
                  label="Name"
                  placeholder="Your name"
                  className="!bg-midnight !border-stone-700 !text-ivory"
                />
                <Input
                  id="val-email"
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  className="!bg-midnight !border-stone-700 !text-ivory"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  id="val-phone"
                  label="Phone"
                  type="tel"
                  placeholder="(212) 555-0000"
                  className="!bg-midnight !border-stone-700 !text-ivory"
                />
                <Input
                  id="val-address"
                  label="Property Address"
                  placeholder="123 Park Avenue, NYC"
                  className="!bg-midnight !border-stone-700 !text-ivory"
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Get My Valuation
              </Button>
            </form>
          </AnimateIn>
        </div>
      </section>

      {/* ── Selected Sales History ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="Track Record"
              title="Selected Sales"
              description="A selection of recent transactions demonstrating consistent results across Manhattan's most coveted addresses."
            />
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PAST_SALES.map((sale) => (
              <StaggerItem key={sale.address}>
                <div className="group bg-white border border-stone-200 overflow-hidden">
                  <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                    <Image
                      src={sale.image}
                      alt={sale.address}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute top-4 right-4 bg-midnight/80 backdrop-blur-sm px-3 py-1">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-champagne">
                        Sold
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-display text-lg text-midnight mb-1">
                      {sale.price}
                    </p>
                    <p className="text-[14px] text-stone-500">{sale.address}</p>
                    <p className="text-[12px] text-stone-400 mt-1">{sale.date}</p>
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
