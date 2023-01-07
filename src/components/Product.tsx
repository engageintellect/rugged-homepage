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
        <div className="transition-color h-64 w-64 overflow-hidden text-white shadow-lg duration-300 md:h-72 md:w-72 xl:h-96 xl:w-96">
          <div className="flex h-full flex-col items-center justify-center rounded-t-2xl bg-neutral-800 transition-all duration-300 hover:rounded-t-2xl group-hover:bg-neutral-700">
            <Image
              src={img}
              alt="Picture of the author"
              className="z-10 rounded-2xl p-4 opacity-100 transition-all duration-500 group-hover:scale-[105%] group-hover:opacity-100"
            />
          </div>
        </div>

        <div className="h-1/3 overflow-hidden rounded-b-2xl bg-neutral-500 p-2">
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
