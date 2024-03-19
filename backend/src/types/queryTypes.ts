import { config } from '../config';

export type QueryParams = {
  type: keyof typeof config.ENDPOINTS;
};
