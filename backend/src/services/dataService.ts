import { validate } from "jsonschema";
import { fetchData } from "./genericService";
import { config } from "../config";
import { DataType } from "../types/dataTypes";
import { ListItem } from "../types/generalTypes";
import { getSchemaByType } from "../schemas";

export const fetchDataByType = async (
  type: DataType,
  searchTerm = "",
  id = ""
): Promise<{ data: ListItem[]; schema: any }> => {
  const endpoint = config.ENDPOINTS[type];
  if (!endpoint) {
    throw new Error(`Invalid data type`);
  }
  const fullUrl = `${config.BASE_URL}${endpoint}`;
  let data = await fetchData(fullUrl);

  if (id) {
    const item = data.find((item: any) => item.id === parseInt(id, 10));
    data = item ? [item] : [];
  }

  if (searchTerm) {
    data = data.filter((item: any) =>
      Object.values(item).some(
        (value: any) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }

  const schema = getSchemaByType(type);
  const validationResult = validate(data, schema);
  if (!validationResult.valid) {
    throw new Error(
      `Data validation failed for type "${type}": ${validationResult.errors
        .map((e) => e.stack)
        .join(", ")}`
    );
  }

  return { data, schema };
};