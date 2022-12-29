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
    <div className="transition-color h-64 w-64 overflow-hidden rounded-lg bg-neutral-700 text-white shadow-lg duration-300 group-hover:bg-neutral-600 md:h-64 md:w-64 xl:h-96 xl:w-96">
      <div className="relative flex h-full flex-col items-center justify-center transition-transform duration-300 hover:scale-110">
        <a href="/#form">
          <div>
            <Image
              src={img}
              alt="Picture of the author"
              // objectFit="cover" // change to suit your needs
              fill
              sizes="100%"
              className="z-10 rounded-lg object-cover opacity-25 transition-opacity duration-700 hover:opacity-10"
            />

            <div className="relative mx-auto w-2/3">
              <div className="text-xl font-semibold md:text-2xl">{title}</div>
              <div className="md:text-md text-sm">
                Description:{description}
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
