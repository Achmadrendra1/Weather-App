import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ProvinceService {
  findAll() {
    try {
      const jsonData = fs.readFileSync(
        './src/province/data/province.json',
        'utf8',
      );
      const provinceData = JSON.parse(jsonData);

      return provinceData;
    } catch (error) {
      throw new Error(error);
    }
  }
}
