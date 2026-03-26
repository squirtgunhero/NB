"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/shared/animate-in";

const TESTIMONIALS = [
  {
    quote:
      "Nikki didn't just find us an apartment — she found us a home. Her understanding of what we needed before we could articulate it was remarkable.",
    name: "Sarah & James L.",
    context: "Relocated from London",
  },
  {
    quote:
      "In over 30 years of real estate transactions across the globe, I have never worked with a more knowledgeable, dedicated, and effective advisor.",
    name: "Michael R.",
    context: "Upper East Side Purchase",
  },
  {
    quote:
      "Nikki's market intelligence and negotiation skills saved us over $400,000 on our purchase. She is simply in a league of her own.",
    name: "Elena & David K.",
    context: "Tribeca Condo Buyers",
  },
  {
    quote:
      "From listing to close in 21 days, at full ask. Nikki's marketing strategy and buyer network are unmatched in this city.",
    name: "Robert T.",
    context: "Central Park West Seller",
  },
  {
    quote:
      "Working with Nikki felt like having an insider. Her knowledge of New York City is encyclopedic, and her dedication is unparalleled.",
    name: "Amanda C.",
    context: "First-time NYC Buyer",
  },
];

export function TestimonialsRibbon() {
  // Duplicate for seamless infinite scroll
  const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 md:py-24 bg-champagne/10 overflow-hidden">
      <AnimateIn>
        <div className="text-center mb-12">
          <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
            Client Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-midnight">
            Words That Matter
          </h2>
        </div>
      </AnimateIn>

      {/* Auto-scrolling ticker */}
      <div className="relative">
        <motion.div
          animate={{ x: [0, -50 * TESTIMONIALS.length + "%"] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex gap-8 w-max"
          style={{ willChange: "transform" }}
        >
          {duplicated.map((t, i) => (
            <div
              key={i}
              className="w-[360px] md:w-[480px] flex-shrink-0 bg-white p-8 md:p-10 border border-stone-200"
            >
              {/* Quote mark */}
              <span className="font-display text-5xl text-champagne/40 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="font-accent text-lg md:text-xl text-midnight italic leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-6 pt-4 border-t border-stone-200">
                <p className="text-[14px] font-medium text-midnight">
                  {t.name}
                </p>
                <p className="text-[13px] text-stone-400 mt-0.5">
                  {t.context}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
