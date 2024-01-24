import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { getAddress } from "@/utils/getAddress";
import moment from "moment";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [address, setAddress] = useState<any>();
  const [currentTime, setCurrentTime] = useState(moment().format("DD-MM-YYYY | hh:mm:ss"));
  const [activeTab, setActiveTab] = useState("cuaca");
  const [province, setProvince] = useState<any>([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [weatherData, setWeatherData] = useState<any>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      });
    }
    
    const fetchData = async () => {
       const response = await axios.get(`${process.env.BASE_URL_BE}/province`);
       setProvince(response.data);
    }

    fetchData()
  }, []);

  useEffect(() => {
    if (location.latitude !== 0 && location.longitude !== 0) {
      getAddress(location.latitude, location.longitude).then((data) => {
        setAddress(data);
      });
    }
  }, [location]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("DD-MM-YYYY | hh:mm:ss"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchWeather = async (province: string) => {
      const response = await axios.get(`${process.env.BASE_URL_BE}/weather/${province}`);
      setWeatherData(response.data);
    }

    let province = "DKIJakarta"
    if(selectedProvince !== ""){
      province = selectedProvince
    } else if (address && address.address && address.address.city) {
      switch (address.address.city) {
        case "Daerah Khusus Ibukota Jakarta":
          province = "DKIJakarta";
        default:
          province = address.address.city
      }
    }

    fetchWeather(province)
  }, [location, address, selectedProvince])

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

   const handleProvinceChange = (event: any) => {
     setSelectedProvince(event.target.value);
   };

   //Todo clear select

  return (
    <main className={`relative flex min-h-screen flex-col items-center justify-between ${poppins.className} bg-gradient-to-b from-blue-500 to-purple-700`}>
      <nav className="bg-glass fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded hover:bg-gray-100 ${activeTab === "cuaca" ? "text-white font-bold" : "text-gray-900"} md:hover:bg-transparent md:p-0 md:dark:hover:text-white`}
                  onClick={() => handleTabClick("cuaca")}
                >
                  Cuaca
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 rounded hover:bg-gray-100 ${activeTab === "gempa" ? "text-white font-bold" : "text-gray-900"} md:hover:bg-transparent md:p-0 md:dark:hover:text-white`}
                  onClick={() => handleTabClick("gempa")}
                >
                  Gempa Bumi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-col w-full items-center p-24">
        <div className="w-1/2 flex justify-between text-white m-2 px-2">
          <p>Lokasi : {selectedProvince !== "" ? province.find((item: any) => item.value === selectedProvince)?.name : address ? address?.address?.city : "Daerah Khusus Ibukota Jakarta"}</p>
          <p>{currentTime}</p>
        </div>
        <select id="countries" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-1/2 p-2.5" value={selectedProvince} onChange={handleProvinceChange}>
          <option value={""} disabled>
            Pilih Provinsi
          </option>
          {province.map((item: any, index: number) => (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <div className="w-full mt-2 flex flex-col">
          <p className="text-white text-end px-6">Tanggal Pemutakhiran: {weatherData.issue ? moment(weatherData.issue.timestamp, "YYYYMMDDHHmmss").format("DD-MM-YYYY hh:mm:ss") : "Data Tidak Tersedia"}</p>
          <div className="grid grid-cols-5 w-full min-h-[75vh]">
            {weatherData?.areas?.map((item: any, index: number) => (
              <WeatherCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
