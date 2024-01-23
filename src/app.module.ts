import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvinceModule } from './province/province.module';
import { WeatherModule } from './weather/weather.module';
import { EarthquakeModule } from './earthquake/earthquake.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProvinceModule,
    WeatherModule,
    EarthquakeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
