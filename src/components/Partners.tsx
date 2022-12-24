import Image from "next/image";
import WideCard from "./WideCard";

import panasonic from "/public/images/partners/panasonic.png";
import v5 from "/public/images/partners/v5.png";
import zebra from "/public/images/partners/zebra.png";
import getac from "/public/images/partners/getac.png";
import proclip from "/public/images/partners/procliplogo.png";
import ruggon from "/public/images/partners/ruggon.png";

import Partner from "./Partner";

export default function Parnters() {
  return (
    <>
      <div className="animate-gradient-x bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-cover bg-center py-10 md:py-40 xl:py-10 xl:shadow-lg">
        <div className="flex h-96 flex-col items-center justify-center gap-2 xl:flex-row xl:gap-20">
          <div className="flex justify-center pb-5 text-4xl font-semibold text-white">
            <a href="/">
              <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-lg p-4 text-white lg:px-40 xl:h-48 xl:transition-transform xl:hover:scale-105">
                <div className="pb-2 text-4xl font-semibold">Our Partners</div>
                <div className="text-center text-lg text-neutral-300 md:text-xl">
                  "Hello world, how are you?"
                </div>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="md:-translate-x-10 md:-translate-y-10">
              <Partner
                title="Zebra"
                description="cool man"
                url="https://www.zebra.com/us/en.html"
                img={zebra}
              />
            </div>

            <div>
              <Partner
                title="Panasonic"
                description="cool man"
                url="https://www.na.panasonic.com/"
                img={panasonic}
              />
            </div>

            <div className="md:translate-x-10 md:-translate-y-10">
              <Partner
                title="Getac"
                description="cool man"
                url="https://www.getac.com/"
                img={getac}
              />
            </div>

            <div className="md:-translate-x-10 md:translate-y-10">
              <Partner
                title="V5"
                description="cool man"
                url="https://v5systems.us/"
                img={v5}
              />
            </div>

            <div>
              <Partner
                title="Proclip"
                description="cool man"
                url="https://proclipusa.com"
                img={proclip}
              />
            </div>

            <div className="md:translate-x-10 md:translate-y-10">
              <Partner
                title="Ruggon"
                description="cool man"
                url="https://ruggon.com"
                img={ruggon}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
