import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { xml2json } from 'xml-js';

@Injectable()
export class WeatherService {
  async findOne(id: string) {
    try {
      const url = `${process.env.BASE_URL}/MEWS/DigitalForecast/DigitalForecast-${id}.xml`;
      const response = await axios.get(url);
      const jsonData = xml2json(response.data, {
        compact: true,
        ignoreDeclaration: true,
        attributesKey: 'attributes',
        textKey: 'value',
      });
      const parsedData = JSON.parse(jsonData);
      return parsedData;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch or parse XML data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
