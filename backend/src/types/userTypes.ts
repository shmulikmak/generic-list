import { ListItem } from './generalTypes';

export interface User extends ListItem {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
}

export interface UserExtended extends User {
  favoriteRestaurants: Restaurant[];
  otherPhones: string[];
}

export interface Restaurant {
  name: string;
  location: { lat: number; lng: number };
}
