import Image from "next/image";

import { type PropsWithChildren } from "react";

type ProductProps = {
  title: string;
  description: string;
  url: string;
  tags: string[];
  img: any;
  isNew?: boolean;
};

export default function Product({
  title,
  description,
  tags,
  url,
  img,
  isNew,
}: PropsWithChildren<ProductProps>) {
  const t = tags;
  return (
    <>
      <div className="transition-color group overflow-hidden text-white shadow-lg duration-300">
        <a href={url}>
          <div className="transition-color h-[15rem] w-[20rem] overflow-hidden text-white shadow-lg duration-300 md:h-[20rem] md:w-[25rem]">
            <div className="flex h-full flex-col items-center justify-center bg-neutral-800 transition-all duration-300 group-hover:bg-neutral-800/50">
              <Image
                src={img}
                alt="Picture of the author"
                className="z-10 p-10 opacity-100 drop-shadow-lg transition-all duration-500 group-hover:scale-[105%] group-hover:opacity-100"
              />
            </div>
          </div>

          <div className="animate-all card-body h-full bg-neutral-700 p-5 duration-300 group-hover:bg-neutral-700/70">
            <h2 className="card-title text-xl font-extrabold">
              {title}

              {isNew && (
                <div className="badge-secondary badge scale-90 p-2">NEW!</div>
              )}
            </h2>

            <div className="card-actions justify-start font-bold text-neutral-200">
              {tags.map((tag) => (
                <div className="badge-outline badge badge-sm p-3 font-thin">
                  {tag}
                </div>
              ))}
            </div>

            <div className="text-md my-2 text-neutral-300">
              <p>{description}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
