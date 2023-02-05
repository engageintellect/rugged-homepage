import WideCard from "./WideCard";
import Image from "next/image";
import laptop from "/public/images/products/rugged_laptop.jpg";
import SlideDown from "./SlideDown";

import logo from "/public/images/logos/RD-logo.png";
import avatar from "/public/images/avatars/avatar.jpg";

import { FaArrowDown, FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <div
        id="about-us"
        className="z-0 flex flex-col items-center justify-center bg-neutral-900"
      >
        <div className="mt-20 flex items-center justify-center bg-neutral-900 px-2 xl:w-[66vw] xl:px-10">
          <div className="min-h-96 flex items-center justify-center">
            <WideCard
              title="About Us"
              description="Every organization is unique. Our experts are committed to helping you select a solution that matches your specific needs – from warehouse equipment to rugged computing and scanning."
              url="/#about-us"
              icon={<FaCheckCircle />}
            />
          </div>
        </div>

        <div>
          <a href="/#form">
            <div className="mt-10 mb-28 flex items-center gap-4 xl:mb-10">
              <div className="avatar z-50">
                <div className="w-12 rounded-full">
                  <Image src={avatar} alt="avatar" />
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white">
                  Jesse Stefko
                </div>
                <div className="text-sm font-thin">VP, Rugged Development.</div>
              </div>
            </div>
          </a>
        </div>

        <div className="relative z-40 flex items-center justify-center bg-transparent xl:translate-y-24">
          <a href="/#solutions">
            <div className="hidden transition-transform duration-200 hover:cursor-pointer active:scale-95 md:flex">
              <SlideDown
                component={
                  <Image
                    src={laptop}
                    alt="laptop"
                    className=" mx-auto w-full bg-transparent drop-shadow-xl transition-all duration-200 md:w-[700px]"
                  />
                }
              />

              <div className="absolute">
                <SlideDown
                  component={
                    <div className="absolute top-16 z-50 flex h-[260px] w-[442px] translate-x-[135px] items-center justify-center rounded-md border-2 border-neutral-900 bg-gradient-to-r from-purple-600 to-blue-600 p-4">
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
