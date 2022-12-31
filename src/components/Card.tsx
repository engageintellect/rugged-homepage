import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  url: string;
};

export default function Card({ title, url }: PropsWithChildren<CardProps>) {
  return (
    <>
      <a href={url}>
        <div className="flex h-full items-center justify-center overflow-hidden rounded-md bg-neutral-700 p-4 text-white transition-colors duration-300 hover:bg-neutral-600 hover:shadow-md lg:h-32 xl:h-24">
          <div className="text-xl font-semibold md:text-xl">{title}</div>
        </div>
      </a>
    </>
  );
}
