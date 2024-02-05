import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Forecast App | Ren Project</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={`relative flex min-h-screen flex-col ${poppins.className} bg-gradient-to-b from-blue-500 to-purple-700`}>
        <div className="w-full flex flex-col justify-center items-center my-auto">
          <div className="bg-glass py-5 px-12 rounded-2xl">
            <Image src="https://data.bmkg.go.id/include/assets/img/logo-bmkg.svg" alt="BMKG Logo" width={150} height={100} />
          </div>
          <p className="text-white text-center text-xl my-4">
            Data cuaca & gempa disediakan oleh{" "}
            <a href="https://www.bmkg.go.id/" target="_blank" rel="noopener noreferrer">
              BMKG
            </a>
          </p>
          <div className="flex md:flex-row flex-col gap-4 justify-center text-white">
            <Link href="/cuaca">
              <p className="bg-glass hover:bg-blue-400 p-4 rounded-2xl text-center">Prakiraan Cuaca</p>
            </Link>
            <Link href="/gempa">
              <p className="bg-glass hover:bg-blue-400 p-4 rounded-2xl text-center">Informasi Gempa Bumi</p>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
