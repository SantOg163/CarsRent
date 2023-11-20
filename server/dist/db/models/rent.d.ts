import { Model } from 'sequelize-typescript';
import Car from './car';
import User from './user';
export declare class Rent extends Model<Rent> {
    carId: number;
    userId: number;
    Car: Car;
    User: User;
    static associate(models: any): void;
}
export default Rent;
