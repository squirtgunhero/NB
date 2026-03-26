import type { Metadata } from "next";
import { PropertyListingClient } from "./property-listing-client";

export const metadata: Metadata = {
  title: "Luxury Properties",
  description:
    "Browse Nicole Beauchamp's curated collection of luxury properties across Manhattan's most prestigious neighborhoods.",
};

/* ─── Placeholder data ─── */
export interface PropertyCard {
  slug: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: "Condo" | "Co-op" | "Townhouse" | "Rental";
  neighborhood: string;
  image: "/images/placeholder-property-1.svg";
  image2: "/images/placeholder-property-2.svg";
}

const PROPERTIES: PropertyCard[] = [
  {
    slug: "432-park-avenue-ph",
    address: "432 Park Avenue, Penthouse",
    price: 45000000,
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8255,
    type: "Condo",
    neighborhood: "Midtown",
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
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
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
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
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
  },
  {
    slug: "ues-townhouse-64th",
    address: "163 East 64th Street",
    price: 22000000,
    bedrooms: 7,
    bathrooms: 8,
    sqft: 8500,
    type: "Townhouse",
    neighborhood: "Upper East Side",
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
  },
  {
    slug: "central-park-west-coop",
    address: "115 Central Park West, 12C",
    price: 12500000,
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    type: "Co-op",
    neighborhood: "Upper West Side",
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
  },
  {
    slug: "soho-cast-iron-loft",
    address: "72 Mercer Street, PH",
    price: 15900000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 4800,
    type: "Condo",
    neighborhood: "SoHo",
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
  },
  {
    slug: "gramercy-park-coop",
    address: "36 Gramercy Park East, 8W",
    price: 8750000,
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2800,
    type: "Co-op",
    neighborhood: "Gramercy",
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
  },
  {
    slug: "west-village-townhouse",
    address: "82 Charles Street",
    price: 19500000,
    bedrooms: 5,
    bathrooms: 5,
    sqft: 6100,
    type: "Townhouse",
    neighborhood: "West Village",
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
  },
  {
    slug: "hudson-yards-rental",
    address: "35 Hudson Yards, 72A",
    price: 25000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1850,
    type: "Rental",
    neighborhood: "Hudson Yards",
    image: "/images/placeholder-property-1.svg",
    image2: "/images/placeholder-property-2.svg",
  },
];

export default function PropertiesPage() {
  return <PropertyListingClient properties={PROPERTIES} />;
}
