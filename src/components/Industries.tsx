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
      <div
        className="z-0 bg-neutral-900 xl:flex xl:items-center xl:justify-center xl:bg-neutral-800"
        id="industries"
      >
        <div
          className="z-10 w-full bg-neutral-700 xl:rounded-t-lg xl:bg-neutral-700 xl:py-40 xl:shadow-lg"
          id="learn_more"
        >
          <div className="mx-auto flex h-96 items-center justify-center px-2 xl:w-[33vw]">
            <WideCard
              title="Industries"
              description="We serve a wide range of industries, we're confident we can cater to the unique needs of your business."
              url="/#industries"
            />
          </div>
        </div>

        <div
          id="industries"
          className="scroll-hide flex h-1/2 snap-x snap-mandatory gap-2 overflow-x-auto p-2 md:gap-4 md:p-4"
        >
          <div id="Distribution & Warehousing" className="snap-always">
            <Indusrty
              title="Distribution & Warehousing"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={distribution}
            />
          </div>
          <div id="industries" className="snap-always">
            <Indusrty
              title="Cannabis"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={cannabis}
            />
          </div>
          <div className="snap-always">
            <Indusrty
              title="Oil & Gas"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={oil_gas}
            />
          </div>
          <div className="snap-always">
            <Indusrty
              title="Transportation & Logistics"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={transportation}
            />
          </div>
          <div className="snap-always">
            <Indusrty
              title="Fire"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={fire}
            />
          </div>
          <div className="snap-always">
            <Indusrty
              title="Police"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={police}
            />
          </div>
          <div className="snap-always">
            <Indusrty
              title="Construction"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={construction}
            />
          </div>

          <div className="snap-always">
            <Indusrty
              title="Utilities"
              description="Cultivation, Manufacturing, Distribution, Retail."
              url="https://www.google.com"
              img={utilities}
            />
          </div>
          <div className="snap-always">
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
