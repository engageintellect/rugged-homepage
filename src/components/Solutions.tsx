import WideCard from "./WideCard";
import Image from "next/image";
import laptop from "/public/images/products/rugged_laptop.jpg";
import Slider from "./Slider";

export default function Solutions() {
  return (
    <>
      <div className="z-0 flex flex-col items-center justify-center bg-neutral-900 xl:bg-neutral-900">
        <div
          className="flex items-center justify-center bg-neutral-900 px-2 xl:w-[66vw] xl:bg-neutral-900 xl:px-10"
          id="solutions"
        >
          <div className="flex h-96 items-center justify-center xl:-mb-20">
            <WideCard
              title="Rugged Solutions"
              description="Every organization is unique. Our experts are committed to helping you select a solution that matches your specific needs – from warehouse equipment to rugged computing and scanning."
              url="/#card_stack"
            />
          </div>
        </div>

        <div className="relative z-40 flex items-center justify-center bg-transparent xl:translate-y-24">
          <a href="#card_stack">
            <div className="md:hidden">
              <Image
                src={laptop}
                alt="laptop"
                className=" mx-auto w-full bg-transparent drop-shadow-xl transition-all duration-200 md:w-3/4"
              />
            </div>
          </a>

          <a href="#card_stack">
            <div className="hidden transition-transform duration-200 hover:cursor-pointer active:scale-95 md:flex">
              <Slider
                component={
                  <Image
                    src={laptop}
                    alt="laptop"
                    className=" mx-auto w-full bg-transparent drop-shadow-xl transition-all duration-200 md:w-[768px]"
                  />
                }
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
