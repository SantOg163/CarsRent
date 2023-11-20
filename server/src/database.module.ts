// database.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import CarModel from '../db/models/carModel';
import Car from '../db/models/car';
import User from '../db/models/user';
import Rent from '../db/models/rent';
import { SequelizeModuleOptions } from '@nestjs/sequelize/dist/interfaces/sequelize-options.interface';
import Brand from 'db/models/brand';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService,
      ): Promise<SequelizeModuleOptions> => ({
        dialect: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: '123',
        database: 'CarRent',
        models: [Car, User, Rent, CarModel, Brand],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
