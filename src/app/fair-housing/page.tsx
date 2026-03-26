import type { Metadata } from "next";
import { AnimateIn } from "@/components/shared/animate-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fair Housing Notice",
  description:
    "Nicole Beauchamp is committed to the principles of the Fair Housing Act. Equal Housing Opportunity for all.",
};

export default function FairHousingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <div className="flex flex-col items-center">
              {/* Equal Housing Logo */}
              <div className="w-20 h-20 border-2 border-champagne rounded-sm flex flex-col items-center justify-center mb-8">
                <svg
                  className="w-10 h-10 text-champagne"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3L2 12h3v9h14v-9h3L12 3zm0 2.84L18 11v8H6v-8l6-5.16z" />
                  <text
                    x="12"
                    y="17"
                    textAnchor="middle"
                    fontSize="5"
                    fontWeight="bold"
                    fill="currentColor"
                  >
                    =
                  </text>
                </svg>
                <span className="text-[7px] text-champagne font-bold uppercase tracking-wider mt-0.5">
                  Equal Housing
                </span>
                <span className="text-[6px] text-champagne uppercase tracking-wider">
                  Opportunity
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl text-ivory text-center">
                Fair Housing Notice
              </h1>
              <p className="mt-4 text-stone-400 text-center max-w-2xl leading-relaxed">
                We are committed to providing equal housing opportunities
                for all, in compliance with federal, state, and local fair
                housing laws.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateIn>
            <div className="space-y-10">
              {/* Equal Housing Statement */}
              <div className="bg-white border border-stone-200 rounded-[4px] p-8 md:p-10">
                <h2 className="font-display text-2xl text-midnight mb-4">
                  Equal Housing Opportunity Statement
                </h2>
                <p className="text-stone-500 leading-relaxed">
                  Nicole Beauchamp and Sotheby&rsquo;s International Realty are
                  pledged to the letter and spirit of U.S. policy for the
                  achievement of equal housing opportunity throughout the
                  nation. We encourage and support an affirmative advertising
                  and marketing program in which there are no barriers to
                  obtaining housing because of race, color, religion, sex,
                  handicap, familial status, national origin, sexual
                  orientation, gender identity, marital status, partnership
                  status, age, lawful source of income, or any other legally
                  protected characteristic.
                </p>
              </div>

              {/* Fair Housing Act */}
              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  The Fair Housing Act
                </h2>
                <p className="text-stone-500 leading-relaxed mb-4">
                  The Fair Housing Act (Title VIII of the Civil Rights Act of
                  1968, as amended) prohibits discrimination in the sale,
                  rental, and financing of housing based on:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {[
                    "Race",
                    "Color",
                    "Religion",
                    "Sex",
                    "National Origin",
                    "Familial Status",
                    "Disability",
                    "And More",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white border border-stone-200 rounded-[4px] p-3 text-center text-[14px] text-midnight font-medium"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-stone-500 leading-relaxed">
                  The Act covers most housing. In very limited circumstances,
                  the Act exempts owner-occupied buildings with no more than
                  four units, single-family houses sold or rented by the owner
                  without the use of a broker, and housing operated by
                  religious organizations and private clubs that limit occupancy
                  to members.
                </p>
              </div>

              {/* NYC Human Rights Law */}
              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  New York City Human Rights Law
                </h2>
                <p className="text-stone-500 leading-relaxed mb-4">
                  The New York City Human Rights Law is one of the most
                  comprehensive civil rights laws in the nation. It provides
                  even broader protections than federal and state law,
                  prohibiting discrimination in housing based on:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {[
                    "Race and color",
                    "Religion and creed",
                    "National origin",
                    "Gender and gender identity",
                    "Sexual orientation",
                    "Age",
                    "Disability",
                    "Marital and partnership status",
                    "Lawful occupation",
                    "Lawful source of income",
                    "Citizenship status",
                    "Familial status",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-[14px] text-stone-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-stone-500 leading-relaxed">
                  The NYC Commission on Human Rights enforces the City Human
                  Rights Law and provides education and outreach to promote
                  equal opportunity and prevent discrimination.
                </p>
              </div>

              {/* What Constitutes Discrimination */}
              <div>
                <h2 className="font-display text-2xl text-midnight mb-4">
                  Examples of Prohibited Conduct
                </h2>
                <p className="text-stone-500 leading-relaxed mb-4">
                  Under fair housing laws, it is illegal for anyone engaged in
                  the sale, rental, or financing of housing to:
                </p>
                <ul className="space-y-2 ml-2">
                  {[
                    "Refuse to sell, rent, or negotiate housing",
                    "Set different terms, conditions, or privileges for the sale or rental of a dwelling",
                    "Falsely deny that housing is available for inspection, sale, or rental",
                    "Provide different housing services or facilities",
                    "Deny access to or membership in any real estate-related service or organization",
                    "Make, print, or publish discriminatory statements or advertisements",
                    "Threaten, coerce, intimidate, or interfere with anyone exercising fair housing rights",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] text-stone-500"
                    >
                      <span className="text-champagne mt-0.5 shrink-0">
                        &#10005;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How to File a Complaint */}
              <div className="bg-midnight rounded-[4px] p-8 md:p-10 text-ivory">
                <h2 className="font-display text-2xl mb-4">
                  How to File a Complaint
                </h2>
                <p className="text-stone-400 leading-relaxed mb-6">
                  If you believe you have been the victim of housing
                  discrimination, you have the right to file a complaint. The
                  following agencies can assist you:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-champagne font-medium text-[15px] mb-1">
                      U.S. Department of Housing and Urban Development (HUD)
                    </h3>
                    <p className="text-stone-400 text-[14px]">
                      Phone: 1-800-669-9777 (toll free)
                    </p>
                    <p className="text-stone-400 text-[14px]">
                      Online:{" "}
                      <a
                        href="https://www.hud.gov/fairhousing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-champagne hover:underline"
                      >
                        www.hud.gov/fairhousing
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-champagne font-medium text-[15px] mb-1">
                      New York State Division of Human Rights
                    </h3>
                    <p className="text-stone-400 text-[14px]">
                      Phone: (718) 741-8400
                    </p>
                    <p className="text-stone-400 text-[14px]">
                      Online:{" "}
                      <a
                        href="https://dhr.ny.gov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-champagne hover:underline"
                      >
                        dhr.ny.gov
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-champagne font-medium text-[15px] mb-1">
                      NYC Commission on Human Rights
                    </h3>
                    <p className="text-stone-400 text-[14px]">
                      Phone: 311 or (212) 306-7450
                    </p>
                    <p className="text-stone-400 text-[14px]">
                      Online:{" "}
                      <a
                        href="https://www.nyc.gov/humanrights"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-champagne hover:underline"
                      >
                        nyc.gov/humanrights
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Commitment */}
              <div className="text-center py-6">
                <p className="text-stone-500 leading-relaxed max-w-xl mx-auto">
                  Nicole Beauchamp is committed to upholding these principles
                  in every aspect of her practice. If you have questions or
                  concerns, please do not hesitate to reach out.
                </p>
                <div className="mt-6">
                  <Button href="/contact" variant="filled">
                    Contact Nicole
                  </Button>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
