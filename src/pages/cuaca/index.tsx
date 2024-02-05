import { Areas } from "@/Interface/weather.interface";
import SelectForm from "@/components/SelectForm";
import WeatherList from "@/components/WeatherList";
import { getWeather } from "@/utils/getWeather";
import moment from "moment";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Cuaca = () => {
  const router = useRouter();
  const [province, setProvince] = useState<string>("");
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Areas[]>([]);
  const onChangeProvince = (provinsi: string) => {
    setProvince(provinsi);
  };

  useEffect(() => {
    if (province !== "") {
      getWeather(province).then((data) => {
        setLastUpdate(data?.issue?.timestamp);
        setWeatherData(data?.areas);
      });
    }
  }, [province]);

  return (
    <>
      <Head>
        <title>Cuaca | Ren Project</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`relative flex min-h-screen flex-col ${poppins.className} bg-main`}>
        <div className="flex w-full md:items-center xl:px-24 md:px-20 px-12 gap-y-8 md:flex-row flex-col pt-8 md:justify-between">
          <div className="flex gap-2 text-white font-semibold items-center hover:cursor-pointer text-sm" onClick={() => router.back()}>
            <FaChevronCircleLeft /> Kembali
          </div>
          <div className="flex md:flex-row flex-col gap-2 text-sm text-white font-semibold items-center">
            <p>Tanggal Pemuktahiran :</p>
            <p>{moment(lastUpdate, "YYYYMMDDHHmmss").add(7, "hours").format("DD MMMM YYYY | HH:mm")} WIB</p>
          </div>
        </div>
        <SelectForm onChangeProvince={onChangeProvince} />
        <WeatherList data={weatherData?.filter((item) => item.params)} />
        <Footer />
      </div>
    </>
  );
};

export default Cuaca;
