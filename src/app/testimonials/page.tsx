"use client";

import {
  AnimateIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/shared/animate-in";
import { SectionHeader, Button } from "@/components/ui";

/* ─── Data ─── */

const FEATURED_TESTIMONIAL = {
  quote:
    "In over 30 years of real estate transactions across the globe, I have never worked with a more knowledgeable, dedicated, and effective advisor. Nikki's understanding of the New York market is truly extraordinary, and her commitment to her clients is beyond anything I have ever experienced.",
  name: "Michael R.",
  context: "Upper East Side Purchase &mdash; International Executive",
};

const TESTIMONIALS = [
  {
    quote:
      "Nikki didn't just find us an apartment \u2014 she found us a home. Her understanding of what we needed before we could articulate it was remarkable. Moving from London to Manhattan felt seamless thanks to her guidance.",
    name: "Sarah & James L.",
    context: "International Relocation from London",
  },
  {
    quote:
      "Nikki's market intelligence and negotiation skills saved us over $400,000 on our purchase. She is simply in a league of her own. We felt completely confident every step of the way.",
    name: "Elena & David K.",
    context: "Tribeca Condo Buyers",
  },
  {
    quote:
      "From listing to close in 21 days, at full ask. Nikki's marketing strategy and buyer network are unmatched in this city. She made selling our home of 15 years feel effortless.",
    name: "Robert T.",
    context: "Central Park West Seller",
  },
  {
    quote:
      "Working with Nikki felt like having an insider. Her knowledge of New York City is encyclopedic, and her dedication is unparalleled. As a first-time buyer, I couldn't have asked for a better guide.",
    name: "Amanda C.",
    context: "First-time NYC Buyer",
  },
  {
    quote:
      "We relocated from Tokyo for my husband's work, knowing nothing about the New York market. Nikki took care of everything \u2014 from understanding our lifestyle needs to navigating co-op boards. She is exceptional.",
    name: "Yuki & Kenji M.",
    context: "International Relocation from Tokyo",
  },
  {
    quote:
      "Nikki sold our penthouse for 12% above asking price. Her staging recommendations and marketing campaign generated multiple offers within the first week. Truly world-class service.",
    name: "Victoria S.",
    context: "Upper West Side Penthouse Seller",
  },
  {
    quote:
      "As an investor, I need an advisor who understands numbers and timing. Nikki identified opportunities I would have missed and her analysis of building financials is meticulous. She's helped me acquire three properties.",
    name: "Jonathan H.",
    context: "Real Estate Investor",
  },
  {
    quote:
      "After a difficult divorce, I needed to sell quickly but didn't want to sacrifice value. Nikki handled everything with discretion, sensitivity, and professionalism. She got me an extraordinary price under challenging circumstances.",
    name: "Catherine P.",
    context: "Discreet Sale &mdash; Personal Transition",
  },
  {
    quote:
      "We were downsizing from our family home and the process felt overwhelming. Nikki made it not only painless but actually enjoyable. She found us a beautiful apartment that truly feels like the next chapter of our lives.",
    name: "Margaret & Henry D.",
    context: "Downsizing from Suburban Home",
  },
  {
    quote:
      "Nikki helped us find a rental in record time when our plans changed unexpectedly. Her responsiveness and ability to match us with the perfect space was incredible. We've since worked with her to buy.",
    name: "Priya & Arjun R.",
    context: "Rental, then Purchase",
  },
];

/* ─── Page ─── */

export default function TestimonialsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-6">
              Client Testimonials
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-ivory leading-[1.05]">
              What Our Clients Say
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="mt-8 text-lg md:text-xl text-stone-400 max-w-xl mx-auto leading-relaxed">
              The trust of our clients is our greatest achievement. Here are their stories, in their own words.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Featured Testimonial ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1000px] mx-auto px-6">
          <AnimateIn>
            <div className="relative bg-white border border-stone-200 p-10 md:p-16">
              {/* Large decorative quote mark */}
              <span className="font-display text-[120px] md:text-[160px] text-champagne/15 leading-none absolute top-4 left-6 md:top-6 md:left-10 select-none">
                &ldquo;
              </span>

              <div className="relative z-10">
                <p className="font-accent text-2xl md:text-3xl lg:text-4xl text-midnight italic leading-relaxed">
                  {FEATURED_TESTIMONIAL.quote}
                </p>
                <div className="mt-10 pt-6 border-t border-stone-200">
                  <p className="text-[15px] font-medium text-midnight">
                    {FEATURED_TESTIMONIAL.name}
                  </p>
                  <p
                    className="text-[14px] text-stone-400 mt-1"
                    dangerouslySetInnerHTML={{ __html: FEATURED_TESTIMONIAL.context }}
                  />
                </div>
              </div>

              {/* Champagne accent line */}
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-champagne/0 via-champagne to-champagne/0" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Testimonials Grid ── */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <AnimateIn>
            <SectionHeader
              label="More Stories"
              title="Trusted by Buyers, Sellers & Investors"
              description="Every client's journey is unique. What they share is the experience of working with someone who truly cares."
            />
          </AnimateIn>

          <StaggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            staggerDelay={0.08}
          >
            {TESTIMONIALS.map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <div className="bg-white border border-stone-200 p-8 md:p-10 h-full flex flex-col">
                  {/* Quote mark */}
                  <span className="font-display text-5xl text-champagne/30 leading-none block mb-4">
                    &ldquo;
                  </span>

                  <p className="font-accent text-lg md:text-xl text-midnight italic leading-relaxed flex-1">
                    {testimonial.quote}
                  </p>

                  <div className="mt-6 pt-4 border-t border-stone-200">
                    <p className="text-[14px] font-medium text-midnight">
                      {testimonial.name}
                    </p>
                    <p
                      className="text-[13px] text-stone-400 mt-0.5"
                      dangerouslySetInnerHTML={{ __html: testimonial.context }}
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-6">
              Your Journey Starts Here
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-6">
              Ready to Write Your Own Story?
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed max-w-lg mx-auto mb-10">
              Join the many clients who have entrusted their most important real estate decisions to Nikki. Your story deserves an extraordinary beginning.
            </p>
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
