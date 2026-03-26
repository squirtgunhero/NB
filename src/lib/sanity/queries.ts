// GROQ queries for Sanity CMS

export const FEATURED_PROPERTIES_QUERY = `
  *[_type == "property" && featured == true] | order(_createdAt desc)[0..5] {
    _id,
    title,
    slug,
    address,
    "neighborhood": neighborhood->name,
    "neighborhoodSlug": neighborhood->slug.current,
    price,
    bedrooms,
    bathrooms,
    squareFeet,
    propertyType,
    status,
    "image": images[0].asset->url,
    "images": images[].asset->url
  }
`;

export const ALL_PROPERTIES_QUERY = `
  *[_type == "property"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    address,
    "neighborhood": neighborhood->name,
    "neighborhoodSlug": neighborhood->slug.current,
    price,
    bedrooms,
    bathrooms,
    squareFeet,
    propertyType,
    status,
    featured,
    "image": images[0].asset->url
  }
`;

export const PROPERTY_BY_SLUG_QUERY = `
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    address,
    "neighborhood": neighborhood->{name, slug, "heroImage": heroImage.asset->url},
    price,
    bedrooms,
    bathrooms,
    squareFeet,
    propertyType,
    status,
    description,
    "images": images[].asset->url,
    "floorPlan": floorPlan.asset->url,
    virtualTourUrl,
    amenities,
    buildingName,
    yearBuilt
  }
`;

export const ALL_NEIGHBORHOODS_QUERY = `
  *[_type == "neighborhood"] | order(name asc) {
    _id,
    name,
    slug,
    vibeDescription,
    "heroImage": heroImage.asset->url,
    medianPrice,
    avgPricePerSqFt
  }
`;

export const NEIGHBORHOOD_BY_SLUG_QUERY = `
  *[_type == "neighborhood" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    vibeDescription,
    "heroImage": heroImage.asset->url,
    "galleryImages": galleryImages[].asset->url,
    medianPrice,
    avgPricePerSqFt,
    highlights,
    mapCenter,
    geojsonBoundary
  }
`;

export const BLOG_POSTS_QUERY = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    category,
    "heroImage": heroImage.asset->url,
    excerpt,
    readTime
  }
`;

export const BLOG_POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    category,
    "heroImage": heroImage.asset->url,
    excerpt,
    body,
    readTime
  }
`;

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    clientName,
    clientContext,
    quote,
    featured
  }
`;

export const PRESS_ITEMS_QUERY = `
  *[_type == "pressItem"] | order(date desc) {
    _id,
    title,
    publication,
    "publicationLogo": publicationLogo.asset->url,
    date,
    url,
    excerpt
  }
`;

export const PODCAST_EPISODES_QUERY = `
  *[_type == "podcastEpisode"] | order(publishedAt desc) {
    _id,
    title,
    episodeNumber,
    publishedAt,
    description,
    audioUrl,
    "coverImage": coverImage.asset->url,
    appleUrl,
    spotifyUrl
  }
`;

export const VIDEOS_QUERY = `
  *[_type == "video"] | order(publishedAt desc) {
    _id,
    title,
    category,
    videoUrl,
    "thumbnail": thumbnail.asset->url,
    publishedAt
  }
`;

export const SALE_RECORDS_QUERY = `
  *[_type == "saleRecord"] | order(saleDate desc) {
    _id,
    address,
    neighborhood,
    salePrice,
    saleDate,
    "image": image.asset->url
  }
`;
