import type { Metadata } from "next";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Relocation Services",
  description:
    "Relocating to New York City? Nicole Beauchamp offers white-glove relocation services covering every detail of your transition.",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Neighborhood Selection",
    description:
      "Every neighborhood in New York has its own personality. We match your lifestyle preferences, commute needs, and family requirements to find the perfect area for you.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "School Research",
    description:
      "From top-rated public schools to prestigious private institutions, we provide comprehensive school research including admissions guidance and proximity mapping.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: "Temporary Housing",
    description:
      "Need a place to stay while you search? We connect you with luxury furnished rentals, corporate housing, and boutique hotels for seamless transitions.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.06a1.5 1.5 0 01-.61-2.03l.76-1.26a1.5 1.5 0 012.03-.61l2.7 1.62a.75.75 0 00.77 0l2.7-1.62a1.5 1.5 0 012.03.61l.76 1.26a1.5 1.5 0 01-.61 2.03l-5.1 3.06a1.5 1.5 0 01-1.53 0zM12 9V3m0 18v-6" />
      </svg>
    ),
    title: "Utility & Services Setup",
    description:
      "From Con Edison and internet providers to building staff introductions and local services, we ensure everything is ready before you arrive.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Lifestyle Integration",
    description:
      "Restaurant recommendations, fitness clubs, cultural institutions, social networks — we help you feel at home in New York from day one.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We start with a detailed conversation about your needs, timeline, budget, and lifestyle preferences to understand exactly what you're looking for.",
  },
  {
    number: "02",
    title: "Neighborhood Matching",
    description:
      "Based on your requirements, we curate a shortlist of neighborhoods and provide comprehensive area guides including commute times, amenities, and lifestyle factors.",
  },
  {
    number: "03",
    title: "Property Tours",
    description:
      "Experience personalized property tours with expert commentary on building quality, investment potential, and neighborhood trajectory.",
  },
  {
    number: "04",
    title: "Seamless Move-In",
    description:
      "From negotiation to closing and beyond, we manage every detail of your transition to ensure a smooth and stress-free move to New York City.",
  },
];

export default function RelocationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4 text-center">
              White-Glove Service
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory text-center">
              Relocating to New York City?
            </h1>
            <p className="mt-6 text-lg text-stone-400 text-center max-w-2xl mx-auto leading-relaxed">
              Whether you&rsquo;re moving across the country or across the
              globe, Nikki provides comprehensive relocation services to make
              your transition seamless.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            label="Comprehensive Support"
            title="Relocation Services"
            description="Every aspect of your move is covered — from finding the right neighborhood to settling into your new life."
          />
          <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="h-full bg-white border border-stone-200 rounded-[4px] p-8 hover:border-champagne transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full bg-champagne/10 text-champagne flex items-center justify-center mb-5">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-xl text-midnight mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-stone-500 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="The Journey"
            title="Your Relocation Process"
            description="A clear, structured approach to making your move as effortless as possible."
          />
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-stone-200 hidden md:block" />

            <div className="space-y-12">
              {processSteps.map((ps, i) => (
                <AnimateIn key={ps.number} delay={i * 0.1}>
                  <div className="flex gap-8 items-start">
                    <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-champagne text-midnight flex items-center justify-center font-accent text-xl font-semibold">
                      {ps.number}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-display text-xl text-midnight mb-2">
                        {ps.title}
                      </h3>
                      <p className="text-[15px] text-stone-500 leading-relaxed max-w-xl">
                        {ps.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Section */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-4xl px-6">
          <AnimateIn>
            <div className="bg-midnight rounded-[4px] p-10 md:p-14">
              <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                Global Expertise
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
                International Relocation
              </h2>
              <p className="text-stone-400 leading-relaxed mb-8">
                As a globally connected advisor with Sotheby&rsquo;s
                International Realty, Nikki has extensive experience guiding
                international buyers and families through the unique
                complexities of relocating to New York City.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="bg-stone-900/50 rounded-[4px] p-6">
                  <h4 className="text-champagne font-display text-lg mb-2">
                    Visa Considerations
                  </h4>
                  <p className="text-[14px] text-stone-400 leading-relaxed">
                    We connect you with experienced immigration attorneys who
                    can advise on visa types and their impact on property
                    ownership.
                  </p>
                </div>
                <div className="bg-stone-900/50 rounded-[4px] p-6">
                  <h4 className="text-champagne font-display text-lg mb-2">
                    International Banking
                  </h4>
                  <p className="text-[14px] text-stone-400 leading-relaxed">
                    Navigate cross-border transactions, foreign currency
                    requirements, and establishing U.S. banking relationships
                    with trusted partners.
                  </p>
                </div>
                <div className="bg-stone-900/50 rounded-[4px] p-6">
                  <h4 className="text-champagne font-display text-lg mb-2">
                    Tax Implications
                  </h4>
                  <p className="text-[14px] text-stone-400 leading-relaxed">
                    Understanding FIRPTA, state/city taxes, and treaty
                    benefits is critical. We refer you to international tax
                    specialists.
                  </p>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
              Start Your Journey
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
              Ready to Make New York Home?
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you&rsquo;re relocating for work, family, or a fresh
              start, Nikki is here to make the transition seamless. Let&rsquo;s
              start the conversation.
            </p>
            <Button href="/contact" variant="filled" size="lg">
              Schedule a Consultation
            </Button>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
