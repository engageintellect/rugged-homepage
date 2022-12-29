import Image from "next/image";

import { type PropsWithChildren } from "react";

type IndustryProps = {
  title: string;
  description: string;
  url: string;
  img: any;
};

export default function Indusrty({
  title,
  description,
  url,
  img,
}: PropsWithChildren<IndustryProps>) {
  return (
    <div className="transition-color h-64 w-64 overflow-hidden rounded-lg text-white shadow-lg duration-300 md:h-64 md:w-64 xl:h-96 xl:w-96">
      <div className="relative flex h-full flex-col items-center justify-center bg-neutral-700 transition-transform duration-300 hover:scale-110 hover:bg-neutral-500">
        <a href="/#form">
          <div>
            <Image
              src={img}
              alt="Picture of the author"
              // objectFit="cover" // change to suit your needs
              fill
              sizes="100%"
              className="z-10 rounded-lg object-cover opacity-20 transition-opacity duration-700"
            />

            <div className="relative z-20 mx-auto w-2/3">
              <div className="z-20">
                <div className="text-xl font-semibold md:text-2xl">{title}</div>
                <div className="md:text-md text-sm">
                  Description:{description}
                </div>
              </div>
              <div className="md:text-md text-sm">{url}</div>
              {/* <div className="md:text-md text-sm">{img}</div> */}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
