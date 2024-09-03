import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ormConfig} from "./config/orm.config";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {UserEntity} from "./entities/user.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), '.env'),
    }),
    TypeOrmModule.forRootAsync(ormConfig),
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
