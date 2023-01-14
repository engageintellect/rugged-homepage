import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface LinkedScrollProps {
  children: React.ReactNode;
}

const LinkedScroll: React.FC<LinkedScrollProps> = ({ children }) => {
  const ref = useRef(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      const opacity = 1 - top / window.innerHeight;
      setOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: opacity }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

export default LinkedScroll;
