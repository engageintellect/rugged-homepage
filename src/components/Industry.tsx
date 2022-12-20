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
    <div className="transition-color h-40 w-52 overflow-hidden rounded-lg bg-neutral-700 p-2 text-white shadow-lg duration-300 hover:bg-neutral-600 md:h-64 md:w-64 xl:h-96 xl:w-96">
      <div className="flex h-full flex-col items-center justify-center">
        <div>
          <div className="text-xl font-semibold md:text-2xl">{title}</div>
          <div className="md:text-md text-sm">{description}</div>
          <div className="md:text-md text-sm">{url}</div>
          <div className="md:text-md text-sm">{img}</div>
        </div>
      </div>
    </div>
  );
}
