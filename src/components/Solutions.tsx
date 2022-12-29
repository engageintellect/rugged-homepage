import WideCard from "./WideCard";

import Image from "next/image";

import laptop from "/public/images/products/rugged_laptop.jpg";

export default function TeamSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-neutral-800">
        <div
          className="flex items-center justify-center bg-neutral-800 px-2 xl:w-[66vw] xl:px-10"
          id="about"
        >
          <div className="flex h-96 items-center justify-center">
            <WideCard
              title="Rugged Solutions"
              description="Every organization is unique. Our experts are committed to helping you select a solution that matches your specific needs – from warehouse equipment to rugged computing and scanning."
              url="/#solutions"
            />
          </div>
        </div>
        <div className="z-50 flex items-center justify-center bg-neutral-800">
          <Image src={laptop} alt="Picture of the author" className="w-full md:w-1/2" />
        </div>
      </div>
    </>
  );
}
