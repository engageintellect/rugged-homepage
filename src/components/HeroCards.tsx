import { motion } from "framer-motion";
import Card from "./Card";

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
            <Card title="About Us" url="#about" />
            <Card title="Solutions" url="#industries" />
            <Card title="Industries" url="#industries" />
            <Card title="Partners" url="#partners" />
          </div>
        </div>
      </motion.nav>
    </>
  );
}
