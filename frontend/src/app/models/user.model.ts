export interface Address {
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Restaurant {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface User {
  name: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  favoriteRestaurants: Restaurant[];
  otherPhones: string[];
}
