import { useState } from "react";
import { SimpleAccordion } from "./SimpleAccordion";
import { AnimatedAccordion } from "./AnimatedAccordion";
import { motion } from "framer-motion";

export function Accordion() {
  const [isAnimated, toggleAnimated] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 2.0, delay: 0.5 } }}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <button
        onClick={() => {
          toggleAnimated((prev) => !prev);
        }}
      >
        Animate my accordion!
      </button>
      {isAnimated ? <AnimatedAccordion /> : <SimpleAccordion />}
    </motion.div>
  );
}
