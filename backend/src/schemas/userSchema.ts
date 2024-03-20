export const userSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      name: { type: "string" },
      email: { type: "email" },
      address: {
        type: "object",
        properties: {
          geo: {
            type: "object",
            properties: {
              lat: { type: "string" },
              lng: { type: "string" },
            },
          },
        },
      },
      phone: { type: "string" },
      website: { type: "website" },
      favoriteRestaurants: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            location: {
              type: "object",
              properties: {
                lat: { type: "number" },
                lng: { type: "number" },
              },
              required: ["lat", "lng"],
            },
          },
          required: ["name", "location"],
        },
      },
      otherPhones: {
        type: "array",
        items: { type: "string" },
      },
    },
    required: ['id', 'name', 'email', 'address', 'phone', 'website']
  },
};
