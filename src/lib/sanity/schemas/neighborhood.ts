export const neighborhood = {
  name: "neighborhood",
  title: "Neighborhood",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "vibeDescription",
      title: "Vibe Description",
      type: "text",
      description: "Short description of what it feels like to live here",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "medianPrice",
      title: "Median Price",
      type: "number",
    },
    {
      name: "avgPricePerSqFt",
      title: "Avg Price Per SqFt",
      type: "number",
    },
    {
      name: "highlights",
      title: "Local Highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Name", type: "string" },
            {
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Dining", value: "dining" },
                  { title: "Culture", value: "culture" },
                  { title: "Parks", value: "parks" },
                  { title: "Shopping", value: "shopping" },
                  { title: "Nightlife", value: "nightlife" },
                ],
              },
            },
            { name: "description", title: "Description", type: "text" },
          ],
        },
      ],
    },
    {
      name: "mapCenter",
      title: "Map Center",
      type: "geopoint",
    },
    {
      name: "geojsonBoundary",
      title: "GeoJSON Boundary",
      type: "text",
      description: "GeoJSON polygon for neighborhood boundary on map",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "heroImage",
    },
  },
};
