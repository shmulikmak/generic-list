import { validate } from "jsonschema";

import { fetchData } from "./genericService";
import { config } from "../config";
import { userSchema } from "../schemas/userSchema";
import { photoSchema } from "../schemas/photoSchema";
import { mockFavoriteRestaurants, mockOtherPhones } from '../mocks/mockData';
import { User } from "../types/userTypes";

export const fetchDataByType = async (type: keyof typeof config.ENDPOINTS) => {
  const endpoint = config.ENDPOINTS[type];
  
  if (!endpoint) {
    throw new Error(`Invalid data type`);
  }

  const fullUrl = `${config.BASE_URL}${endpoint}`;
  let data = await fetchData(fullUrl);

  let schema;
  switch (type) {
    case "users":
      schema = userSchema;
      data = (data as User[]).map(user => ({
        ...user,
        favoriteRestaurants: mockFavoriteRestaurants,
        otherPhones: mockOtherPhones,
      }));
      break;
    case "photos":
      schema = photoSchema;
      break;
    // add cases for other data types as needed
    default:
      throw new Error(`Invalid data type`);
  }

  const validationResult = validate(data, schema);
  if (!validationResult.valid) {
    throw new Error(
      `data validation failed for type "${type}": ${validationResult.errors
        .map((e) => e.stack)
        .join(", ")}`
    );
  }

  return { data, schema };
};
