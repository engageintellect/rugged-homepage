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
    <>
      <a href="/#form" className="group flex flex-col">
        <div className="transition-color h-64 w-72 overflow-hidden text-white shadow-lg duration-300 md:h-72 md:w-72 xl:h-96 xl:w-96">
          <div className="flex h-full flex-col items-center justify-center rounded-t-lg bg-neutral-800 transition-all duration-300 hover:rounded-t-lg group-hover:bg-neutral-700">
            <Image
              src={img}
              alt="Picture of the author"
              className="z-10 rounded-lg p-4 opacity-100 transition-all duration-500 group-hover:scale-[105%] group-hover:opacity-100"
            />
          </div>
        </div>

        <div className="h-1/3 overflow-hidden rounded-b-lg bg-neutral-500 p-4">
          <div className="text-xl font-semibold text-neutral-100 md:text-2xl">
            {title}
          </div>
          <div className="md:text-md text-sm text-neutral-200">
            {description}
          </div>
        </div>
      </a>
    </>
  );
}
