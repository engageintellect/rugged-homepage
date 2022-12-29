import WideCard from "./WideCard";

import Image from "next/image";

import canna from "/public/images/products/rugged_laptop.jpg";

export default function TeamSection() {
  return (
    <>
      <div className="bg-neutral-800 px-2 md:px-10 xl:px-60" id="about">
        <div className="flex h-96 items-center justify-center">
          <WideCard
            title="Rugged Solutions"
            description="Every organization is unique. Our experts are committed to helping you select a solution that matches your specific needs – from warehouse equipment to rugged computing and scanning."
            url="/#solutions"
          />
        </div>
      </div>
      <div className="flex justify-center bg-neutral-800 pb-10">
        <Image
          src={canna}
          alt="Picture of the author"
          className="w-full md:w-1/2"
        />
      </div>
    </>
  );
}
