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
    <div className="transition-color h-64 w-64 overflow-hidden rounded-lg bg-neutral-700 text-white shadow-lg duration-300 hover:bg-neutral-600 md:h-64 md:w-64 xl:h-96 xl:w-96">
      <div className="relative flex h-full flex-col items-center justify-center transition-transform duration-300 hover:scale-110">
        <a href="/#contribute">
          <div>
            <Image
              src={img}
              alt="Picture of the author"
              // objectFit="cover" // change to suit your needs
              layout="fill"
              className="absolute top-0 left-0 z-10 object-cover opacity-25 transition-opacity duration-700 hover:opacity-10" // just an example
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
