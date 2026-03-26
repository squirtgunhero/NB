import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/shared/animate-in";
import { Badge, Button } from "@/components/ui";

/* ─── Data ─── */
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  body: string[];
  pullQuote?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    slug: "manhattan-luxury-market-q1-2026",
    title: "Manhattan Luxury Market: What Q1 2026 Tells Us About the Year Ahead",
    excerpt: "The first quarter of 2026 has delivered surprising momentum to Manhattan's luxury segment.",
    category: "Market Insights",
    date: "March 18, 2026",
    readTime: "6 min read",
    image: "/images/placeholder-property-1.svg",
    pullQuote: "The luxury market does not simply recover — it reinvents itself with each cycle, rewarding those who understand the subtleties of timing and positioning.",
    body: [
      "The first quarter of 2026 has delivered surprising momentum to Manhattan's luxury segment, with signed contracts up 18% year-over-year in the $5 million-plus category. This resurgence is not accidental — it reflects a convergence of stabilizing interest rates, pent-up demand from sidelined buyers, and a renewed appetite for trophy assets.",
      "For buyers who have been waiting, the window of opportunity is narrowing. Inventory in prime neighborhoods like Tribeca, the Upper East Side, and Central Park South remains constrained, with only 4.2 months of supply at the $10M+ level. This scarcity is driving competitive bidding scenarios that we have not seen since 2021.",
      "New development closings are contributing significantly to the numbers. Projects like the final units at 220 Central Park South and the newly launched residences at 1228 Madison Avenue are commanding premium prices, often above their initial ask. The international buyer has returned in force, particularly from Western Europe and the Middle East.",
      "What does this mean for sellers? Pricing strategy remains paramount. Properties that are accurately priced from day one are seeing multiple offers within the first two weeks. Overpriced listings, however, continue to languish — the luxury buyer is sophisticated and data-informed.",
      "Looking ahead to the remainder of 2026, I anticipate continued strength in the ultra-luxury segment, particularly for properties offering outdoor space, privacy, and architectural distinction. The penthouse market, in particular, shows no signs of cooling.",
      "For personalized guidance on navigating this market — whether buying or selling — I welcome you to reach out for a confidential consultation.",
    ],
  },
  {
    slug: "art-of-staging-luxury-home",
    title: "The Art of Staging a Luxury Home: Lessons from Sotheby's Finest Sales",
    excerpt: "Why the right staging strategy can add millions to your final sale price.",
    category: "Seller Tips",
    date: "March 10, 2026",
    readTime: "5 min read",
    image: "/images/placeholder-property-2.svg",
    pullQuote: "Staging is not about decorating — it is about crafting an aspirational lifestyle that the buyer can immediately envision as their own.",
    body: [
      "In the world of luxury real estate, first impressions are not just important — they are everything. The moment a prospective buyer crosses the threshold, they are not simply evaluating square footage and finishes. They are imagining a life.",
      "Having represented some of Manhattan's most extraordinary properties, I have witnessed firsthand how strategic staging can transform a listing's trajectory. A beautifully staged home does not just photograph better — it sells faster and for more.",
      "The key principles are restraint, quality, and narrative. Every piece of furniture, every artwork, every carefully placed object should serve the story of the home. In a Tribeca loft, that might mean industrial-chic furnishings that honor the architecture. In an Upper East Side classic six, it could mean understated elegance that lets the pre-war details shine.",
      "Color palettes matter enormously. I recommend neutral foundations — warm ivories, soft grays, natural textures — accented with one or two sophisticated tones. The goal is to create a sense of calm luxury that appeals to the broadest possible audience.",
      "Lighting is the unsung hero of staging. Replace harsh overhead fixtures with layered lighting — table lamps, floor lamps, and accent lighting that create warmth and dimension. Natural light should be maximized through sheer window treatments.",
      "Finally, do not underestimate the power of scent and sound. A subtly fragrant candle, fresh flowers, and soft ambient music during showings create a multi-sensory experience that lingers in the buyer's memory long after they have left.",
    ],
  },
  {
    slug: "tribeca-neighborhood-guide",
    title: "Living in Tribeca: The Definitive Insider's Guide",
    excerpt: "From cobblestone streets to world-class dining, discover why Tribeca remains Manhattan's most coveted neighborhood.",
    category: "Neighborhood Spotlights",
    date: "March 3, 2026",
    readTime: "8 min read",
    image: "/images/placeholder-property-1.svg",
    pullQuote: "Tribeca offers something increasingly rare in Manhattan — a true sense of neighborhood, where world-class culture and quiet residential streets coexist in perfect balance.",
    body: [
      "Tribeca — the Triangle Below Canal — has evolved from a quiet industrial district into Manhattan's most prestigious residential neighborhood. With its cobblestone streets, converted loft buildings, and an almost village-like atmosphere, it offers a lifestyle that is uniquely its own.",
      "The architecture is a defining feature. Massive cast-iron and brick warehouse buildings have been meticulously converted into sprawling residences with soaring ceilings, oversized windows, and raw industrial details. New construction has been equally impressive, with buildings like 56 Leonard and 30 Park Place setting new standards for luxury.",
      "The dining scene is extraordinary. From the Michelin-starred Frenchette to the beloved neighborhood institution Bubby's, Tribeca caters to every palate. The Saturday farmers' market on Greenwich Street is a weekly ritual for residents.",
      "For families, the neighborhood has become increasingly attractive. Excellent public schools, the expansive Hudson River Park, and a genuine sense of community make it an ideal place to raise children — all while remaining at the center of Manhattan's cultural life.",
      "Real estate in Tribeca commands premium prices, with the median sale price for luxury properties exceeding $5 million. But for those who call it home, the value proposition extends far beyond the financial — it is a way of life.",
      "If you are considering making Tribeca your home, I would be delighted to share my intimate knowledge of the neighborhood and its available inventory.",
    ],
  },
  {
    slug: "first-time-luxury-buyer-guide",
    title: "Your First Luxury Purchase: A Step-by-Step Guide to Buying Above $5M",
    excerpt: "Navigating the nuances of high-end real estate with confidence.",
    category: "Buyer Tips",
    date: "February 24, 2026",
    readTime: "7 min read",
    image: "/images/placeholder-property-2.svg",
    pullQuote: "In luxury real estate, the right advisor does not just find you a property — they protect your interests, negotiate with precision, and ensure the entire experience reflects the standard you deserve.",
    body: [
      "Purchasing your first luxury property in Manhattan is a milestone that deserves expert guidance. The process differs significantly from a standard transaction, with nuances that can make or break your experience.",
      "First, assemble your team. Beyond a knowledgeable real estate advisor, you will need a real estate attorney experienced in high-value transactions, a mortgage broker or private banker for financing, and potentially a tax advisor to structure the purchase optimally.",
      "Understanding the difference between condos and co-ops is essential. Condos offer more flexibility — no board approval, easier subletting, foreign buyer friendly. Co-ops often provide more value per square foot but come with stricter financial requirements and a board interview process.",
      "Financing at the luxury level operates differently. Jumbo loans, portfolio lending, and asset-based lending each have distinct advantages. Many of my clients work with private banks like JPMorgan Private Bank or Goldman Sachs to secure favorable terms.",
      "Due diligence is critical. This includes a thorough building inspection, review of the offering plan and building financials, assessment of any pending litigation, and understanding of the building's reserve fund and capital improvement plans.",
      "Finally, be prepared for closing costs. In New York City, buyers should budget approximately 2-5% for condos and 1-2% for co-ops, plus the mansion tax which starts at 1% for properties over $1 million and scales up to 3.9% for properties over $25 million.",
    ],
  },
  {
    slug: "best-rooftop-terraces-nyc",
    title: "The 10 Best Rooftop Terraces in New York City Real Estate",
    excerpt: "Outdoor space is the ultimate luxury. These properties boast terraces that redefine city living.",
    category: "NYC Living",
    date: "February 15, 2026",
    readTime: "4 min read",
    image: "/images/placeholder-property-1.svg",
    pullQuote: "A private rooftop terrace in Manhattan is not merely outdoor space — it is a sanctuary above the city, where the skyline becomes your living room wall.",
    body: [
      "In a city of eight million, private outdoor space is the ultimate luxury. A rooftop terrace transforms a Manhattan residence from exceptional to extraordinary, offering a personal retreat above the urban landscape.",
      "The most coveted terraces share certain qualities: generous proportions, thoughtful landscaping, and unobstructed views. Whether it is a wraparound terrace overlooking Central Park or an intimate garden perched above a Tribeca townhouse, these spaces redefine what it means to live in New York.",
      "Design trends for luxury terraces have evolved dramatically. Today's premier outdoor spaces feature full outdoor kitchens, climate-controlled plunge pools, automated shade systems, and professional-grade lighting that extends the usable hours well into the evening.",
      "Landscaping has become an art form. Renowned garden designers create lush, four-season environments using mature plantings, custom irrigation systems, and carefully selected hardscaping that complements the home's interior aesthetic.",
      "From a valuation perspective, a well-designed terrace can add 25-50% to a property's price per square foot. For a 2,000 square foot terrace on a premium building, this can translate to millions in additional value.",
      "Whether you are searching for a property with extraordinary outdoor space or considering how to enhance your existing terrace, I can connect you with the right resources and opportunities.",
    ],
  },
  {
    slug: "spring-2026-market-forecast",
    title: "Spring 2026 Market Forecast: Inventory, Pricing & What to Expect",
    excerpt: "With interest rates stabilizing and new developments delivering, here is what to anticipate this season.",
    category: "Market Insights",
    date: "February 8, 2026",
    readTime: "6 min read",
    image: "/images/placeholder-property-2.svg",
    pullQuote: "Spring 2026 presents a rare alignment of favorable conditions for both buyers and sellers — the key is understanding which side of the equation benefits most in your specific market segment.",
    body: [
      "As we enter spring 2026, the Manhattan real estate market is poised for what may be its most dynamic season in years. Several converging factors are creating conditions that both buyers and sellers should understand.",
      "Inventory levels have finally begun to normalize after years of scarcity. New listings are up 12% compared to spring 2025, providing buyers with more choices — particularly in the $3-10 million range where demand has been strongest.",
      "Pricing remains firm in prime locations. Despite the increase in supply, well-positioned properties in sought-after buildings continue to command strong prices. The average price per square foot in Manhattan's luxury segment has risen 6% year-over-year.",
      "New development continues to reshape the skyline. Several highly anticipated projects are now taking reservations, including a Pritzker Prize-winning architect's first residential tower on the Upper East Side and a boutique collection of townhomes in the West Village.",
      "The rental market is also influencing sales activity. With average luxury rents exceeding $15,000 per month, many renters are doing the math and concluding that ownership makes financial sense — particularly with mortgage rates trending downward.",
      "My advice for spring: buyers should act with confidence but diligence, sellers should price accurately from day one, and everyone should work with an advisor who understands the granular dynamics of their target market.",
    ],
  },
];

