import moment from "moment";
import React, { useState } from "react";
import Hum from "../Icons/Hum";
import Wind from "../Icons/Wind";
import Location from "../Icons/Location";
import HeavyRain from "../Icons/HeavyRain";

const WeatherCard = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("dddd, DD MM YYYY"));
  return (
    <div className="w-full flex justify-center my-2">
      <div className="w-[300px] h-[470px] bg-card-weather rounded-2xl p-6 relative flex flex-col justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Location width={15} />
          <p>Jakarta Utara</p>
        </div>
        <div className="absolute top-16 left-[50%] translate-x-[-50%] flex justify-center my-2 ">
          <HeavyRain width={150} height={"auto"} />
        </div>
        <div className="bg-glass rounded-3xl border border-white min-h-[100px] flex flex-col items-center p-4">
          <p className="text-sm text-white">{currentTime}</p>
          <p className="temp-text">25&deg;C</p>
          <p className="text-white text-3xl font-semibold mb-3">Hujan Petir</p>
          <div className="grid grid-cols-5 w-3/4 items-center">
            <div className="flex flex-col items-between w-3/4">
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
              <p className="text-white text-sm h-[30px]">10 Km/h</p>
              <p className="text-white text-sm">80%</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
