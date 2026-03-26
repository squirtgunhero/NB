import type { Metadata } from "next";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Financing Guide",
  description:
    "Navigate NYC real estate financing - from mortgage types and co-op vs condo differences to first-time buyer and international buyer programs.",
};

const mortgageTypes = [
  {
    title: "Fixed-Rate Mortgage",
    description:
      "The most straightforward option. Your interest rate remains constant for the entire loan term, providing predictable monthly payments. Ideal for buyers who plan to stay in their home long-term.",
    points: [
      "Rate stays the same for 15 or 30 years",
      "Predictable, stable monthly payments",
      "Best when interest rates are low",
      "Most popular choice for primary residences",
    ],
  },
  {
    title: "Adjustable-Rate Mortgage (ARM)",
    description:
      "Starts with a lower introductory rate that adjusts periodically based on market conditions. Common structures include 5/1, 7/1, and 10/1 ARMs.",
    points: [
      "Lower initial interest rate than fixed-rate",
      "Rate adjusts after initial fixed period",
      "Ideal for short-term ownership (5-10 years)",
      "Rate caps limit how much it can increase",
    ],
  },
  {
    title: "Jumbo Loan",
    description:
      "Required for loan amounts exceeding conforming limits ($766,550 in most areas, higher in NYC). The standard for luxury real estate transactions in Manhattan.",
    points: [
      "For loans above conforming limits",
      "Typically requires 20%+ down payment",
      "Higher credit score requirements",
      "Both fixed and adjustable options available",
    ],
  },
];

const coopVsCondo = [
  {
    label: "Feature",
    coop: "Co-op",
    condo: "Condo",
  },
  {
    label: "Ownership",
    coop: "Shares in a corporation + proprietary lease",
    condo: "Real property deed to your unit",
  },
  {
    label: "Board Approval",
    coop: "Required - interview process is standard",
    condo: "Right of first refusal only (less restrictive)",
  },
  {
    label: "Financing",
    coop: "Stricter requirements, often 20-50% down",
    condo: "More flexible, wider lender options",
  },
  {
    label: "Monthly Costs",
    coop: "Maintenance (includes property tax, building expenses)",
    condo: "Common charges + separate property tax bill",
  },
  {
    label: "Subletting",
    coop: "Often restricted or limited",
    condo: "Generally more lenient",
  },
  {
    label: "Closing Costs",
    coop: "Typically lower (no title insurance, no mortgage recording tax on most)",
    condo: "Higher (title insurance, mortgage recording tax)",
  },
];

export default function FinancingGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4 text-center">
              Expert Guidance
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ivory text-center">
              Financing Guide
            </h1>
            <p className="mt-6 text-lg text-stone-400 text-center max-w-2xl mx-auto leading-relaxed">
              Understanding your financing options is the first step toward
              securing your dream property in New York City.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Types of Mortgages */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            label="Mortgage Options"
            title="Types of Mortgages"
            description="Each financing structure serves different needs. Understanding the distinctions helps you choose the right path."
          />
          <StaggerChildren className="grid gap-8 md:grid-cols-3">
            {mortgageTypes.map((type) => (
              <StaggerItem key={type.title}>
                <div className="h-full bg-white border border-stone-200 rounded-[4px] p-8 hover:border-champagne transition-colors duration-300">
                  <h3 className="font-display text-xl text-midnight mb-4">
                    {type.title}
                  </h3>
                  <p className="text-[14px] text-stone-500 leading-relaxed mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[14px] text-stone-600"
                      >
                        <span className="text-champagne mt-0.5 shrink-0">
                          &#10003;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Co-op vs Condo */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader
            label="NYC Specific"
            title="Co-op vs. Condo Financing"
            description="New York City's unique real estate landscape means understanding the critical differences between co-ops and condominiums."
          />
          <AnimateIn>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-champagne">
                    <th className="py-4 pr-6 text-[12px] font-medium uppercase tracking-[0.1em] text-stone-500 w-[140px]">
                      Feature
                    </th>
                    <th className="py-4 pr-6 text-[12px] font-medium uppercase tracking-[0.1em] text-champagne">
                      Co-op
                    </th>
                    <th className="py-4 text-[12px] font-medium uppercase tracking-[0.1em] text-champagne">
                      Condo
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coopVsCondo.slice(1).map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-stone-100"
                    >
                      <td className="py-4 pr-6 text-[13px] font-medium text-midnight">
                        {row.label}
                      </td>
                      <td className="py-4 pr-6 text-[14px] text-stone-500">
                        {row.coop}
                      </td>
                      <td className="py-4 text-[14px] text-stone-500">
                        {row.condo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* First-Time Buyers */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimateIn>
              <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                Getting Started
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-midnight mb-6">
                First-Time Buyer Programs
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                Purchasing your first home in New York City is an exciting
                milestone. Several programs exist to make the process more
                accessible, even in the luxury market.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "FHA Loans",
                    desc: "Government-backed loans with lower down payment requirements (3.5%) and more flexible credit standards.",
                  },
                  {
                    title: "SONYMA Programs",
                    desc: "New York State offers below-market interest rates and down payment assistance for qualifying first-time buyers.",
                  },
                  {
                    title: "HomeFirst Down Payment Assistance",
                    desc: "NYC program providing up to $100,000 in down payment assistance for eligible buyers.",
                  },
                  {
                    title: "First-Time Buyer Tax Credits",
                    desc: "Mortgage interest deductions and potential tax credits can significantly reduce your overall cost of ownership.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 shrink-0" />
                    <div>
                      <p className="text-midnight font-medium text-[15px]">
                        {item.title}
                      </p>
                      <p className="text-stone-500 text-[14px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
                Global Buyers
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-midnight mb-6">
                International Buyer Financing
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                International buyers are a significant part of Manhattan&rsquo;s
                luxury market. While financing is available, the landscape
                differs from domestic purchases.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Foreign National Loans",
                    desc: "Select lenders offer mortgages to non-U.S. citizens, typically requiring 30-50% down payment and additional documentation.",
                  },
                  {
                    title: "International Banking Relationships",
                    desc: "Major global banks like HSBC, Citibank, and others may leverage your existing relationship for favorable terms.",
                  },
                  {
                    title: "Cash Purchases",
                    desc: "Many international buyers opt for all-cash transactions, which can be advantageous in competitive markets and co-op purchases.",
                  },
                  {
                    title: "ITIN Mortgages",
                    desc: "Buyers with an Individual Taxpayer Identification Number (ITIN) may qualify for specialized loan programs.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 shrink-0" />
                    <div>
                      <p className="text-midnight font-medium text-[15px]">
                        {item.title}
                      </p>
                      <p className="text-stone-500 text-[14px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-midnight">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateIn>
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-champagne mb-4">
              Ready to Take the Next Step?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory mb-6">
              Let&rsquo;s Discuss Your Financing Options
            </h2>
            <p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Every buyer&rsquo;s situation is unique. Nikki can connect you
              with trusted mortgage professionals who specialize in NYC luxury
              real estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/resources/mortgage-calculator" variant="outlined" size="lg">
                Try the Calculator
              </Button>
              <Button href="/contact" variant="filled" size="lg">
                Speak with Nikki
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
