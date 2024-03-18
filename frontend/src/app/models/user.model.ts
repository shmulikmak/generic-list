export interface Restaurant {
  name: string;
  location: { lat: string; lng: string };
}

export interface User {
  name: string;
  email: string;
  website: string;
  phone: string;
  address: {
    geo: {
      lat: string;
      lng: string;
    };
  };
  favoriteRestaurants: Restaurant[];
  otherPhones: string[];
}
