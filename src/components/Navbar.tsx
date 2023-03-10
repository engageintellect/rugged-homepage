import Image from "next/image";
import logo from "/public/images/logos/RD-logo.webp";
import { FaEnvelope } from "react-icons/fa";
import { company_info } from "../data/data";

export default function Navbar() {
  return (
    <>
      <div className=" sticky top-0 z-50 bg-neutral-900/80 py-2 text-lg text-white shadow-lg backdrop-blur-md">
        <div className="mx-2 md:mx-4 xl:container xl:mx-auto">
          <div className="grid grid-cols-2 items-center ">
            <a href="#top">
              <div className="text-md flex flex-row items-center justify-start gap-2 md:text-xl">
                <div className="transition-transoform w-12 duration-200 hover:scale-105">
                  <Image src={logo} alt="Rugged Development" />
                </div>
                <div className="hidden md:flex">Rugged Development</div>
              </div>
            </a>

            <div className="flex justify-end">
              <a href={company_info.email}>
                <div className="transition-color group w-full animate-gradient-x rounded-md bg-gradient-to-r from-purple-700 to-blue-500 px-4 text-white shadow-xl outline-none transition-all duration-500 hover:from-purple-900 hover:to-blue-900 focus:outline-none active:scale-95">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <span className="font-semibold">Contact Us</span>
                    <FaEnvelope className="h-10 text-sm text-white" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
