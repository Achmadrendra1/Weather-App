import { Controller, Get } from '@nestjs/common';
import { EarthquakeService } from './earthquake.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Earthquake')
@Controller('earthquake')
export class EarthquakeController {
  constructor(private readonly earthquakeService: EarthquakeService) {}

  @Get('new')
  newEarthquake() {
    return this.earthquakeService.newEarthquake();
  }

  @Get('mag-5')
  mag5Earthquake() {
    return this.earthquakeService.mag5Earthquake();
  }

  @Get('recent')
  recentEarthquake() {
    return this.earthquakeService.recentEarthquake();
  }
}
