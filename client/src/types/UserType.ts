import type { CarType } from './CarType';
import type { RentType } from './RentType';

export type UserType = {
  id: number;
  name: string;
  phone: string;
  email: string;
  Rents?: RentType[];
  fullInfo?: boolean;
};
