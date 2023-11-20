// models/user.model.ts
import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import Car from './car';
import Rent from './rent';

@Table({
  modelName: 'User',
})
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
  })
  name!: string;
  @Column({
    type: DataType.STRING,
  })
  phone!: string;
  @Column({
    type: DataType.STRING,
  })
  email!: string;
  @HasMany(() => Car)
  Cars!: Car[];
  @HasMany(() => Rent)
  Rents!: Rent[];
  static associate(models: any) {
    this.hasMany(models.Rent, { foreignKey: 'userId' });
    this.hasMany(models.Car, { foreignKey: 'userId' });
  }
}
export default User;
