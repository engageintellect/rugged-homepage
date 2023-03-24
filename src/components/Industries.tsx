import Indusrty from "./Industry";
import WideCard from "./WideCard";

import police from "/public/images/industries/police.jpg";
import cannabis from "/public/images/industries/cannabis.jpg";
import construction from "/public/images/industries/construction.jpg";
import fire from "/public/images/industries/fire2.jpg";
import oil_gas from "/public/images/industries/oil_gas.jpg";
import transportation from "/public/images/industries/transportation.jpg";
import utilities from "/public/images/industries/utilities.jpg";
import ems from "/public/images/industries/ems.jpg";
import distribution from "/public/images/industries/warehouse.jpg";

import { industries } from "../data/data";

import { FaBuilding } from "react-icons/fa";

export default function Industries() {
  return (
    <>
      <div
        className="mx-auto flex h-96 items-center justify-center px-2 xl:w-[33vw]"
        id="industries"
      >
        <WideCard
          title="Industries"
          description="We serve a wide range of industries. We'll help reduce your cost and improve operational efficiency to better meet the needs of the future."
          url="/#industries"
          icon={<FaBuilding />}
        />
      </div>
      <div className="z-0 mx-auto bg-neutral-900 xl:container xl:flex xl:items-center xl:justify-center xl:bg-neutral-900">
        <div className="scroll-hide flex snap-x snap-mandatory gap-2 overflow-x-auto p-2 md:gap-4 md:p-4">
          <div className="snap-center">
            <Indusrty
              title={industries.transportation_logistics.title}
              description={industries.transportation_logistics.description}
              url="https://www.google.com"
              img={transportation}
            />
          </div>
          <div id="Distribution & Warehousing" className="snap-center ">
            <Indusrty
              title={industries.distribution_warehousing.title}
              description={industries.distribution_warehousing.description}
              url="https://www.google.com"
              img={distribution}
            />
          </div>
          <div id="industries" className="snap-center">
            <Indusrty
              title={industries.cannabis.title}
              description={industries.cannabis.description}
              url="https://www.google.com"
              img={cannabis}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title={industries.oil_gas.title}
              description={industries.oil_gas.description}
              url="https://www.google.com"
              img={oil_gas}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title={industries.fire.title}
              description={industries.fire.description}
              url="https://www.google.com"
              img={fire}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title={industries.police.title}
              description={industries.police.description}
              url="https://www.google.com"
              img={police}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title={industries.construction.title}
              description={industries.construction.description}
              url="https://www.google.com"
              img={construction}
            />
          </div>

          <div className="snap-center">
            <Indusrty
              title={industries.utilities.title}
              description={industries.utilities.description}
              url="https://www.google.com"
              img={utilities}
            />
          </div>
          <div className="snap-center">
            <Indusrty
              title={industries.ems.title}
              description={industries.ems.description}
              url="https://www.google.com"
              img={ems}
            />
          </div>
        </div>
      </div>
    </>
  );
}
