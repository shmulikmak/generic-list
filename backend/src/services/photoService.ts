
import { fetchData } from './genericService';
import { Photo } from '../types/photoTypes';
import { config } from '../config';

export const fetchPhotos = async (): Promise<Photo[]> => {
  return fetchData<Photo>(config.PHOTOS_API_URL);
};