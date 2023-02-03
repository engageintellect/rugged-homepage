import WideCard from "./WideCard";
import Image from "next/image";
import laptop from "/public/images/products/rugged_laptop.jpg";
import Slider from "./Slider";

import mountains from "/public/images/hero/rugged_mountains.jpg";
import circut from "/public/images/circut.jpg";
import fire from "/public/images/industries/fire.jpg";
import police from "/public/images/industries/police.jpg";
import utilities from "/public/images/industries/utilities.jpg";
import barcode_scanning from "/public/images/industries/barcode_printing.jpg";
import asset_tracking from "/public/images/industries/asset_tracking.jpg";
import wearable_computing from "/public/images/industries/wearable_computing.jpg";

import logo from "/public/images/logos/RD-logo.png";

import { FaArrowDown, FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <div
        id="about-us"
        className="z-0 flex flex-col items-center justify-center bg-neutral-900"
      >
        <div className="flex items-center justify-center bg-neutral-900 px-2 xl:w-[66vw] xl:px-10">
          <div className="flex h-96 items-center justify-center xl:-mb-20">
            <WideCard
              title="About Us"
              description="Every organization is unique. Our experts are committed to helping you select a solution that matches your specific needs – from warehouse equipment to rugged computing and scanning."
              url="/#about-us"
              icon={<FaCheckCircle />}
            />
          </div>
        </div>
        <div className="relative z-40 flex items-center justify-center bg-transparent xl:translate-y-24">
          <a href="#solutions">
            <div className="hidden transition-transform duration-200 hover:cursor-pointer active:scale-95 md:flex">
              <Slider
                component={
                  <Image
                    src={laptop}
                    alt="laptop"
                    className=" mx-auto w-full bg-transparent drop-shadow-xl transition-all duration-200 md:w-[700px]"
                  />
                }
              />

              <div className="absolute">
                <Slider
                  component={
                    <div className="absolute top-16 z-50 flex h-[260px] w-[442px] translate-x-[135px] items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 p-4 outline outline-2">
                      <div className="">
                        <Image
                          src={logo}
                          alt="rd"
                          className="bounce w-20 animate-bounce drop-shadow-lg"
                        />
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
