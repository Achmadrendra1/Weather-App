import moment from "moment";
import React, { useState } from "react";
import Hum from "../Icons/Hum";
import Wind from "../Icons/Wind";
import Location from "../Icons/Location";
import HeavyRain from "../Icons/HeavyRain";
import { Areas } from "@/Interface/weather.interface";
import Sunny from "../Icons/Sunny";
import Clouds from "../Icons/Clouds";
import Cloudy from "../Icons/Cloudy";
import WeatherIcon from "../WeatherIcon";

const WeatherCard = ({data}:{data: Areas}) => {
  const [currentTime, setCurrentTime] = useState(moment().format("dddd, DD MM YYYY"));
  const currentDateTime = moment().format("YYYYMMDDhhmm");

  const currentHour = moment().hour()
  let timeRange: string = ""
  switch (true) {
    case currentHour >= 6 && currentHour < 12:
      timeRange = "0600";
      break;
    case currentHour >= 12 && currentHour < 18:
      timeRange = "1200";
      break;
    case currentHour >= 18 && currentHour < 24:
      timeRange = "1800";
      break;
    default:
      timeRange = "0000";
      break;
  }

  //Weather
  const weather = data.params?.find((item) => item.id === "weather");
  const currentWeather = weather?.times.filter((item) => item.datetime.slice(0,8) === currentDateTime.slice(0,8)).find((item) => item.datetime.slice(8,12) === timeRange);

  //Temperature
  const temperature = data.params?.find((item) => item.id === "t");
  const currentTemp = temperature?.times.filter((item) => item.datetime.slice(0,8) === currentDateTime.slice(0,8)).find((item) => item.datetime.slice(8,12) === timeRange);

  //Wind Speed
  const wind = data.params?.find((item) => item.id === "ws");
  const currentWind = wind?.times.filter((item) => item.datetime.slice(0,8) === currentDateTime.slice(0,8)).find((item) => item.datetime.slice(8,12) === timeRange);

  //Humidity
  const humidity = data.params?.find((item) => item.id === "hu");
  const currentHumidity = humidity?.times.filter((item) => item.datetime.slice(0,8) === currentDateTime.slice(0,8)).find((item) => item.datetime.slice(8,12) === timeRange);

  return (
    <div className="w-full flex justify-center my-2">
      <div className="w-[300px] h-[470px] bg-card-weather rounded-2xl p-6 relative flex flex-col justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Location width={15} />
          <p>{data.description}, {data.city_name}</p>
        </div>
        <WeatherIcon weather={currentWeather?.name ?? ""}/>
        <div className="bg-glass rounded-3xl border border-white min-h-[100px] flex flex-col items-center p-4">
          <p className="text-sm text-white">{currentTime}</p>
          <p className="temp-text">{currentTemp?.celcius}&deg;C</p>
          <p className="text-white text-2xl font-semibold mb-3 text-center">{currentWeather?.name}</p>
          <div className="grid grid-cols-5 w-full items-center">
            <div className="flex flex-col items-between w-3/4 ml-4">
              <Wind />
              <Hum width={28} />
            </div>
            <div className="flex flex-col items-end w-full ml-3">
              <p className="text-white text-sm h-[30px]">Wind</p>
              <p className="text-white text-sm">Hum</p>
            </div>
            <div className="flex flex-col items-center ml-2.5 w-full">
              <p className="text-white text-sm h-[30px]">|</p>
              <p className="text-white text-sm">|</p>
            </div>
            <div className="flex flex-col items-start ml-2 w-full col-span-2">
              <p className="text-white text-sm h-[30px]">{currentWind?.kph} Km/h</p>
              <p className="text-white text-sm">{currentHumidity?.value}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
