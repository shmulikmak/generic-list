export const photoSchema = {
  type: "array",
  items: {
    properties: {
      title: { type: "string" },
      url: { type: "link" },
      thumbnailUrl: { type: "thumbnailUrl" },
    },
    required: ["title", "url", "thumbnailUrl"],
  },
};
