import User from 'db/models/user';
export declare class UsersController {
    getUsers(): Promise<User[]>;
    getUser(id: number): Promise<any>;
}
