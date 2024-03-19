import { fetchData } from './genericService';
import { config } from '../config';
import { Photo } from '../types/photoTypes';
import { User } from '../types/userTypes';

export const fetchDataByType = async (type: keyof typeof config.ENDPOINTS): Promise<User[] | Photo[] | any[]> => {
  const endpoint = config.ENDPOINTS[type];
  
  if (!endpoint) {
    throw new Error(`Data type "${type}" is not supported.`);
  }

  const fullUrl = `${config.BASE_URL}${endpoint}`;
  
  return fetchData(fullUrl);
};
