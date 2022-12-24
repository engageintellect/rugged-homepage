import Indusrty from "./Industry";
import WideCard from "./WideCard";

import forest from "/public/images/cards/forest.jpg";

export default function Industries() {
  return (
    <>
      {/* <div className="bg-neutral-800" id="learn_more">
        <div className="p-2 py-20 md:px-10 xl:px-60">
          <div className="pb-2 text-center text-5xl font-semibold text-white sm:text-6xl md:text-7xl">
            Industries
          </div>
          <div className="text-center text-neutral-400 md:text-xl xl:px-60">
            "We serve a wide range of industries, we're confident we can cater
            to the unique needs of your business."
          </div>
        </div> */}
      <div className="bg-neutral-900">
        <div className="bg-neutral-800 px-2 md:px-10 xl:px-60" id="learn_more">
          <div className="flex h-96 items-center justify-center">
            <WideCard
              title="Industries"
              description="We serve a wide range of industries, we're confident we can cater to the unique needs of your business."
              url="/"
            />
          </div>
        </div>

        <div className="scroll-hide flex h-1/2 gap-2 overflow-x-auto p-2 md:gap-4 md:p-4">
          <div>
            <Indusrty
              title="Cannabis"
              description="Description"
              url="https://www.google.com"
              img={forest}
            />
          </div>

          <div>
            <Indusrty
              title="Racing"
              description="Description"
              url="https://www.google.com"
              img={forest}
            />
          </div>

          <div>
            <Indusrty
              title="Aerospace"
              description="Description"
              url="https://www.google.com"
              img={forest}
            />
          </div>

          <div>
            <Indusrty
              title="Title"
              description="Description"
              url="https://www.google.com"
              img={forest}
            />
          </div>

          <div>
            <Indusrty
              title="Title"
              description="Description"
              url="https://www.google.com"
              img={forest}
            />
          </div>

          <div>
            <Indusrty
              title="Title"
              description="Description"
              url="https://www.google.com"
              img={forest}
            />
          </div>

          <div>
            <Indusrty
              title="Title"
              description="Description"
              url="https://www.google.com"
              img={forest}
            />
          </div>
        </div>
      </div>
    </>
  );
}
