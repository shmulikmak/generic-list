import { fetchData } from './genericService';
import { Restaurant, User, UserExtended } from '../types/userTypes';
import { config } from '../config';

// mock data for favorite restaurants and other phones
const mockFavoriteRestaurants: Restaurant[] = [
  { name: "Restaurant A", location: { lat: 2424, lng: 234234 } },
  { name: "Restaurant B", location: { lat: 2424, lng: 234234 }},
];
const mockOtherPhones = ["0527247277", "972527247277"];

const transformUser = (user: User): UserExtended => {
  return {
    ...user,
    favoriteRestaurants: mockFavoriteRestaurants,
    otherPhones: mockOtherPhones,
  };
};

export const fetchUsers = async (): Promise<UserExtended[]> => {
  const users = await fetchData<User>(config.USERS_API_URL);

  return users.map(transformUser);
};
