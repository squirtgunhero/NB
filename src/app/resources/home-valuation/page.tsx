"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateIn } from "@/components/shared/animate-in";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Select } from "@/components/ui/input";

const STEPS = ["Property Details", "Home Specifications", "Your Information"];

export default function HomeValuationPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    address: "",
    unit: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    yearBuilt: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    if (step < 2) setStep(step + 1);
  }
  function prev() {
    if (step > 0) setStep(step - 1);
  }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const slideVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <>
      <title>Home Valuation | Nicole Beauchamp</title>

      {/* Hero */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4 text-center">
              Complimentary Analysis
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory text-center">
              What&rsquo;s Your Home Worth?
            </h1>
            <p className="mt-6 text-lg text-stone-400 text-center max-w-2xl mx-auto leading-relaxed">
              Receive a detailed, no-obligation market analysis from one of
              Manhattan&rsquo;s most experienced luxury advisors.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Form */}
            <AnimateIn className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-16 h-16 rounded-full bg-champagne/15 text-champagne flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="font-display text-3xl text-midnight mb-4">
                    Thank You!
                  </h2>
                  <p className="text-stone-500 text-lg max-w-md mx-auto">
                    Your valuation request has been received. Nikki will be in
                    touch within 24 hours with your personalized market analysis.
                  </p>
                </motion.div>
              ) : (
                <div className="bg-white border border-stone-200 rounded-[4px] p-8 md:p-10">
                  {/* Progress */}
                  <div className="mb-10">
                    <div className="flex items-center justify-between mb-4">
                      {STEPS.map((label, i) => (
                        <div key={label} className="flex items-center gap-2">
                          <span
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-medium transition-colors duration-300 ${
                              i <= step
                                ? "bg-champagne text-midnight"
                                : "bg-stone-100 text-stone-400"
                            }`}
                          >
                            {i + 1}
                          </span>
                          <span className="hidden sm:inline text-[12px] uppercase tracking-[0.08em] text-stone-500">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-champagne"
                        animate={{ width: `${((step + 1) / 3) * 100}%` }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>

                  <form onSubmit={submit}>
                    <AnimatePresence mode="wait">
                      {step === 0 && (
                        <motion.div
                          key="step-0"
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <Input
                            label="Property Address"
                            placeholder="e.g. 432 Park Avenue"
                            value={form.address}
                            onChange={(e) => update("address", e.target.value)}
                            required
                          />
                          <Input
                            label="Unit / Apt"
                            placeholder="e.g. PH-A"
                            value={form.unit}
                            onChange={(e) => update("unit", e.target.value)}
                          />
                          <Select
                            label="Property Type"
                            value={form.propertyType}
                            onChange={(e) => update("propertyType", e.target.value)}
                            options={[
                              { value: "", label: "Select property type" },
                              { value: "condo", label: "Condominium" },
                              { value: "coop", label: "Co-op" },
                              { value: "townhouse", label: "Townhouse" },
                              { value: "single-family", label: "Single Family" },
                              { value: "multi-family", label: "Multi-Family" },
                              { value: "other", label: "Other" },
                            ]}
                          />
                        </motion.div>
                      )}

                      {step === 1 && (
                        <motion.div
                          key="step-1"
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div className="grid grid-cols-2 gap-6">
                            <Input
                              label="Bedrooms"
                              type="number"
                              min={0}
                              placeholder="3"
                              value={form.bedrooms}
                              onChange={(e) => update("bedrooms", e.target.value)}
                            />
                            <Input
                              label="Bathrooms"
                              type="number"
                              min={0}
                              step={0.5}
                              placeholder="2.5"
                              value={form.bathrooms}
                              onChange={(e) => update("bathrooms", e.target.value)}
                            />
                          </div>
                          <Input
                            label="Approximate Square Footage"
                            type="number"
                            placeholder="2,500"
                            value={form.sqft}
                            onChange={(e) => update("sqft", e.target.value)}
                          />
                          <Input
                            label="Year Built"
                            type="number"
                            placeholder="1920"
                            value={form.yearBuilt}
                            onChange={(e) => update("yearBuilt", e.target.value)}
                          />
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step-2"
                          variants={slideVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <Input
                            label="Full Name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={(e) => update("name", e.target.value)}
                            required
                          />
                          <Input
                            label="Email"
                            type="email"
                            placeholder="you@email.com"
                            value={form.email}
                            onChange={(e) => update("email", e.target.value)}
                            required
                          />
                          <Input
                            label="Phone"
                            type="tel"
                            placeholder="(212) 555-0100"
                            value={form.phone}
                            onChange={(e) => update("phone", e.target.value)}
                          />
                          <Textarea
                            label="Additional Notes"
                            placeholder="Any details that may help with your valuation..."
                            value={form.notes}
                            onChange={(e) => update("notes", e.target.value)}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-10">
                      {step > 0 ? (
                        <button
                          type="button"
                          onClick={prev}
                          className="text-[13px] font-medium uppercase tracking-[0.08em] text-stone-500 hover:text-midnight transition-colors"
                        >
                          Back
                        </button>
                      ) : (
                        <span />
                      )}
                      {step < 2 ? (
                        <Button type="button" onClick={next}>
                          Continue
                        </Button>
                      ) : (
                        <Button type="submit">Get My Valuation</Button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </AnimateIn>

            {/* Sidebar */}
            <AnimateIn delay={0.2} className="lg:col-span-1">
              <div className="space-y-8">
                <div className="bg-white border border-stone-200 rounded-[4px] p-6">
                  <h3 className="font-display text-lg text-midnight mb-3">
                    Why Get a Valuation?
                  </h3>
                  <ul className="space-y-3 text-[14px] text-stone-500 leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-champagne mt-0.5">&#10003;</span>
                      Understand your property&rsquo;s true market position
                    </li>
                    <li className="flex gap-2">
                      <span className="text-champagne mt-0.5">&#10003;</span>
                      Make informed decisions about selling or refinancing
                    </li>
                    <li className="flex gap-2">
                      <span className="text-champagne mt-0.5">&#10003;</span>
                      Discover equity you may not know you have
                    </li>
                    <li className="flex gap-2">
                      <span className="text-champagne mt-0.5">&#10003;</span>
                      Plan your next move with confidence
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-stone-200 rounded-[4px] p-6">
                  <h3 className="font-display text-lg text-midnight mb-3">
                    What to Expect
                  </h3>
                  <p className="text-[14px] text-stone-500 leading-relaxed">
                    Nikki will personally review your property details and
                    prepare a comprehensive market analysis. You&rsquo;ll
                    receive comparable sales data, current market trends, and a
                    professional opinion of value - typically within 24&ndash;48 hours.
                  </p>
                </div>

                <div className="bg-midnight rounded-[4px] p-6 text-ivory">
                  <h3 className="font-display text-lg mb-3">
                    Nikki&rsquo;s Track Record
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-accent text-2xl text-champagne">
                        $2B+
                      </p>
                      <p className="text-[12px] text-stone-400 uppercase tracking-wider">
                        Career Sales
                      </p>
                    </div>
                    <div>
                      <p className="font-accent text-2xl text-champagne">
                        20+
                      </p>
                      <p className="text-[12px] text-stone-400 uppercase tracking-wider">
                        Years Experience
                      </p>
                    </div>
                    <div>
                      <p className="font-accent text-2xl text-champagne">
                        #1
                      </p>
                      <p className="text-[12px] text-stone-400 uppercase tracking-wider">
                        Digital Strategy
                      </p>
                    </div>
                    <div>
                      <p className="font-accent text-2xl text-champagne">
                        Global
                      </p>
                      <p className="text-[12px] text-stone-400 uppercase tracking-wider">
                        Network
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
