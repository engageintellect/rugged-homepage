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
      <div className="transition-color group overflow-hidden text-white shadow-lg duration-300">
        <a href="/">
          <div className="transition-color h-[15rem] w-[20rem] overflow-hidden text-white shadow-lg duration-300 md:h-[20rem] md:w-[25rem]">
            <div className="flex h-full flex-col items-center justify-center bg-neutral-800 transition-all duration-300 group-hover:bg-neutral-800/50">
              <Image
                src={img}
                alt="Picture of the author"
                className="z-10 p-10 opacity-100 drop-shadow-lg transition-all duration-500 group-hover:scale-[105%] group-hover:opacity-100"
              />
            </div>
          </div>

          <div className="card-body h-full bg-neutral-700">
            <h2 className="card-title text-2xl font-extrabold">
              {title}
              <div className="badge-primary badge scale-90">NEW</div>
            </h2>

            <div className="card-actions justify-start font-bold text-neutral-200">
              <div className="badge-outline badge">Fashion</div>
              <div className="badge-outline badge">Products</div>
            </div>

            <div className="my-2 text-neutral-300">
              <p>{description}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
