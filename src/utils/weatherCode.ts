type WeatherCode = {
  [key: number]: string;
};
const weatherCode: WeatherCode = {
  0: "Cerah",
  1: "Cerah Berawan",
  2: "Cerah Berawan",
  3: "Berawan",
  4: "Berawan Tebal",
  5: "Udara Kabur",
  10: "Asap",
  45: "Kabut",
  60: "Hujan Ringan",
  61: "Hujan Sedang",
  63: "Hujan Lebat",
  80: "Hujan Lokal",
  95: "Hujan Petir",
};

export const weatherCodeToText = (code: number) => {
  return weatherCode[code];
};
