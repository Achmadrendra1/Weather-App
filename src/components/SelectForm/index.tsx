import { getAddress } from "@/utils/getAddress";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Location from "../Icons/Location";
import { getProvince } from "@/utils/getProvince";
import { Province } from "@/Interface/weather.interface";

interface SelectFormProps {
  onChangeProvince: (provinsi: string) => void;
}

const SelectForm = ({ onChangeProvince }: SelectFormProps) => {
  const [geoLocation, setGeoLocation] = useState({ latitude: 0, longitude: 0 });
  const [address, setAddress] = useState<any>();
  const [currentTime, setCurrentTime] = useState(moment().format("DD-MM-YYYY | hh:mm"));

  const [dataProvince, setDataProvince] = useState<Province[]>([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [geoProvince, setGeoProvince] = useState({ name: "Banten", value: "Banten" });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setGeoLocation({ latitude, longitude });
      });
    }
    getProvince().then((data) => {
      setDataProvince(data);
    })
  }, []);

  useEffect(() => {
    if (geoLocation.latitude !== 0 && geoLocation.longitude !== 0) {
      getAddress(geoLocation.latitude, geoLocation.longitude).then((data) => {
        setAddress(data);
      });
    }
  }, [geoLocation]);

  useEffect(() => {
    if (address) {
      let province = "";
      switch (address.address.state ?? address.address.city) {
        case "Daerah Istimewa Yogyakarta":
          province = "DIYogyakarta";
          break;
        case "Daerah Khusus Ibukota Jakarta":
          province = "DKIJakarta";
          break;
        default:
          province = address.address.state ?? address.address.city;
      }
      setGeoProvince({
        name: address.address.state ?? address.address.city,
        value: province
          .toLowerCase()
          .replace(/\b\w/g, function (char: string) {
            return char.toUpperCase();
          })
          .replaceAll(" ", ""),
      });
    }
  }, [address]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("DD MMMM YYYY | hh:mm"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if(selectedProvince !== ""){
      onChangeProvince(selectedProvince);
    } else {
      onChangeProvince(geoProvince.value);
    }
  }, [geoProvince, selectedProvince])

  const handleProvinceChange = (event: any) => {
    setSelectedProvince(event.target.value);
  };

  const handleReset = () => {
    setSelectedProvince("");
  }

  return (
    <div className="flex flex-col w-full items-center xl:px-24 md:px-20 py-12 ">
      <div className="xl:w-1/2 md:w-2/3 w-full flex flex-col md:flex-row md:justify-between justify-center items-center text-white m-2 px-2">
        <div className="flex items-center gap-2">
          <Location width={15} />
          <p className="text-sm">{geoProvince.name}</p>
        </div>
        <p className="text-sm text-end">{currentTime}</p>
      </div>
      <div className="flex gap-2 xl:w-1/2 md:w-2/3 w-3/4">
        <select id="countries" className=" bg-[#61B1FC] text-white text-sm rounded-lg block w-full p-2.5 hover:cursor-pointer" value={selectedProvince} onChange={handleProvinceChange}>
          <option value={""} disabled>
            Pilih Provinsi
          </option>
          {dataProvince.map((item: any, index: number) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        {selectedProvince !== "" && (
          <button className="bg-red-600 px-4 py-2 rounded-lg text-white text-2xl hover:cursor-pointer" onClick={handleReset}>
            &times;
          </button>
        )}
      </div>
    </div>
  );
};

export default SelectForm;
