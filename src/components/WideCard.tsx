import { type PropsWithChildren } from "react";

type CardProps = {
  title: string;
  description: string;
  url: string;
  icon: any;
};

export default function WideCard({
  title,
  description,
  url,
  icon,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <a href={url}>
        <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-lg p-4 text-white xl:h-48 xl:transition-transform">
          <div className="flex flex-col items-center justify-center">
            <div className="pb-2 text-center text-4xl font-semibold xl:text-6xl">
              <div className="flex gap-5">
                <div className="pb-2">{title}</div>
                <div>{icon}</div>
              </div>
            </div>
            <div className="text-center text-lg text-neutral-400 md:w-[50vw] md:text-xl xl:w-[33vw]">
              "{description}"
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
