// models/rent.model.ts
import {
  Model,
  DataType,
  Table,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import Car from './car';
import User from './user';

@Table({
  modelName: 'Rent',
})
export class Rent extends Model<Rent> {
  @ForeignKey(() => Car)
  @Column({
    type: DataType.INTEGER,
  })
  carId!: number;
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId!: number;
  @BelongsTo(() => Car)
  Car!: Car;
  @BelongsTo(() => User)
  User!: User;
  static associate(models: any) {
    this.belongsTo(models.Car, { foreignKey: 'carId' });
    this.belongsTo(models.User, { foreignKey: 'userId' });
  }
}
export default Rent;
