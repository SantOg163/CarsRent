import { Model } from 'sequelize-typescript';
import Car from './car';
import Rent from './rent';
export declare class User extends Model<User> {
    name: string;
    phone: string;
    email: string;
    Cars: Car[];
    Rents: Rent[];
    static associate(models: any): void;
}
export default User;
