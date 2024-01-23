import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class EarthquakeService {
  async newEarthquake() {
    try {
      const url = `${process.env.BASE_URL}/TEWS/autogempa.json`;
      const response = await axios.get(url);
      response.data.Infogempa.gempa.Shakemap = `${process.env.SHAKEMAP_URL}/${response.data.Infogempa.gempa.Shakemap}`;
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch or parse XML data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async mag5Earthquake() {
    try {
      const url = `${process.env.BASE_URL}/TEWS/gempaterkini.json`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch or parse XML data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async recentEarthquake() {
    try {
      const url = `${process.env.BASE_URL}/TEWS/gempadirasakan.json`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch or parse XML data',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
