import { type PropsWithChildren } from "react";

import Image from "next/image";
import logo from "/public/images/logos/RD-logo.webp";

import {
  FaBookOpen,
  FaChevronDown,
  FaArrowRight,
  FaBook,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({
  // title,
  description,
}: PropsWithChildren<HeroProps>) {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  ssr: true;
  return (
    <div
      className="bg-hero relative flex animate-gradient-x items-center justify-center bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 
		bg-cover 
		bg-center 
		py-32 shadow-lg
    backdrop-blur-3xl
		"
    >
      <motion.div
        style={{ y }}
        className="absolute z-0 h-full w-full object-cover"
      >
        {/* <Image
          priority
          src={earth}
          alt="Picture of the author"
          className="h-full w-full object-cover opacity-30"
 /> */}

        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-20"
        >
          <source src="/videos/tower.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="z-10 text-center text-white">
        <div className="flex items-center justify-center gap-2">
          <div className="hidden justify-center bg-transparent drop-shadow-xl md:flex">
            <a href="/">
              <Image
                priority={true}
                src={logo}
                alt="Rugged Development Logo"
                className="duration-50 w-40 drop-shadow-xl transition-transform hover:scale-[102%] active:scale-[99%] md:w-64"
              />
            </a>
          </div>

          <a href="/">
            <div className="flex flex-col items-center justify-center text-5xl font-extrabold drop-shadow-xl sm:text-6xl md:items-start md:text-7xl xl:container">
              <div>Rugged</div>
              <div>Development</div>
            </div>
          </a>
        </div>

        <div className="text-md mx-auto max-w-[80vw] bg-transparent py-5 px-5 tracking-tighter drop-shadow-lg sm:max-w-lg md:text-xl xl:text-2xl">
          {description}
        </div>

        <div className="text-md flex items-center justify-center gap-4 pt-10 font-semibold md:text-lg xl:text-xl">
          <a href="/#solutions">
            <button className="group rounded-md bg-neutral-900 p-4 px-6 text-white shadow-lg transition-all duration-200 hover:bg-neutral-800 active:scale-95">
              Learn More
              <FaBook className="ml-2 inline-block group-hover:hidden" />
              <FaBookOpen className="ml-2 hidden group-hover:inline-block" />
            </button>
          </a>

          <a href="/#form">
            <button className="group rounded-md bg-purple-700 p-4 px-6 text-white shadow-lg transition-all duration-200 hover:bg-purple-600 active:scale-95">
              Get a Quote
              <FaArrowRight className="ml-2 inline-block -rotate-45 transition-transform duration-200 group-hover:rotate-90" />
            </button>
          </a>
        </div>
      </div>

      <div
        id="mobile_menu"
        className="absolute bottom-5 mb-5 text-neutral-100 md:hidden"
      >
        <a href="#mobile_menu">
          <FaChevronDown className="animate-pulse text-4xl" />
        </a>
      </div>
    </div>
  );
}
