export const saleRecord = {
  name: "saleRecord",
  title: "Sale Record",
  type: "document",
  fields: [
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "neighborhood",
      title: "Neighborhood",
      type: "string",
    },
    {
      name: "salePrice",
      title: "Sale Price",
      type: "number",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "saleDate",
      title: "Sale Date",
      type: "date",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
  orderings: [
    {
      title: "Sale Date, New",
      name: "saleDateDesc",
      by: [{ field: "saleDate", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "address",
      subtitle: "salePrice",
      media: "image",
    },
  },
};
