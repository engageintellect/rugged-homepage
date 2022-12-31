import { type PropsWithChildren } from "react";

import Image from "next/image";
import logo from "/public/images/logos/RD-logo.png";
import fire from "/public/images/industries/fire.jpg";
import earth from "/public/images/hero/earth.jpg";
import servers from "/public/images/hero/servers.jpg";
import mountains from "/public/images/hero/rugged_mountains.jpg";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({
  // title,
  description,
}: PropsWithChildren<HeroProps>) {
  ssr: true;
  return (
    <div
      className="bg-hero relative flex animate-gradient-x items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 
		bg-cover 
		bg-center 
		py-32 shadow-lg
    backdrop-blur-3xl
		"
    >
      <Image
        src={servers}
        alt="Picture of the author"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-20"
      />
      <div className="z-10 text-center text-white">
        <div className="flex items-center justify-center gap-2">
          <div className="hidden justify-center bg-transparent drop-shadow-xl md:flex">
            <Image
              src={logo}
              alt="Rugged Development Logo"
              className="w-40 drop-shadow-xl md:w-64"
            />
          </div>

          <a href="/">
            <div className="flex flex-col items-center justify-center  text-5xl font-extrabold drop-shadow-xl md:items-start md:text-7xl">
              <div>Rugged</div>
              <div>Development</div>
            </div>
          </a>
        </div>

        <div className="text-md mx-auto w-[80vw] bg-transparent py-5 px-5 tracking-tighter drop-shadow-lg sm:w-[50vw] md:text-xl xl:text-2xl">
          {description}
        </div>

        <div className="text-md flex items-center justify-center gap-4 font-semibold md:text-xl">
          <a href="/#solutions">
            <button className="transition-color rounded-lg bg-neutral-900 p-4 px-6 text-white shadow-lg duration-200 hover:scale-105 hover:bg-neutral-800">
              Learn More
            </button>
          </a>

          <a href="/#form">
            <button className="transition-color rounded-lg bg-purple-700 p-4 px-6 text-white shadow-lg duration-200 hover:scale-105 hover:bg-purple-600">
              Get a Quote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
