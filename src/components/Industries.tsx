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

export default function Industries() {
  return (
    <>
      {/* <div className="bg-neutral-800" id="learn_more">
        <div className="p-2 py-20 md:px-10 xl:px-60">
          <div className="pb-2 text-center text-5xl font-semibold text-white sm:text-6xl md:text-7xl">
            Industries
          </div>
          <div className="text-center text-neutral-400 md:text-xl xl:px-60">
            "We serve a wide range of industries, we're confident we can cater
            to the unique needs of your business."
          </div>
        </div> */}
      <div className="bg-neutral-900" id="industries">
        <div className="bg-neutral-800 px-2 md:px-10 xl:px-60" id="learn_more">
          <div className="flex h-96 items-center justify-center">
            <WideCard
              title="Industries"
              description="We serve a wide range of industries, we're confident we can cater to the unique needs of your business."
              url="/#industries"
            />
          </div>
        </div>

        <div
          id="industries"
          className="scroll-hide flex h-1/2 gap-2 overflow-x-auto p-2 md:gap-4 md:p-4"
        >
          <div id="Distribution & Warehousing">
            <Indusrty
              title="Distribution & Warehousing"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={distribution}
            />
          </div>
          <div id="industries">
            <Indusrty
              title="Cannabis"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={cannabis}
            />
          </div>
          <div>
            <Indusrty
              title="Oil & Gas"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={oil_gas}
            />
          </div>
          <div>
            <Indusrty
              title="Transportation & Logistics"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={transportation}
            />
          </div>
          <div>
            <Indusrty
              title="Fire"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={fire}
            />
          </div>
          <div>
            <Indusrty
              title="Police"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={police}
            />
          </div>
          <div>
            <Indusrty
              title="Construction"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={construction}
            />
          </div>

          <div>
            <Indusrty
              title="Utilities"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={utilities}
            />
          </div>
          <div>
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
