import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { DatabaseModule } from './database.module';
import { UsersController } from './users/users.controller';
import { RentsController } from './rents/rents.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, CarsController, UsersController, RentsController],
  providers: [AppService],
})
export class AppModule {}
