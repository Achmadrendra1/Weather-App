import React from "react";
import WeatherCard from "../WeatherCard";
import { Areas } from "@/Interface/weather.interface";

const WeatherList = ({ data = [] }: { data: Areas[] }) => {
  return (
    <div className="flex flex-col w-full items-center xl:px-24 md:px-20">
      {/* <div className="grid xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-3 w-full bg-red-300 justify-center">
        <p className="col-end-6 text-white text-center">Tanggal Pemutakhiran : </p>
        <p className="col-end-6 text-white text-center">{moment().format("DD MMM YYYY hh:mm:ss") + " WIB"}</p>
      </div> */}
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full min-h-[75vh]">
        {data.map((item: any, index: number) => (
          <WeatherCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
