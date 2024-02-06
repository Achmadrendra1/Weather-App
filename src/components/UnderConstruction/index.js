import React from "react";
import { useRouter } from "next/router";

const UnderConstruction = () => {
  const router = useRouter();

  return (
    <div className="p-8 rounded-xl mx-auto my-auto items-center flex flex-col text-center gap-4 w-full">
      <h1 className="md:text-6xl text-5xl font-bold text-white">Under Construction</h1>
      <p className="text-white text-sm md:text-md">We are working on something awesome. Please check back later!</p>
      <button className="bg-glass hover:bg-blue-400 p-4 rounded-2xl text-center text-white font-semibold mt-4" onClick={() => router.push("/")}>
        Back To Home
      </button>
    </div>
  );
};

export default UnderConstruction;
