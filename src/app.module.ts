// src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import mongoConfig from './config/mongo.config';
import { TrackingPlanModule } from './tracking-plan/tracking-plan.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [mongoConfig], // Load the mongo configuration
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to access the ConfigService
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('mongo.uri'), // Get the MongoDB URI from the config
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService], // Inject ConfigService
    }),
    TrackingPlanModule,
    EventModule,
  ],
})
export class AppModule {}
