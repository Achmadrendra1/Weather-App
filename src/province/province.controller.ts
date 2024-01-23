import { Controller, Get } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Province')
@Controller('province')
export class ProvinceController {
  constructor(private readonly provinceService: ProvinceService) {}

  @Get()
  findAll() {
    return this.provinceService.findAll();
  }
}
