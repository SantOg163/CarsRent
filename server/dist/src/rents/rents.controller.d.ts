import Rent from 'db/models/rent';
export declare class RentsController {
    getRents(): Promise<Rent[]>;
    getRent(id: number): Promise<Rent>;
}
