import { motion, Variants } from "framer-motion";
import { type PropsWithChildren } from "react";

type SliderProps = {
  component: any;
};

const cardVariants: Variants = {
  offscreen: {
    x: 100,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1,
    },
  },
};

export default function SliderRight({
  component,
}: PropsWithChildren<SliderProps>) {
  return (
    <>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0 }}
      >
        <motion.div className="" variants={cardVariants}>
          {component}
        </motion.div>
      </motion.div>
    </>
  );
}