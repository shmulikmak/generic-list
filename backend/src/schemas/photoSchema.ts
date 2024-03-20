export const photoSchema = {
  type: "array",
  items: {
    properties: {
      title: { type: "string" },
      url: { type: "string" },
      thumbnailUrl: { type: "string" },
    },
    required: ["title", "url", "thumbnailUrl"],
  },
};
