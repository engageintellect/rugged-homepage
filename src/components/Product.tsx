import Image from "next/image";

import { type PropsWithChildren } from "react";

type ProductProps = {
  title: string;
  description: string;
  url: string;
  img: any;
};

export default function Product({
  title,
  description,
  url,
  img,
}: PropsWithChildren<ProductProps>) {
  return (
    <div className="transition-color h-64 w-64 overflow-hidden rounded-lg text-white shadow-lg duration-300 md:h-64 md:w-64 xl:h-96 xl:w-96">
      <div className="group relative flex h-full flex-col items-center justify-center bg-neutral-800 transition-transform duration-300 hover:scale-110 hover:bg-neutral-700">
        <a href="/#form">
          <div>
            <Image
              src={img}
              alt="Picture of the author"
              // objectFit="cover" // change to suit your needs
              fill
              sizes="50%"
              className="z-10 rounded-lg object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-10"
            />

            <div className="relative z-20 mx-auto w-2/3 opacity-0 group-hover:opacity-100">
              <div className="z-20">
                <div className="text-xl font-semibold md:text-2xl">{title}</div>
                <div className="md:text-md text-sm text-neutral-300">
                  {description}
                </div>
              </div>
              {/* <div className="md:text-md text-sm">{url}</div> */}
              {/* <div className="md:text-md text-sm">{img}</div> */}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
