import Image from "next/image";

import { type PropsWithChildren } from "react";

type PartnerProps = {
  title: string;
  description: string;
  url: string;
  img: any;
};

export default function Partner({
  title,
  description,
  url,
  img,
}: PropsWithChildren<PartnerProps>) {
  return (
    <>
      <a target="_blank" href={url}>
        <div className="">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white transition-transform hover:scale-105 hover:shadow-xl md:h-40 md:w-40">
            {/* <div className="text-xl md:text-2xl font-semibold lg:text-4xl pb-2 z-10">{title}</div> */}
            {/* <div className="text-neutral-800 font-bold md:text-xl text-center absolute z-50">{description}</div> */}
            <div className="relative">
              <Image
                src={img}
                alt="Picture of the author"
                className="rounded-full object-cover" // just an example
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
