import { User } from "./Auth";

export type ActiveSection = 'overview' | 'orders' | 'address'  | 'wishlist' | 'cart'| 'profile';


/******** */
export type AddressCardProps = {
  title: string
   address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    country: string;
  };
  isDefault?: boolean
}

export type StatCardProps = {
  title: string
  value: string | number
}

/***** */
export type UserInfoProps ={
  user : User
} 