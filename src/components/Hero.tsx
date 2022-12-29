import { type PropsWithChildren } from "react";

import Image from "next/image";
import logo from "/public/images/logos/RD-logo.png";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({
  // title,
  description,
}: PropsWithChildren<HeroProps>) {
  return (
    <div
      className="bg-hero flex animate-gradient-x items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 
		bg-cover 
		bg-center 
		py-32 shadow-lg
    backdrop-blur-3xl
		"
    >
      <div className="text-center text-white">
        <div className="flex items-center justify-center">
          <div className="hidden justify-center md:flex">
            <Image
              src={logo}
              alt="Rugged Development Logo"
              className="w-40 md:w-64"
            />
          </div>

          <a href="/">
            <div className="flex flex-col items-start justify-start bg-gradient-to-l from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
              <div>Rugged</div>
              <div>Development</div>
            </div>
          </a>
        </div>
        {/* {title} */}
        {/* assName="flex flxt-5xl font-bold tracking-tighter md:my-5 md:text-7xl"> flex */}
        {/* <div className="flex flex-col justify-center"> */}
        {/* <div> */}
        {/* <a href="/"> */}
        {/* Rugged<span className="text-blue-400"></span> Development */}
        {/* </a> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
        <div className="text-md mx-auto py-5 px-5 tracking-tighter sm:w-2/3 md:text-xl xl:text-2xl">
          {description}
        </div>

        <div className="text-md flex items-center justify-center gap-4 font-semibold">
          <a href="/#learn_more">
            <button className="transition-color rounded-lg bg-purple-700 p-4 text-white shadow-lg duration-200 hover:scale-105 hover:bg-purple-600">
              Learn More
            </button>
          </a>

          <a href="/#form">
            <button className="transition-color rounded-lg bg-neutral-900 p-4 text-white shadow-lg duration-200 hover:scale-105 hover:bg-neutral-800">
              Get a Quote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
