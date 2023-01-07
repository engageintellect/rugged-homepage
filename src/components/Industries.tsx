import Indusrty from "./Industry";
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

import { FaBuilding } from "react-icons/fa";

export default function Industries() {
  return (
    <>
      <div
        id="industries"
        className="mx-auto flex h-96 items-center justify-center px-2 xl:w-[33vw]"
      >
        <WideCard
          title="Industries"
          description="We serve a wide range of industries, we're confident we can cater to the unique needs of your business."
          url="/#industries"
          icon={<FaBuilding />}
        />
      </div>
      <div className="z-0 mx-auto bg-neutral-900 xl:container xl:flex xl:items-center xl:justify-center xl:bg-neutral-900">
        <div
          id="industries"
          className="scroll-hide flex snap-x snap-mandatory gap-2 overflow-x-auto p-2 md:gap-4 md:p-4"
        >
          <div id="Distribution & Warehousing" className="snap-center ">
            <Indusrty
              title="Distribution & Warehousing"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={distribution}
            />
          </div>
          <div id="industries" className="snap-center">
            <Indusrty
              title="Cannabis"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={cannabis}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title="Oil & Gas"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={oil_gas}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title="Transportation & Logistics"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={transportation}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title="Fire"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={fire}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title="Police"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={police}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title="Construction"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={construction}
            />
          </div>

          <div className="snap-center">
            <Indusrty
              title="Utilities"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={utilities}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title="EMS"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={ems}
            />
          </div>
        </div>
      </div>
    </>
  );
}
