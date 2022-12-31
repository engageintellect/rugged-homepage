import Image from "next/image";
import logo from "/public/images/logos/RD-logo.png";
import { FaTwitter, FaEnvelope } from "react-icons/fa";
import { company_info } from "../data/data";

export default function Navbar() {
  return (
    <>
      <div className="navbar sticky top-0 z-50 bg-neutral-900 py-2 text-lg text-white">
        <div className="mx-2 md:mx-10">
          <div className="grid grid-cols-2 items-center ">
            <a href="/#top">
              <div className="text-md flex flex-row items-center justify-start gap-2 md:text-xl">
                <div className="w-12">
                  <Image src={logo} alt="Rugged Development" />
                </div>
                <div className="hidden md:flex">Rugged Development</div>
              </div>
            </a>

            <div className="flex justify-end gap-2">
              <a href={company_info.email}>
                <div className="cursor-pointer rounded-lg bg-blue-700 px-4 hover:scale-105 hover:bg-blue-600">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <FaEnvelope className="h-10 text-sm text-white" />
                    <span className="font-semibold">Contact Us</span>
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
