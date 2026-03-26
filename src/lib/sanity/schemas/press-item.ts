export const pressItem = {
  name: "pressItem",
  title: "Press Item",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "publication",
      title: "Publication",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "publicationLogo",
      title: "Publication Logo",
      type: "image",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    },
  ],
  orderings: [
    {
      title: "Date, New",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publication",
      media: "publicationLogo",
    },
  },
};
