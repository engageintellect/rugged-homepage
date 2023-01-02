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
        <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-lg p-4 text-white xl:h-48 xl:transition-transform">
          <div className="flex flex-col items-center justify-center md:w-[50vw] xl:w-[33vw]">
            <div className="pb-2 text-center text-4xl font-semibold">
              {title}
            </div>
            <div className="text-center text-lg text-neutral-400 md:text-xl">
              "{description}"
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
