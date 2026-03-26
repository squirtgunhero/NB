"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { AnimateIn } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// export metadata via a separate layout or head — "use client" pages can't export metadata directly,
// so we set the title with a simple <title> in a useEffect-free approach
// Actually, Next.js supports generateMetadata only in server components, so we add a head tag.

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
}

function formatCurrencyFull(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(2000000);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState<15 | 30>(30);

  const downPayment = Math.round(homePrice * (downPaymentPct / 100));
  const loanAmount = homePrice - downPayment;

  const calc = useMemo(() => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let monthlyPI: number;
    if (monthlyRate === 0) {
      monthlyPI = loanAmount / numPayments;
    } else {
      monthlyPI =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    }

    const monthlyTax = (homePrice * 0.012) / 12;
    const monthlyInsurance = 200;
    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance;
    const totalInterest = monthlyPI * numPayments - loanAmount;
    const totalCost = monthlyPI * numPayments + monthlyTax * numPayments + monthlyInsurance * numPayments;

    return {
      monthlyPI,
      monthlyTax,
      monthlyInsurance,
      totalMonthly,
      totalInterest,
      totalCost,
    };
  }, [homePrice, downPaymentPct, interestRate, loanTerm, loanAmount]);

  const piPct = (calc.monthlyPI / calc.totalMonthly) * 100;
  const taxPct = (calc.monthlyTax / calc.totalMonthly) * 100;
  const insPct = (calc.monthlyInsurance / calc.totalMonthly) * 100;

  return (
    <>
      <title>Mortgage Calculator | Nicole Beauchamp</title>

      {/* Hero */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4 text-center">
              Financial Tools
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory text-center">
              Mortgage Calculator
            </h1>
            <p className="mt-6 text-lg text-stone-400 text-center max-w-2xl mx-auto leading-relaxed">
              Estimate your monthly payments and explore different financing
              scenarios to plan your next move with confidence.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Inputs */}
            <AnimateIn className="lg:col-span-3 space-y-10">
              {/* Home Price */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500">
                    Home Price
                  </label>
                  <span className="text-midnight font-display text-lg">
                    {formatCurrency(homePrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min={100000}
                  max={50000000}
                  step={50000}
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full accent-champagne h-2 bg-stone-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>$100K</span>
                  <span>$50M</span>
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500">
                    Down Payment
                  </label>
                  <span className="text-midnight font-display text-lg">
                    {downPaymentPct}% &mdash; {formatCurrency(downPayment)}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  step={1}
                  value={downPaymentPct}
                  onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                  className="w-full accent-champagne h-2 bg-stone-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>0%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500">
                    Interest Rate
                  </label>
                  <span className="text-midnight font-display text-lg">
                    {interestRate.toFixed(2)}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={15}
                  step={0.125}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-champagne h-2 bg-stone-200 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>1%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <label className="block text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500 mb-3">
                  Loan Term
                </label>
                <div className="flex gap-4">
                  {([15, 30] as const).map((term) => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`flex-1 py-3 text-center text-[14px] font-medium tracking-wide border rounded-[4px] transition-all duration-200 ${
                        loanTerm === term
                          ? "bg-champagne text-midnight border-champagne"
                          : "bg-white text-stone-500 border-stone-200 hover:border-champagne"
                      }`}
                    >
                      {term} Years
                    </button>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Results */}
            <AnimateIn delay={0.2} className="lg:col-span-2">
              <div className="sticky top-8 rounded-[4px] bg-midnight p-8 text-ivory">
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-2">
                  Estimated Monthly Payment
                </p>
                <p className="font-accent text-5xl md:text-6xl text-ivory mb-8">
                  {formatCurrencyFull(calc.totalMonthly)}
                </p>

                {/* Breakdown Bar */}
                <div className="flex h-3 rounded-full overflow-hidden mb-6">
                  <div
                    className="bg-champagne transition-all duration-500"
                    style={{ width: `${piPct}%` }}
                  />
                  <div
                    className="bg-champagne-light transition-all duration-500"
                    style={{ width: `${taxPct}%` }}
                  />
                  <div
                    className="bg-stone-500 transition-all duration-500"
                    style={{ width: `${insPct}%` }}
                  />
                </div>

                {/* Breakdown List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-champagne" />
                      <span className="text-[14px] text-stone-400">
                        Principal &amp; Interest
                      </span>
                    </div>
                    <span className="text-[14px] text-ivory">
                      {formatCurrencyFull(calc.monthlyPI)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-champagne-light" />
                      <span className="text-[14px] text-stone-400">
                        Property Tax (est. 1.2%)
                      </span>
                    </div>
                    <span className="text-[14px] text-ivory">
                      {formatCurrencyFull(calc.monthlyTax)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-stone-500" />
                      <span className="text-[14px] text-stone-400">
                        Insurance (est.)
                      </span>
                    </div>
                    <span className="text-[14px] text-ivory">
                      {formatCurrencyFull(calc.monthlyInsurance)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-stone-700 pt-6 space-y-3 mb-8">
                  <div className="flex justify-between text-[14px]">
                    <span className="text-stone-400">Loan Amount</span>
                    <span className="text-ivory">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-stone-400">Total Interest Paid</span>
                    <span className="text-ivory">{formatCurrency(calc.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between text-[14px]">
                    <span className="text-stone-400">Total Cost</span>
                    <span className="text-ivory font-medium">{formatCurrency(calc.totalCost)}</span>
                  </div>
                </div>

                <Button href="/contact" variant="filled" size="lg" className="w-full justify-center">
                  Get Pre-Approved
                </Button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
