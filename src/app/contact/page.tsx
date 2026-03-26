"use client";

import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeader, Button, Input, Textarea, Select } from "@/components/ui";

/* ─── Page ─── */

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="py-16 md:py-20 bg-midnight">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mt-6 text-lg text-stone-400 max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re buying, selling, or simply exploring your options in New York City real estate, I&apos;m here to help.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Split: Info + Form ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <AnimateIn direction="left">
              <div>
                <SectionHeader
                  label="Contact Information"
                  title="Reach Out"
                  align="left"
                  className="mb-10"
                />

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-champagne/30 text-champagne">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-stone-400 mb-1">Office</p>
                      <p className="text-midnight font-medium">650 Madison Avenue</p>
                      <p className="text-stone-500">New York, NY 10022</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-champagne/30 text-champagne">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-stone-400 mb-1">Phone</p>
                      <a href="tel:2126064152" className="text-midnight font-medium hover:text-champagne transition-colors">
                        212.606.4152
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-champagne/30 text-champagne">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-stone-400 mb-1">Email</p>
                      <a href="mailto:nicole.beauchamp@sothebys.realty" className="text-midnight font-medium hover:text-champagne transition-colors">
                        nicole.beauchamp@sothebys.realty
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-champagne/30 text-champagne">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-stone-400 mb-1">Office Hours</p>
                      <p className="text-midnight">Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM</p>
                      <p className="text-stone-500">Saturday: 10:00 AM &ndash; 4:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-stone-200">
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-stone-400 mb-4">
                    Follow Nikki
                  </p>
                  <div className="flex gap-4">
                    {[
                      { label: "Instagram", href: "https://instagram.com/nikkibeauchamp", icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" },
                      { label: "LinkedIn", href: "https://linkedin.com/in/nicolebeauchamp", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" },
                      { label: "Twitter/X", href: "https://x.com/NikkiBeauchamp", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center border border-stone-200 text-stone-500 hover:border-champagne hover:text-champagne transition-colors"
                        aria-label={social.label}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-10">
                  <div className="aspect-[16/9] bg-stone-200 border border-stone-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-8 h-8 text-stone-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-[13px] text-stone-400">650 Madison Avenue, New York, NY 10022</p>
                      <p className="text-[11px] text-stone-400 mt-1">Map embed placeholder</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Right - Contact Form */}
            <AnimateIn direction="right">
              <div>
                <SectionHeader
                  label="Send a Message"
                  title="How Can I Help?"
                  align="left"
                  className="mb-10"
                />

                <form
                  className="space-y-5 bg-white border border-stone-200 p-8 md:p-10"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Input
                    id="contact-name"
                    label="Name"
                    placeholder="Your full name"
                  />
                  <Input
                    id="contact-email"
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                  />
                  <Input
                    id="contact-phone"
                    label="Phone"
                    type="tel"
                    placeholder="(212) 555-0000"
                  />
                  <Select
                    id="contact-subject"
                    label="Subject"
                    options={[
                      { value: "", label: "Select a topic..." },
                      { value: "buying", label: "Buying" },
                      { value: "selling", label: "Selling" },
                      { value: "renting", label: "Renting" },
                      { value: "valuation", label: "Valuation" },
                      { value: "general", label: "General Inquiry" },
                    ]}
                  />
                  <Textarea
                    id="contact-message"
                    label="Message"
                    placeholder="Tell me about what you're looking for or how I can help..."
                    rows={5}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── Prefer to Call? ── */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
              Direct Line
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-midnight mb-6">
              Prefer to Call?
            </h2>
            <a
              href="tel:2126064152"
              className="inline-block font-display text-4xl md:text-5xl lg:text-6xl text-champagne hover:text-champagne-light transition-colors"
            >
              212.606.4152
            </a>
            <p className="mt-6 text-stone-500 leading-relaxed max-w-md mx-auto">
              Available Monday through Friday, 9 AM to 6 PM, and Saturday 10 AM to 4 PM. For urgent matters, don&apos;t hesitate to reach out anytime.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── Calendly Booking ── */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
              Schedule a Meeting
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-4">
              Book a Consultation
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed max-w-lg mx-auto mb-10">
              Select a time that works best for you. I look forward to discussing your real estate goals.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.15}>
            {/* Calendly placeholder */}
            <div className="bg-stone-900/50 border border-stone-800 p-12 md:p-16">
              <div className="flex flex-col items-center gap-4">
                <svg className="w-12 h-12 text-champagne/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-stone-400 text-[15px]">Calendly scheduling widget</p>
                <p className="text-stone-500 text-[13px]">Embed will appear here</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
