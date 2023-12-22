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
      <header
        onClick={() => setExpanded(isOpen ? false : i)}
        style={{
          width: "300px",
          padding: "20px",
          cursor: "pointer",
          height: "50px",
          backgroundColor: "#0055FF",
          borderBottom: "1px solid black",
          margin: "10px auto",
        }}
      />
      {isOpen && <section key={`noAnimation${i}`}>Content goes here</section>}
    </>
  );
}

export function SimpleAccordion() {
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
