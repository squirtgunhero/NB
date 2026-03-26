import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatFullPrice, formatPrice } from "@/lib/utils";
import { PropertyDetailClient } from "./property-detail-client";

/* ─── Placeholder data ─── */
interface PropertyDetail {
  slug: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: "Condo" | "Co-op" | "Townhouse" | "Rental";
  neighborhood: string;
  neighborhoodSlug: string;
  images: string[];
  description: string[];
  amenities: string[];
  buildingDetails: { label: string; value: string }[];
}

const PROPERTIES: PropertyDetail[] = [
  {
    slug: "432-park-avenue-ph",
    address: "432 Park Avenue, Penthouse",
    price: 45000000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8255,
    type: "Condo",
    neighborhood: "Midtown",
    neighborhoodSlug: "midtown",
    images: [
      "/images/placeholder-property-1.svg",
      "/images/placeholder-property-2.svg",
      "/images/placeholder-property-3.svg",
      "/images/placeholder-property-4.svg",
      "/images/placeholder-property-1.svg",
    ],
    description: [
      "Perched atop one of the tallest residential buildings in the Western Hemisphere, this extraordinary penthouse offers 360-degree views of Central Park, the Hudson River, and the Manhattan skyline. Every room is bathed in natural light through oversized 10-by-10-foot windows.",
      "The 8,255-square-foot residence features six gracious bedrooms, seven marble-clad bathrooms, and a private library. The great room spans over 50 feet with soaring 12-foot 6-inch ceilings, creating a gallery-like atmosphere for art and entertaining.",
      "Finishes include quarter-sawn white oak floors, book-matched marble slabs in every bathroom, custom millwork throughout, and a chef's kitchen outfitted with Miele appliances and a climate-controlled wine room.",
    ],
    amenities: [
      "24-Hour Doorman & Concierge",
      "Private Resident Restaurant",
      "75-Foot Indoor Pool",
      "Full-Service Spa & Sauna",
      "Fitness Center by The Wright Fit",
      "Private Screening Room",
      "Outdoor Terrace & Garden",
      "Children's Playroom",
      "Boardroom & Conference Room",
      "Valet Parking",
      "Storage Available",
      "Pet Friendly",
    ],
    buildingDetails: [
      { label: "Building", value: "432 Park Avenue" },
      { label: "Year Built", value: "2015" },
      { label: "Total Floors", value: "96" },
      { label: "Units", value: "104" },
      { label: "Developer", value: "Macklowe Properties / CIM Group" },
      { label: "Architect", value: "Rafael Viñoly" },
      { label: "Common Charges", value: "$13,750/mo" },
      { label: "RE Taxes", value: "$16,200/mo" },
    ],
  },
  {
    slug: "one-57-unit-87",
    address: "157 West 57th Street, Unit 87",
    price: 28500000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6240,
    type: "Condo",
    neighborhood: "Midtown West",
    neighborhoodSlug: "midtown-west",
    images: [
      "/images/placeholder-property-2.svg",
      "/images/placeholder-property-1.svg",
      "/images/placeholder-property-3.svg",
      "/images/placeholder-property-4.svg",
    ],
    description: [
      "Occupying the entire 87th floor of One57, this magnificent full-floor residence offers unobstructed views of Central Park from every room. Designed with the world's most discerning collectors and entertainers in mind.",
      "The 6,240-square-foot home features five bedrooms and five bathrooms, along with a grand salon, formal dining room, and an eat-in chef's kitchen with top-of-the-line Gaggenau appliances.",
      "Interiors showcase floor-to-ceiling windows, heated radiant floors throughout, custom motorized shades, and a master suite with dual walk-in closets, a five-fixture marble bath, and a private sitting room.",
    ],
    amenities: [
      "24-Hour Doorman & Concierge",
      "Park Hyatt Hotel Services",
      "56-Foot Indoor Pool",
      "Screening Room",
      "Fitness Center & Spa",
      "Library & Lounge",
      "Children's Playroom",
      "Valet Parking",
      "Pet Friendly",
      "Storage Available",
    ],
    buildingDetails: [
      { label: "Building", value: "One57" },
      { label: "Year Built", value: "2014" },
      { label: "Total Floors", value: "90" },
      { label: "Units", value: "94" },
      { label: "Developer", value: "Extell Development" },
      { label: "Architect", value: "Christian de Portzamparc" },
      { label: "Common Charges", value: "$8,900/mo" },
      { label: "RE Taxes", value: "$11,500/mo" },
    ],
  },
  {
    slug: "tribeca-loft-greenwich",
    address: "443 Greenwich Street, Loft 5A",
    price: 18750000,
    bedrooms: 4,
    bathrooms: 4,
    sqft: 5100,
    type: "Condo",
    neighborhood: "Tribeca",
    neighborhoodSlug: "tribeca",
    images: [
      "/images/placeholder-property-3.svg",
      "/images/placeholder-property-1.svg",
      "/images/placeholder-property-2.svg",
      "/images/placeholder-property-4.svg",
    ],
    description: [
      "A stunning full-floor loft in one of Tribeca's most coveted condominium conversions. This 5,100-square-foot residence blends original industrial character - soaring ceilings, exposed brick, and oversized arched windows - with impeccable contemporary design.",
      "The open living and dining area is anchored by a sculptural fireplace and flows into a custom chef's kitchen with honed marble countertops, Sub-Zero and Wolf appliances, and a walk-in pantry.",
      "Four generously proportioned bedrooms each feature en-suite bathrooms with radiant heated floors. The primary suite includes a dressing room, a freestanding soaking tub, and a walk-in rain shower clad in Calacatta marble.",
    ],
    amenities: [
      "24-Hour Doorman",
      "Private Parking Garage",
      "60-Foot Indoor Pool",
      "Fitness Center",
      "Children's Playroom",
      "Roof Terrace",
      "Bike Storage",
      "Cold Storage",
      "Pet Friendly",
      "Storage Available",
    ],
    buildingDetails: [
      { label: "Building", value: "443 Greenwich" },
      { label: "Year Built", value: "2017" },
      { label: "Total Floors", value: "8" },
      { label: "Units", value: "53" },
      { label: "Developer", value: "Aptitude Development" },
      { label: "Architect", value: "CetraRuddy" },
      { label: "Common Charges", value: "$6,200/mo" },
      { label: "RE Taxes", value: "$7,800/mo" },
    ],
  },
];

function getProperty(slug: string) {
  return PROPERTIES.find((p) => p.slug === slug) ?? null;
}

function getRelated(slug: string) {
  return PROPERTIES.filter((p) => p.slug !== slug).slice(0, 3);
}

/* ─── Static Params ─── */
export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

/* ─── Metadata ─── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) {
    return { title: "Property Not Found" };
  }
  return {
    title: `${property.address} | ${formatFullPrice(property.price)}`,
    description: property.description[0],
    openGraph: {
      title: `${property.address} - ${formatPrice(property.price)}`,
      description: property.description[0],
      images: property.images[0] ? [property.images[0]] : [],
    },
  };
}

/* ─── Page ─── */
export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const related = getRelated(slug);

  return (
    <PropertyDetailClient
      property={property}
      related={related.map((r) => ({
        slug: r.slug,
        address: r.address,
        price: r.price,
        bedrooms: r.bedrooms,
        bathrooms: r.bathrooms,
        sqft: r.sqft,
        type: r.type,
        neighborhood: r.neighborhood,
        image: r.images[0],
      }))}
    />
  );
}
