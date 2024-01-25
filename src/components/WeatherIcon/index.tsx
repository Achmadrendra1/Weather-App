import React from "react";
import Sunny from "../Icons/Sunny";
import Cloudy from "../Icons/Cloudy";
import Cloudys from "../Icons/Cloudys";
import Storm from "../Icons/Storm";
import Clouds from "../Icons/Clouds";
import LightRain from "../Icons/LightRain";
import HeavyRain from "../Icons/HeavyRain";
import Rain from "../Icons/Rain";
import Fog from "../Icons/Fog";

const iconMapping = {
  "Cerah": { component: Sunny, width: 150, top: 14 },
  "Cerah Berawan": { component: Cloudy, width: 160, top: 14 },
  "Berawan": { component: Cloudys, width: 190, top: 14 },
  "Berawan Tebal": { component: Clouds, width: 200, top: 20 },
  "Hujan Petir": { component: Storm, width: 180, top: 12 },
  "Hujan Ringan": { component: LightRain, width: 170, top: 16 },
  "Hujan Sedang": { component: HeavyRain, width: 180, top: 12 },
  "Hujan Lebat": { component: Rain, width: 210, top: 10 },
  "Hujan Lokal": { component: LightRain, width: 180, top: 14 },
  "Kabut": { component: Fog, width: 200, top: 14 },
  "Udara Kabur": { component: Fog, width: 200, top: 14 },
  "Asap": { component: Fog, width: 200, top: 14 },
};

const WeatherIcon = ({ weather }: { weather: string }) => {
  //@ts-expect-error
  const iconInfo = iconMapping[weather];

  if (iconInfo) {
    const { component: IconComponent, width, top } = iconInfo;
    return (
      <div className={`absolute top-${top} left-[50%] translate-x-[-50%] flex justify-center my-2`}>
        <IconComponent width={width} />
      </div>
    );
  }

  return (
    <div className="absolute top-32 text-center text-white left-[50%] translate-x-[-50%] flex justify-center my-2 ">
      <p>Tidak Ada Cuaca</p>
    </div>
  );
};

export default WeatherIcon;
