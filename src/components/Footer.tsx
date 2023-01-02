import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { app_info, company_info } from "../data/data";

export default function Footer() {
  return (
    <>
      <div className="z-10 bg-neutral-800 py-10 text-lg text-white">
        <div className="mx-2 md:container md:mx-auto">
          <div className="grid grid-cols-2 items-center">
            <div className="text-md flex flex-col justify-start">
              <a href="/#top">
                {/* Ne<span className="text-blue-500">x</span>um */}
                Rugged Development
              </a>

              <div className="flex flex-row gap-4 py-2 text-2xl">
                <a
                  href={company_info.socials.twitter.url}
                  target="_blank"
                  aria-label="twitter"
                  className="hover:text-neutral-500"
                >
                  <FaTwitter />
                </a>

                <a
                  href={company_info.socials.facebook.url}
                  aria-label="facebook"
                  target="_blank"
                  className="hover:text-neutral-500"
                >
                  <FaFacebook />
                </a>

                <a
                  href={company_info.socials.youtube.url}
                  aria-label="youtube"
                  target="_blank"
                  className="hover:text-neutral-500"
                >
                  <FaYoutube />
                </a>

                <a
                  href={company_info.socials.linkedin.url}
                  target="_blank"
                  aria-label="falinkedin"
                  className="hover:text-neutral-500"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={company_info.socials.instagram.url}
                  target="_blank"
                  aria-label="instagram"
                  className="hover:text-neutral-500"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="text-xs">
                <div>Copyright Rugged Development.</div>

                <div>All Rights Reserved.</div>
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href="https://github.com/engageintellect/rugged-homepage/deployments"
                target="_blank"
              >
                <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-blue-700 hover:scale-105 hover:bg-blue-600">
                  {app_info.version}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
