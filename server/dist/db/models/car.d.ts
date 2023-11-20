import { Model } from 'sequelize-typescript';
import User from './user';
import Rent from './rent';
import CarModel from './carModel';
export declare class Car extends Model<Car> {
    modelId: number;
    userId: number;
    User: User;
    Rents: Rent[];
    CarModel: CarModel;
    static associate(models: any): void;
}
export default Car;
