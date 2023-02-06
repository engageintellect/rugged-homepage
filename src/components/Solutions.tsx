import Solution from "./Solution";
import WideCard from "./WideCard";
import barcode_scanning from "/public/images/industries/barcode_printing.jpg";
import fire from "/public/images/industries/fire.jpg";
import asset_tracking from "/public/images/industries/asset_tracking.jpg";
import wearable_computing from "/public/images/industries/wearable_computing.jpg";
import cameras from "/public/images/industries/cameras.png";

import { solutions } from "../data/data";

import { FaChartLine } from "react-icons/fa";

export default function Solutions() {
  return (
    <>
      <div className="bg-neutral-800 xl:pt-20">
        <div
          id="solutions"
          className="mx-auto flex h-96 items-center justify-center bg-neutral-800 px-2 xl:w-[33vw]"
        >
          <div>
            <WideCard
              title="Solutions"
              description="We serve a wide range of industries. We'll help reduce cost and improve operational efficiency to better meet the needs of the future."
              url="/#industries"
              icon={<FaChartLine />}
            />
          </div>
        </div>
        <div className="bg-neutral-00 z-0 mx-auto xl:container xl:flex xl:items-center xl:justify-center xl:bg-neutral-800">
          <div className="scroll-hide flex snap-x snap-mandatory gap-2 overflow-x-auto p-2 md:gap-4 md:p-4">
            <div className="snap-center">
              <Solution
                title={solutions.asset_tracking.title}
                description={solutions.asset_tracking.description}
                url="https://www.google.com"
                img={asset_tracking}
              />
            </div>
            <div className="snap-center ">
              <Solution
                title={solutions.surveillance.title}
                description={solutions.surveillance.description}
                url="https://www.google.com"
                img={cameras}
              />
            </div>
            <div className="snap-center">
              <Solution
                title={solutions.rugged_computing.title}
                description={solutions.rugged_computing.description}
                url="https://www.google.com"
                img={fire}
              />
            </div>
            <div className="snap-center">
              <Solution
                title={solutions.wearable_technology.title}
                description={solutions.wearable_technology.description}
                url="https://www.google.com"
                img={wearable_computing}
              />
            </div>
            <div className="snap-center">
              <Solution
                title={solutions.rfid.title}
                description={solutions.rfid.description}
                url="https://www.google.com"
                img={barcode_scanning}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
