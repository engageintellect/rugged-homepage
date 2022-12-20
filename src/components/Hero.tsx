import { type PropsWithChildren } from "react";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({
  // title,
  description,
}: PropsWithChildren<HeroProps>) {
  return (
    <div
      className=" bg-hero flex h-64 animate-gradient-x items-center justify-center bg-gradient-to-r 
		from-purple-500 
		via-blue-500 
		to-purple-500 
		bg-cover
		bg-center shadow-lg md:h-96
		"
    >
      <div className="text-center text-white">
        <div className="my-2 text-4xl font-semibold tracking-tighter sm:text-5xl md:my-5 md:text-7xl">
          {/* {title} */}
          <a href="/">
            Rugged<span className="text-blue-400"></span> Development
          </a>
        </div>
        <div className="text-md px-5 tracking-tighter md:px-20 md:text-xl xl:text-2xl">
          {description}
        </div>

        <div className="flex items-center justify-center gap-4">
          <a href="/#learn_more">
            <button className="mt-4 rounded-lg bg-blue-800 p-4 text-white shadow-lg hover:scale-105 hover:bg-blue-700">
              Learn More
            </button>
          </a>

          <a href="/#contribute">
            <button className="mt-4 rounded-lg bg-blue-800 p-4 text-white shadow-lg hover:scale-105 hover:bg-blue-700">
              Get a Quote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
