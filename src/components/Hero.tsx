import { type PropsWithChildren } from "react";
import Link from "next/link";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({
  // title,
  description,
}: PropsWithChildren<HeroProps>) {
  return (
    <div className=" bg-hero flex h-64 md:h-96 items-center justify-center bg-gradient-to-r 
		from-neutral-500 
		to-neutral-500 
		via-neutral-500 
		animate-gradient-x
		bg-cover bg-center shadow-lg
		">
      <div className="text-center text-white">
        <div className="my-2 md:my-5 text-4xl sm:text-5xl font-semibold tracking-tighter md:text-7xl">
          {/* {title} */}
          <Link href="/">
            Rugged<span className="text-blue-400"></span> Development
          </Link>
        </div>
        <div className="text-md md:text-xl tracking-tighter xl:text-2xl px-5 md:px-20">
          {description}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Link href="/#learn_more">
            <button className="mt-4 rounded-lg bg-blue-800 p-4 text-white shadow-lg hover:scale-105 hover:bg-blue-700">
              Learn More
            </button>
          </Link>

          <Link href="/#contribute">
            <button className="mt-4 rounded-lg bg-blue-800 p-4 text-white shadow-lg hover:scale-105 hover:bg-blue-700">
              Get a Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
