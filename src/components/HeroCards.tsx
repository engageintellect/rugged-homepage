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
          duration: 1,
          type: "spring",
          // stiffness: 100,
        }}
      >
        <div className="bg-neutral-900 p-2 md:bg-neutral-900 md:p-4">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-4">
            <Card
              title="About Us"
              description="What is T3d , and how can it help me or my team?"
              url="#about"
            />
            <Card
              title="Solutions"
              description="Everything you need to get started with T3D."
              url="#industries"
            />
            <Card
              title="Industries"
              description="Get in touch with our team."
              url="#industries"
            />
            <Card
              title="Partners"
              description="Get in touch with our team."
              url="#partners"
            />
          </div>
        </div>
      </motion.nav>
    </>
  );
}
