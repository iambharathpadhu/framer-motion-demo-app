import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const visible = { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10, x: -75 },
  visible,
};

export function Home() {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 1.0 } } }}
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        Here is my beautiful creation!
      </motion.h1>
      <motion.li variants={itemVariants}>
        <Link to="/accordion">Accordion</Link>
      </motion.li>
      <motion.li variants={itemVariants}>
        <Link to="/blog">Scroll Based Animation</Link>
      </motion.li>
    </motion.article>
  );
}