function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post?.title ?? "Blog Post",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-stone-500 text-lg">Post not found.</p>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* ─── Hero Image ─── */}
      <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-midnight">
        <Image
          src={post.image}
          alt={post.title}
          fill
          unoptimized
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
      </section>

      {/* ─── Article ─── */}
      <article className="bg-ivory">
        <div className="mx-auto max-w-[720px] px-6 -mt-32 relative z-10 pb-20">
          <AnimateIn>
            <Badge variant="champagne" className="mb-4">{post.category}</Badge>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-ivory mb-6 leading-tight">
              {post.title}
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <div className="flex items-center gap-4 text-stone-400 text-[12px] uppercase tracking-wider mb-12">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-champagne" />
              <span>{post.readTime}</span>
            </div>
          </AnimateIn>

          {/* Author Card */}
          <AnimateIn delay={0.15}>
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-stone-200">
              <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center">
                <span className="font-display text-champagne text-lg">NB</span>
              </div>
              <div>
                <p className="font-medium text-midnight text-sm">Nicole Beauchamp</p>
                <p className="text-stone-400 text-[12px]">
                  Licensed Associate Real Estate Broker, Sotheby&apos;s International Realty
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Body */}
          <AnimateIn delay={0.2}>
            <div className="prose-luxury">
              {post.body.map((paragraph, i) => (
                <div key={i}>
                  <p className="text-stone-600 text-base md:text-[17px] leading-[1.85] mb-6">
                    {paragraph}
                  </p>
                  {/* Pull quote after second paragraph */}
                  {i === 1 && post.pullQuote && (
                    <blockquote className="my-10 pl-6 border-l-2 border-champagne">
                      <p className="font-accent text-xl md:text-2xl italic text-midnight leading-relaxed">
                        &ldquo;{post.pullQuote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Share */}
          <AnimateIn delay={0.25}>
            <div className="mt-12 pt-8 border-t border-stone-200">
              <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-stone-400 mb-4">
                Share This Article
              </p>
              <div className="flex gap-3">
                {["LinkedIn", "X / Twitter", "Facebook", "Email"].map((platform) => (
                  <button
                    key={platform}
                    className="px-4 py-2 text-[11px] font-medium uppercase tracking-wider border border-stone-200 text-stone-500 hover:border-champagne hover:text-champagne transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </article>

      {/* ─── Related Posts ─── */}
      <section className="bg-white py-20 md:py-28 border-t border-stone-100">
        <div className="mx-auto max-w-7xl px-6">
          <AnimateIn>
            <h2 className="font-display text-2xl md:text-3xl text-midnight mb-12 text-center">
              Continue Reading
            </h2>
          </AnimateIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rp) => (
              <StaggerItem key={rp.slug}>
                <Link href={`/blog/${rp.slug}`} className="group block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 mb-4">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <Badge variant="champagne" className="mb-2">{rp.category}</Badge>
                  <h3 className="font-display text-lg text-midnight group-hover:text-champagne transition-colors mb-1">
                    {rp.title}
                  </h3>
                  <p className="text-stone-400 text-[12px] uppercase tracking-wider">
                    {rp.date} &middot; {rp.readTime}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
