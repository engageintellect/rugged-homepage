import { type PropsWithChildren } from "react";
import Image, { StaticImageData } from "next/image";

type CardProps = {
  avatar: string | StaticImageData;
  title: string;
  position: string;
  description: string;
  url: string;
};

export default function Tweet({
  avatar,
  title,
  position,
  description,
  url,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <a href={url} target="_blank">
        <div className="h-64 w-64 overflow-hidden rounded-xl bg-neutral-700 p-2 text-white shadow-md transition-colors duration-300 hover:bg-neutral-600 md:w-72">
          <div className="flex items-center">
            <div className="pr-2">
              {avatar ? (
                <Image
                  src={avatar}
                  alt="twitter"
                  className=" h-10 w-10 rounded-full object-cover shadow-lg"
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              )}
            </div>
            <div className="flex flex-col">
              <div className="md:text-md text-sm font-semibold">{title}</div>
              <div className="md:text-md text-xs font-semibold text-neutral-400">
                {position}
              </div>
            </div>
          </div>
          <div className="pt-4 text-xs italic text-white md:text-sm">
            "{description}"
          </div>
        </div>
      </a>
    </>
  );
}
