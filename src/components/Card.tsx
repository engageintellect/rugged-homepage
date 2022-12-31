import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  url: string;
};

export default function Card({ title, url }: PropsWithChildren<CardProps>) {
  return (
    <>
      <a href={url}>
        <div className="flex h-full items-center justify-center overflow-hidden rounded-md bg-neutral-800 p-4 text-white transition-colors duration-200 hover:bg-neutral-700 hover:shadow-md">
          <div className="text-xl font-semibold md:text-xl">{title}</div>
        </div>
      </a>
    </>
  );
}
