export const podcastEpisode = {
  name: "podcastEpisode",
  title: "Podcast Episode",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "episodeNumber",
      title: "Episode Number",
      type: "number",
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "audioUrl",
      title: "Audio URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "appleUrl",
      title: "Apple Podcasts URL",
      type: "url",
    },
    {
      name: "spotifyUrl",
      title: "Spotify URL",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "episodeNumber",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }: { title: string; subtitle: number; media: unknown }) {
      return {
        title,
        subtitle: subtitle ? `Episode ${subtitle}` : "",
        media,
      };
    },
  },
};
