// import WideCard from "./WideCard"

import Indusrty from "./Industry";
import Image from "next/image";

export default function Industries() {
  return (
    <>
      <div className=" bg-neutral-800" id="learn_more">
        <div className="lx:px-10 p-2 py-20">
          <div className="pb-2 text-center text-5xl font-semibold text-white sm:text-6xl md:text-7xl">
            Industries
          </div>
          <div className="text-center text-neutral-400 md:text-xl">
            "hello there world, how are you doing today?"
          </div>
        </div>

        <div className="scroll-hide flex h-1/2 gap-2 overflow-x-auto p-2 md:gap-4 md:p-4">
          <div>
            <Indusrty
              title="Cannabis"
              description="Description"
              url="https://www.google.com"
              img="/images/industries/1.png"
            />
          </div>

          <div>
            <Indusrty
              title="Racing"
              description="Description"
              url="https://www.google.com"
              img="/images/industries/1.png"
            />
          </div>

          <div>
            <Indusrty
              title="Aerospace"
              description="Description"
              url="https://www.google.com"
              img="/images/industries/1.png"
            />
          </div>

          <div>
            <Indusrty
              title="Title"
              description="Description"
              url="https://www.google.com"
              img="/images/industries/1.png"
            />
          </div>

          <div>
            <Indusrty
              title="Title"
              description="Description"
              url="https://www.google.com"
              img="/images/industries/1.png"
            />
          </div>

          <div>
            <Indusrty
              title="Title"
              description="Description"
              url="https://www.google.com"
              img="/images/industries/1.png"
            />
          </div>

          <div>
            <Indusrty
              title="Title"
              description="Description"
              url="https://www.google.com"
              img="/images/industries/1.png"
            />
          </div>
        </div>
      </div>
    </>
  );
}
