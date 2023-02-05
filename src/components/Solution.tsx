import Image from "next/image";

import { type PropsWithChildren } from "react";

type SolutionProps = {
  title: string;
  description: string;
  url: string;
  img: any;
};

export default function Solution({
  title,
  description,
  url,
  img,
}: PropsWithChildren<SolutionProps>) {
  return (
    <>
      <div className="transition-color group h-[25rem] w-[15rem] overflow-hidden text-white shadow-lg duration-300 md:h-[30rem] md:w-[20rem] xl:h-[35rem] xl:w-[25rem]">
        <div className="relative flex h-full flex-col items-center justify-center transition-all duration-300">
          <a href="/#form">
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
                <div className="md:text-md pt-2 text-sm text-neutral-300">
                  {description}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
