import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { refactJsonWeather } from 'src/utils/convertWeather';
import { xml2js } from 'xml-js';

@Injectable()
export class WeatherService {
  async findOne(id: string) {
    try {
      const url = `${process.env.BASE_URL}/MEWS/DigitalForecast/DigitalForecast-${id}.xml`;
      const response = await axios.get(url);
      const jsonData = xml2js(response.data, {
        compact: true,
      });
      const refactoredJsonWeathers = refactJsonWeather(jsonData);
      return refactoredJsonWeathers;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch or parse XML data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
