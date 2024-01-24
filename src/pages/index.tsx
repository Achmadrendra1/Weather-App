import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import { getAddress } from "@/utils/getAddress";
import moment from "moment";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";
import SelectForm from "./components/SelectForm";
import WeatherList from "./components/WeatherList";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [activeTab, setActiveTab] = useState("cuaca");

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  //Todo clear select

  return (
    <main className={`relative flex min-h-screen flex-col ${poppins.className} bg-gradient-to-b from-blue-500 to-purple-700`}>
      {/* <nav className="bg-glass fixed w-full z-20 top-0 start-0">
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
      </nav> */}
      <SelectForm />
      <WeatherList />
      <Footer />
    </main>
  );
}
