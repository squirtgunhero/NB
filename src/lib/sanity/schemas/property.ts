export const property = {
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "neighborhood",
      title: "Neighborhood",
      type: "reference",
      to: [{ type: "neighborhood" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
    },
    {
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
    },
    {
      name: "squareFeet",
      title: "Square Feet",
      type: "number",
    },
    {
      name: "propertyType",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "Condo", value: "Condo" },
          { title: "Co-op", value: "Co-op" },
          { title: "Townhouse", value: "Townhouse" },
          { title: "Rental", value: "Rental" },
        ],
      },
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Active", value: "Active" },
          { title: "Under Contract", value: "Under Contract" },
          { title: "Sold", value: "Sold" },
        ],
      },
      initialValue: "Active",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "floorPlan",
      title: "Floor Plan",
      type: "image",
    },
    {
      name: "virtualTourUrl",
      title: "Virtual Tour URL",
      type: "url",
    },
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "buildingName",
      title: "Building Name",
      type: "string",
    },
    {
      name: "yearBuilt",
      title: "Year Built",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "address",
      media: "images.0",
    },
  },
};
