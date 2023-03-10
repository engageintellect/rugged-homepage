import { motion } from "framer-motion";
import Card from "./Card";

export default function HeroCards() {
  return (
    <>
      <div>
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
          <div className="bg-neutral-900 p-2 md:p-4 xl:bg-neutral-900">
            <div className="mx-auto grid grid-cols-1 gap-2 md:grid-cols-5 md:gap-4 xl:container">
              <Card title="About Us" url="/#about-us" />
              <Card title="Solutions" url="/#solutions" />
              <Card title="Industries" url="/#industries" />
              <Card title="Products" url="/#products" />
              <Card title="Partners" url="/#partners" />
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
