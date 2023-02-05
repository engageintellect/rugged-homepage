// IMPORT COMPONENTS
import Partner from "./Partner";

// IMPORT IMAGES
import panasonic from "/public/images/partners/panasonic.png";
import v5 from "/public/images/partners/v5.png";
import zebra from "/public/images/partners/zebra.png";
import getac from "/public/images/partners/getac.png";
import proclip from "/public/images/partners/procliplogo.png";
import ruggon from "/public/images/partners/ruggon.png";

// IMPORT ICONS
import { FaHandshake } from "react-icons/fa";

export default function Parnters() {
  return (
    <>
      <div
        id="partners"
        className="relative flex h-1/2 animate-gradient-x items-center justify-center bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-cover bg-center py-40 px-2 md:px-10 xl:shadow-lg"
      >
        <div className="absolute h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="blur-xs h-full w-full object-cover opacity-10"
          >
            <source src="/videos/engineering.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="mx-auto flex h-96 flex-col items-center justify-center gap-2 py-40 xl:container xl:flex-row xl:gap-40">
          <div className="z-20 flex justify-center pb-5 text-4xl text-white">
            <a href="/#partners">
              <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-lg p-4 drop-shadow-lg xl:h-48">
                <div className="flex items-center justify-center gap-2 pb-2 text-4xl xl:text-6xl">
                  <div className="font-semibold">Our Partners</div>
                  <div>
                    <FaHandshake />
                  </div>
                </div>

                <div className="text-center text-lg text-neutral-300 md:text-xl">
                  "We've partnered with the best brands in the industry."
                </div>
              </div>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 xl:-translate-x-12 xl:gap-10">
            <div className="xl:-translate-x-10 xl:-translate-y-10">
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

            <div className="xl:translate-x-10 xl:-translate-y-10">
              <Partner
                title="Getac"
                description="cool man"
                url="https://www.getac.com/"
                img={getac}
              />
            </div>

            <div className="xl:-translate-x-10 xl:translate-y-10">
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

            <div className="xl:translate-x-10 xl:translate-y-10">
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
