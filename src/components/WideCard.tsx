import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  description: string;
  url: string;
};

export default function WideCard({
  title,
  description,
  url,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <a href={url}>
        <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-lg bg-neutral-800 p-4 text-white lg:px-40 xl:h-48 xl:transition-transform xl:hover:scale-105">
          <div className="pb-2 text-4xl font-semibold">{title}</div>
          <div className="text-center text-neutral-400 md:text-xl">
            "{description}"
          </div>
        </div>
      </a>
    </>
  );
}
