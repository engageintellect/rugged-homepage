import { type PropsWithChildren } from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  msg: string;
  card_class: string;
  img: any;
};

export default function CardStackCard({
  title,
  msg,
  card_class,
  img,
}: PropsWithChildren<CardProps>) {
  return (
    <>
      <div className="relative">
        <a href="/#form">
          <div className={card_class}>
            <div className="overflow-hidden rounded-lg text-white">
              <Image
                src={img}
                alt="Picture of the author"
                // objectFit="cover" // change to suit your needs
                fill
                sizes="100%"
                className="z-10 rounded-lg object-cover opacity-20 transition-opacity duration-700"
              />

              <div className="relative z-20 mx-auto p-4 xl:absolute xl:bottom-0 xl:p-10">
                <div className="z-20">
                  <div className="pb-4 text-xl font-semibold md:text-2xl">
                    {title}
                  </div>
                  <div className="text-sm md:text-lg">{msg}</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
