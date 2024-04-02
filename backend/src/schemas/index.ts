import { userSchema } from "./userSchema";
import { photoSchema } from "./photoSchema";
import { DataType } from "../types/dataTypes";

export const getSchemaByType = (type: DataType) => {
  switch (type) {
    case "users":
      return userSchema;
    case "photos":
      return photoSchema;
    default:
      throw new Error(`Invalid data type`);
  }
};
