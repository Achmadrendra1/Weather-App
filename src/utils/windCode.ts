const cardCode = {
  N: "Utara",
  NNE: "Utara-Timur Laut",
  NE: "Timur Laut",
  ENE: "Timur-Timur Laut",
  E: "Timur",
  ESE: "Timur-Tenggara",
  SE: "Tenggara",
  SSE: "Selatan-Tenggara",
  S: "Selatan",
  SSW: "Selatan-Barat Daya",
  SW: "Barat Daya",
  WSW: "Barat-Barat Daya",
  W: "Barat",
  WNW: "Barat-Barat Laut",
  NW: "Barat Laut",
  NNW: "Utara-Barat Laut",
};

type CardCodeKey = "N" | "NNE" | "NE" | "ENE" | "E" | "ESE" | "SE" | "SSE" | "S" | "SSW" | "SW" | "WSW" | "W" | "WNW" | "NW" | "NNW";

export const cardCodeToText = (code: CardCodeKey) => {
  return cardCode[code] || "";
};
