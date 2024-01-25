export interface Province {
  id: string;
  name: string;
  value: string;
}

export interface Issue {
  timestamp: string;
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
}

export interface Areas {
  id: string;
  latitude: string;
  longitude: string;
  coordinate: string;
  type: string;
  region: string;
  level: string;
  description: string;
  domain: string;
  tags: string;
  city_name: string;
  params: Param[];
}

export interface Param {
  id: string;
  description: string;
  type: string;
  times: Time[];
}

export interface Time {
  type: string;
  h?: string;
  datetime: string;
  value?: string;
  day?: string;
  celcius?: string;
  fahrenheit?: string;
  code?: string;
  name?: string;
  deg?: string;
  card?: string;
  sexa?: string;
  kt?: string;
  mph?: string;
  kph?: string;
  ms?: string;
}
