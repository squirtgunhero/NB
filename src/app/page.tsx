import { Hero } from "@/components/home/hero";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { AboutTeaser } from "@/components/home/about-teaser";
import { NeighborhoodPreview } from "@/components/home/neighborhood-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { TestimonialsRibbon } from "@/components/home/testimonials-ribbon";
import { ContactCTA } from "@/components/home/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutTeaser />
      <NeighborhoodPreview />
      <BlogPreview />
      <TestimonialsRibbon />
      <ContactCTA />
    </>
  );
}
