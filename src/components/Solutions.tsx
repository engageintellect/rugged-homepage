import Solution from "./Solution";
import WideCard from "./WideCard";

import forest from "/public/images/cards/forest.jpg";
import police from "/public/images/industries/police.jpg";
import cannabis from "/public/images/industries/cannabis.jpg";
import construction from "/public/images/industries/construction.jpg";
import fire from "/public/images/industries/fire.jpg";
import oil_gas from "/public/images/industries/oil_gas.jpg";
import transportation from "/public/images/industries/transportation.jpg";
import utilities from "/public/images/industries/utilities.jpg";
import ems from "/public/images/industries/ems.jpg";
import distribution from "/public/images/industries/distribution.jpg";
import SliderRight from "./SliderRight";

import mountains from "/public/images/hero/rugged_mountains.jpg";
import circut from "/public/images/circut.jpg";
import barcode_scanning from "/public/images/industries/barcode_printing.jpg";
import asset_tracking from "/public/images/industries/asset_tracking.jpg";
import wearable_computing from "/public/images/industries/wearable_computing.jpg";
import cameras from "/public/images/industries/cameras.png";

import { FaBuilding, FaChartLine } from "react-icons/fa";

export default function Solutions() {
  return (
    <>
      <div className="bg-neutral-800">
        <div
          id="solutions"
          className="mx-auto flex h-96 items-center justify-center bg-neutral-800 px-2 xl:w-[33vw]"
        >
          <WideCard
            title="Solutions"
            description="We serve a wide range of industries. We'll help reduce cost and improve operational efficiency to better meet the needs of the future."
            url="/#industries"
            icon={<FaChartLine />}
          />
        </div>
        <div className="bg-neutral-00 z-0 mx-auto xl:container xl:flex xl:items-center xl:justify-center xl:bg-neutral-800">
          <div
            id="industries"
            className="scroll-hide flex snap-x snap-mandatory gap-2 overflow-x-auto p-2 md:gap-4 md:p-4"
          >
            <div className="snap-center">
              <Solution
                title={"Asset Tracking & Inventory Management"}
                description="Cultivation, Manufacturing, Distribution, Retail."
                url="https://www.google.com"
                img={asset_tracking}
              />
            </div>
            <div id="Distribution & Warehousing" className="snap-center ">
              <Solution
                title={"Video Surveillance"}
                description="Cultivation, Manufacturing, Distribution, Retail."
                url="https://www.google.com"
                img={cameras}
              />
            </div>
            <div id="industries" className="snap-center">
              <Solution
                title={"Rugged Computing"}
                description="Cultivation, Manufacturing, Distribution, Retail."
                url="https://www.google.com"
                img={fire}
              />
            </div>
            <div className="snap-center">
              <Solution
                title={"Wearable Technology"}
                description="Cultivation, Manufacturing, Distribution, Retail."
                url="https://www.google.com"
                img={wearable_computing}
              />
            </div>
            <div className="snap-center">
              <Solution
                title={"RFID & Barcode Scanning"}
                description="Cultivation, Manufacturing, Distribution, Retail."
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
