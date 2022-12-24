import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  description: string;
  url: string;
};

export default function Tweet({
  title,
  description,
  url,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <a href={url} target="_blank">
        <div className="h-52 w-64 overflow-hidden rounded-xl bg-neutral-700 p-1 text-white shadow-md transition-colors duration-300 hover:bg-neutral-600 md:w-72">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-blue-500"></div>
            <div className="md:text-md text-sm font-semibold">{title}</div>
          </div>
          <div className="p-2 text-xs text-white md:text-sm">{description}</div>
        </div>
      </a>
    </>
  );
}
