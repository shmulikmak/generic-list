import { ListItem } from './generalTypes';

export interface User extends ListItem {
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  favoriteRestaurants: Restaurant[];
  otherPhones: string[];
}

export interface Restaurant {
  name: string;
  location: { lat: number; lng: number };
}
