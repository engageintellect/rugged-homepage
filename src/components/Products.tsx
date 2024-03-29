import Product from "./Product";
import WideCard from "./WideCard";
import SliderX from "./motion/SliderX";

import rugged from "/public/images/products/rugged.webp";
import rugged_tablet from "/public/images/products/rugged_tablet.png";
import barcode_scanner from "/public/images/products/barcode_scanner.png";
import mobile_computing from "/public/images/products/mobile_computing.png";
import rfid from "/public/images/products/rfid.webp";
import wearable_computing from "/public/images/products/wearable_computing.webp";
import surveillance from "/public/images/products/surveillance.png";
import label_printer from "/public/images/products/label_printer.png";

import { products } from "../data/data";
import { FaReact } from "react-icons/fa";

export default function Products() {
  return (
    <>
      <div
        id="products"
        className="mx-auto flex h-96 items-center justify-center px-2 xl:w-[33vw]"
      >
        <WideCard
          title="Products"
          description="We have carefully curated the most sought after products, by the brands you know and trust."
          url="/#products"
          icon={<FaReact />}
        />
      </div>
      <div className="z-0 mx-auto bg-neutral-900 xl:container xl:flex xl:items-center xl:justify-center xl:bg-neutral-900">
        <div
          id="products"
          className="scroll-hide -2 snap-x snap-mandatory overflow-x-auto p-2 md:p-4"
        >
          <SliderX
            component={
              <div className="flex gap-2 md:gap-4">
                <div id="Rugged Laptops & Tablets" className="flex snap-center">
                  <Product
                    title={products.rugged_computing.name}
                    description={products.rugged_computing.description}
                    url="/#form"
                    tags={products.rugged_computing.tags}
                    img={rugged}
                  />
                </div>
                <div id="barcode_scanning" className="flex snap-center">
                  <Product
                    title={products.rugged_tablets.name}
                    description={products.rugged_tablets.description}
                    url="/#form"
                    tags={products.rugged_tablets.tags}
                    img={rugged_tablet}
                    isNew={true}
                  />
                </div>
                <div className="flex snap-center">
                  <Product
                    title={products.barcode_scanning.name}
                    description={products.barcode_scanning.description}
                    url="/#form"
                    tags={products.barcode_scanning.tags}
                    img={barcode_scanner}
                  />
                </div>
                <div className="flex snap-center">
                  <Product
                    title={products.mobile_computing.name}
                    description={products.mobile_computing.description}
                    url="/#form"
                    tags={products.mobile_computing.tags}
                    img={mobile_computing}
                    isNew={true}
                  />
                </div>
                <div className="flex snap-center">
                  <Product
                    title={products.wearable_computing.name}
                    description={products.wearable_computing.description}
                    url="/#form"
                    tags={products.wearable_computing.tags}
                    img={wearable_computing}
                  />
                </div>
                <div className="flex snap-center">
                  <Product
                    title={products.label_printers.name}
                    description={products.label_printers.description}
                    url="/#form"
                    tags={products.label_printers.tags}
                    img={label_printer}
                  />
                </div>

                <div className="flex snap-center">
                  <Product
                    title={products.rfid.name}
                    description={products.rfid.description}
                    url="/#form"
                    tags={products.rfid.tags}
                    img={rfid}
                  />
                </div>
                <div className="flex snap-center">
                  <Product
                    title={products.surveillance.name}
                    description={products.surveillance.description}
                    url="/#form"
                    tags={products.surveillance.tags}
                    img={surveillance}
                  />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </>
  );
}
