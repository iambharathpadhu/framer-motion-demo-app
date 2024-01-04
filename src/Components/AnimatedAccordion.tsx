import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

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
          padding: "0 20px",
          cursor: "pointer",
          height: "50px",
          backgroundColor: "lightblue",
          borderBottom: "1px solid black",
          margin: "10px auto",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white" }}>{`Item ${i + 1}`}</p>
        <AnimatePresence>
          <motion.div
            animate={isOpen ? "opened" : "closed"}
            variants={{
              closed: { rotate: 0 },
              opened: { rotate: -180 },
            }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDownIcon
              style={{ height: "16px", width: "16px", color: "white" }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.header>
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
            style={{
              width: "300px",
              padding: "20px",
              cursor: "pointer",
              height: "50px",
              backgroundColor: "#d9d9d9",
              borderRadius: "8px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
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
