"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateIn } from "@/components/shared/animate-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/input";

const NEIGHBORHOODS = [
  "Upper East Side",
  "Upper West Side",
  "Tribeca",
  "SoHo",
  "West Village",
  "Chelsea",
  "Midtown",
  "Gramercy",
  "Financial District",
  "Brooklyn Heights",
  "DUMBO",
  "Williamsburg",
];

const MUST_HAVES = [
  "Doorman",
  "Gym / Fitness Center",
  "Rooftop / Terrace",
  "Parking / Garage",
  "In-Unit Laundry",
  "Home Office",
  "Storage",
  "Pet-Friendly",
  "Balcony",
  "Fireplace",
  "High Ceilings",
  "Outdoor Space",
];

const STEPS = ["Location & Budget", "Home Features", "Your Details"];

export default function DreamHomePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    neighborhoods: [] as string[],
    propertyType: "",
    budgetMin: "",
    budgetMax: "",
    bedrooms: "",
    bathrooms: "",
    mustHaves: [] as string[],
    timeline: "",
    name: "",
    email: "",
    phone: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleNeighborhood(n: string) {
    setForm((prev) => ({
      ...prev,
      neighborhoods: prev.neighborhoods.includes(n)
        ? prev.neighborhoods.filter((x) => x !== n)
        : [...prev.neighborhoods, n],
    }));
  }

  function toggleMustHave(m: string) {
    setForm((prev) => ({
      ...prev,
      mustHaves: prev.mustHaves.includes(m)
        ? prev.mustHaves.filter((x) => x !== m)
        : [...prev.mustHaves, m],
    }));
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
      <title>Find Your Dream Home | Nicole Beauchamp</title>

      {/* Hero */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4 text-center">
              Personalized Search
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory text-center">
              Find Your Dream Home
            </h1>
            <p className="mt-6 text-lg text-stone-400 text-center max-w-2xl mx-auto leading-relaxed">
              Share your vision and let Nikki curate a bespoke selection of
              properties tailored to your lifestyle.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateIn>
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
                  Your Search Has Begun!
                </h2>
                <p className="text-stone-500 text-lg max-w-md mx-auto">
                  Nikki is reviewing your preferences and will reach out soon
                  with a curated selection of properties just for you.
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
                        <div>
                          <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500 mb-3">
                            Preferred Neighborhoods
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {NEIGHBORHOODS.map((n) => (
                              <button
                                key={n}
                                type="button"
                                onClick={() => toggleNeighborhood(n)}
                                className={`px-3 py-1.5 text-[13px] rounded-full border transition-all duration-200 ${
                                  form.neighborhoods.includes(n)
                                    ? "bg-champagne text-midnight border-champagne"
                                    : "bg-white text-stone-500 border-stone-200 hover:border-champagne"
                                }`}
                              >
                                {n}
                              </button>
                            ))}
                          </div>
                        </div>

                        <Select
                          label="Property Type"
                          value={form.propertyType}
                          onChange={(e) => update("propertyType", e.target.value)}
                          options={[
                            { value: "", label: "Select type" },
                            { value: "condo", label: "Condominium" },
                            { value: "coop", label: "Co-op" },
                            { value: "townhouse", label: "Townhouse" },
                            { value: "rental", label: "Rental" },
                            { value: "any", label: "Open to All" },
                          ]}
                        />

                        <div className="grid grid-cols-2 gap-6">
                          <Select
                            label="Minimum Budget"
                            value={form.budgetMin}
                            onChange={(e) => update("budgetMin", e.target.value)}
                            options={[
                              { value: "", label: "No minimum" },
                              { value: "500000", label: "$500K" },
                              { value: "1000000", label: "$1M" },
                              { value: "2000000", label: "$2M" },
                              { value: "5000000", label: "$5M" },
                              { value: "10000000", label: "$10M" },
                              { value: "20000000", label: "$20M" },
                            ]}
                          />
                          <Select
                            label="Maximum Budget"
                            value={form.budgetMax}
                            onChange={(e) => update("budgetMax", e.target.value)}
                            options={[
                              { value: "", label: "No maximum" },
                              { value: "1000000", label: "$1M" },
                              { value: "2000000", label: "$2M" },
                              { value: "5000000", label: "$5M" },
                              { value: "10000000", label: "$10M" },
                              { value: "25000000", label: "$25M" },
                              { value: "50000000", label: "$50M+" },
                            ]}
                          />
                        </div>
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
                          <Select
                            label="Bedrooms"
                            value={form.bedrooms}
                            onChange={(e) => update("bedrooms", e.target.value)}
                            options={[
                              { value: "", label: "Any" },
                              { value: "studio", label: "Studio" },
                              { value: "1", label: "1" },
                              { value: "2", label: "2" },
                              { value: "3", label: "3" },
                              { value: "4", label: "4" },
                              { value: "5+", label: "5+" },
                            ]}
                          />
                          <Select
                            label="Bathrooms"
                            value={form.bathrooms}
                            onChange={(e) => update("bathrooms", e.target.value)}
                            options={[
                              { value: "", label: "Any" },
                              { value: "1", label: "1" },
                              { value: "2", label: "2" },
                              { value: "3", label: "3" },
                              { value: "4+", label: "4+" },
                            ]}
                          />
                        </div>

                        <div>
                          <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500 mb-3">
                            Must-Haves
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {MUST_HAVES.map((m) => (
                              <label
                                key={m}
                                className="flex items-center gap-2 cursor-pointer group"
                              >
                                <span
                                  className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200 ${
                                    form.mustHaves.includes(m)
                                      ? "bg-champagne border-champagne text-midnight"
                                      : "border-stone-300 group-hover:border-champagne"
                                  }`}
                                >
                                  {form.mustHaves.includes(m) && (
                                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                  )}
                                </span>
                                <input
                                  type="checkbox"
                                  checked={form.mustHaves.includes(m)}
                                  onChange={() => toggleMustHave(m)}
                                  className="sr-only"
                                />
                                <span className="text-[14px] text-stone-600">
                                  {m}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
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
                        <Select
                          label="Timeline"
                          value={form.timeline}
                          onChange={(e) => update("timeline", e.target.value)}
                          options={[
                            { value: "", label: "Select timeline" },
                            { value: "asap", label: "As soon as possible" },
                            { value: "1-3", label: "1 - 3 months" },
                            { value: "3-6", label: "3 - 6 months" },
                            { value: "6-12", label: "6 - 12 months" },
                            { value: "12+", label: "12+ months" },
                            { value: "browsing", label: "Just browsing" },
                          ]}
                        />
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
                      <Button type="submit">Start My Search</Button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
