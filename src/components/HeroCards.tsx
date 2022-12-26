import { motion } from "framer-motion";
import Card from "./Card";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function HeroCards() {
  return (
    <>
      <motion.nav
        initial={{
          y: +10,
          opacity: 0,
          scale: 1,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
          type: "spring",
          // stiffness: 100,
        }}
      >
        <div className="bg-neutral-800 p-2 md:bg-neutral-900 md:p-4">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4">
            <Card
              title="About Us"
              description="What is T3d , and how can it help me or my team?"
              url="#about"
            />
            <Card
              title="Our Services"
              description="Everything you need to get started with T3D."
              url="#industries"
            />
            <Card
              title="Contact Us"
              description="Get in touch with our team."
              url="mailto:info@ruggeddevelopment.com"
            />
            <div className="flex h-full items-center justify-center overflow-hidden rounded-md p-4 text-white transition-colors duration-300 md:hidden lg:h-32 xl:h-24">
              <div className="text-xl font-semibold md:text-xl">
                <a href="#about">
                  <button>
                    <ChevronDownIcon className="h-6 w-6" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
