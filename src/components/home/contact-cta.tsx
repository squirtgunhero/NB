"use client";

import { AnimateIn } from "@/components/shared/animate-in";
import { Input, Textarea, Select, Button } from "@/components/ui";

export function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-midnight">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Pitch */}
          <AnimateIn direction="left">
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
              Let&apos;s Connect
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ivory">
              Ready to Make Your Move?
            </h2>
            <p className="mt-6 text-stone-400 text-lg leading-relaxed max-w-md">
              Whether buying, selling, or exploring - let&apos;s start the
              conversation. Every great New York story begins with a single step.
            </p>
            <div className="mt-10 space-y-4 text-stone-400">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>650 Madison Avenue, New York, NY 10022</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:2126064152" className="hover:text-champagne transition-colors">
                  212.606.4152
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-champagne mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:nicole.beauchamp@sothebys.realty" className="hover:text-champagne transition-colors">
                  nicole.beauchamp@sothebys.realty
                </a>
              </div>
            </div>
          </AnimateIn>

          {/* Right - Form */}
          <AnimateIn direction="right">
            <form
              className="space-y-5 bg-stone-900/50 border border-stone-800 p-8 md:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  id="cta-name"
                  label="Name"
                  placeholder="Your name"
                  className="!bg-midnight !border-stone-700 !text-ivory"
                />
                <Input
                  id="cta-email"
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  className="!bg-midnight !border-stone-700 !text-ivory"
                />
              </div>
              <Input
                id="cta-phone"
                label="Phone"
                type="tel"
                placeholder="(212) 555-0000"
                className="!bg-midnight !border-stone-700 !text-ivory"
              />
              <Select
                id="cta-interest"
                label="I'm Interested In"
                className="!bg-midnight !border-stone-700 !text-ivory"
                options={[
                  { value: "", label: "Select one..." },
                  { value: "buying", label: "Buying a Property" },
                  { value: "selling", label: "Selling a Property" },
                  { value: "renting", label: "Renting" },
                  { value: "valuation", label: "Home Valuation" },
                  { value: "consultation", label: "General Consultation" },
                ]}
              />
              <Textarea
                id="cta-message"
                label="Message"
                placeholder="Tell me about what you're looking for..."
                className="!bg-midnight !border-stone-700 !text-ivory"
              />
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
