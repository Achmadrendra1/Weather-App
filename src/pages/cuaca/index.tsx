import { Areas } from "@/Interface/weather.interface";
import SelectForm from "@/components/SelectForm";
import WeatherList from "@/components/WeatherList";
import { getWeather } from "@/utils/getWeather";
import { Poppins } from "next/font/google";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Cuaca = () => {
  const [province, setProvince] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Areas[]>([]);
  const onChangeProvince = (provinsi: string) => {
    setProvince(provinsi);
  }

  useEffect(() => {
      getWeather(province).then((data) => {
        setWeatherData(data?.areas);
      })
  }, [province])

  return (
    <>
      <Head>
        <title>Cuaca | Ren Project</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`relative flex min-h-screen flex-col ${poppins.className} bg-gradient-to-b from-blue-500 to-purple-700`}>
        <SelectForm onChangeProvince={onChangeProvince} />
        <WeatherList data={weatherData?.filter((item) => item.params)} />
      </div>
    </>
  );
};

export default Cuaca;
