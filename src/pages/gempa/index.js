import { Poppins } from "next/font/google";
import Head from "next/head";
import React from "react";
import UnderConstruction from "../../components/UnderConstruction";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Gempa = () => {
  return (
    <>
      <Head>
        <title>Gempa | Ren Project</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={`relative flex min-h-screen flex-col ${poppins.className} bg-main`}>
        <UnderConstruction />
        <Footer />
      </div>
    </>
  );
};

export default Gempa;
