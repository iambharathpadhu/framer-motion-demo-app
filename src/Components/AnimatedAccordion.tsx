import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function AccordionComponent({
  i,
  expanded,
  setExpanded,
}: {
  i: number;
  expanded: number | false;
  setExpanded: (i: number | false) => void;
}) {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
        style={{
          width: "300px",
          padding: "20px",
          cursor: "pointer",
          height: "50px",
          backgroundColor: "lightblue",
          borderBottom: "1px solid black",
          margin: "10px auto",
        }}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            Content Goes here
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
}

export function AnimatedAccordion() {
  const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        <AccordionComponent
          i={i}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </>
  );
}
