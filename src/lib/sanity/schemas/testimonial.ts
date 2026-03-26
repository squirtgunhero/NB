export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "clientContext",
      title: "Client Context",
      type: "string",
      description: 'e.g., "Relocated from London", "Upper East Side Buyer"',
    },
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "clientContext",
    },
  },
};
