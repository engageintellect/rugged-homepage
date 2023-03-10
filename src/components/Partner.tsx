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
          <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-l from-purple-600 to-blue-600 transition-transform hover:z-30 hover:scale-110 hover:shadow-xl sm:h-36 sm:w-36 md:h-40 md:w-40">
            <div className="relative text-lg font-bold text-white md:text-2xl">
              {title}
            </div>

            <div className="absolute z-20 flex h-28 w-28 items-center justify-center rounded-full bg-white transition-opacity duration-300 hover:scale-105 hover:opacity-0 hover:shadow-xl sm:h-36 sm:w-36 md:h-40 md:w-40">
              <Image
                src={img}
                alt="Picture of the author"
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
