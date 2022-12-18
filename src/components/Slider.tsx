import { motion, Variants } from "framer-motion";


const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 1
    }
  }
};


export default function Slider () {
	return (
		<>
			<motion.div
			className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
			>
				<motion.div className="" variants={cardVariants}>
					
					{/* PAYLOAD */}
					<>
						<div className="bg-red-500 h-48">
							hello there world
						</div>
					</>

      	</motion.div>
    	</motion.div>
		</>
	)
}

