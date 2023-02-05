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
    <div className="transition-color group h-[15rem] w-[20rem] overflow-hidden text-white duration-300 md:h-[20rem] md:w-[25rem] xl:h-[25rem] xl:w-[30rem]">
      <div className="relative flex h-full flex-col items-center justify-center bg-neutral-800 transition-transform duration-300">
        <a href="/#form">
          <div>
            <Image
              src={img}
              alt="Picture of the author"
              fill
              sizes="100%"
              className="z-10 object-cover opacity-25 transition-all duration-300 group-hover:scale-105 group-hover:opacity-10"
            />

            <div className="relative z-20 mx-auto w-2/3">
              <div className="z-20">
                <div className="text-xl font-semibold transition-all duration-500 group-hover:scale-105 md:text-2xl">
                  {title}
                </div>
                <div className="md:text-md text-sm text-neutral-400">
                  {description}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
