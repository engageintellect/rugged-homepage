import { type PropsWithChildren } from "react";
import Image from "next/image";

type CardProps = {
  avatar?: string;
  title: string;
  description: string;
  url: string;
};

export default function Tweet({
  avatar,
  title,
  description,
  url,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <a href={url} target="_blank">
        <div className="h-52 w-64 overflow-hidden rounded-xl bg-neutral-700 p-2 text-white shadow-md transition-colors duration-300 hover:bg-neutral-600 md:w-72">
          <div className="flex items-center gap-2">
            {avatar ? (
              <Image
                src={avatar}
                alt="twitter"
                className=" h-10 w-10 rounded-full object-cover shadow-lg"
              />
            ) : null}
            <div className="md:text-md text-sm font-semibold">{title}</div>
          </div>
          <div className="p-2 text-xs italic text-white md:text-sm">
            {description}
          </div>
        </div>
      </a>
    </>
  );
}
