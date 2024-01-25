import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { xml2js } from "xml-js";
import { refactJsonWeather } from "@/utils/weatherJsonConvert";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  try {
    if (slug) {
      const url = `${process.env.BASE_URL}/MEWS/DigitalForecast/DigitalForecast-${slug}.xml`;
      const response = await axios.get(url);
      const jsonData = xml2js(response.data, {
        compact: true,
      });
      const refactoredJsonWeathers = refactJsonWeather(jsonData);
      res.status(200).json(refactoredJsonWeathers);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
