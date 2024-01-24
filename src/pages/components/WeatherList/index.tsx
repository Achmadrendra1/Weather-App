import React from "react";
import WeatherCard from "../WeatherCard";

const WeatherList = () => {
  return (
    <div className="wflex flex-col w-full items-center xl:px-24 md:px-20">
      {/* <p className="text-white text-end px-6">Tanggal Pemutakhiran: {weatherData.issue ? moment(weatherData.issue.timestamp, "YYYYMMDDHHmmss").format("DD-MM-YYYY hh:mm:ss") : "Data Tidak Tersedia"}</p> */}
      <div className="grid xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full min-h-[75vh]">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default WeatherList;
