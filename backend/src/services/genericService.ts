import axios from 'axios';
import { ListItem } from '../types/generalTypes';

export const fetchData = async <T extends ListItem>(url: string): Promise<T[]> => {
  try {
    const response = await axios.get<T[]>(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};
