import axios from "axios";

export async function getWeather(provinsi: string) {
  try {
    const apiUrl = `/api/weather/${provinsi}`;

    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error: any) {
    console.error("Terjadi kesalahan:", error.message);
  }
}
