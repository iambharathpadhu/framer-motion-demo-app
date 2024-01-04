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
      <header
        onClick={() => setExpanded(isOpen ? false : i)}
        style={{
          width: "300px",
          padding: "0 20px",
          cursor: "pointer",
          height: "50px",
          backgroundColor: "#0055FF",
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
        <ChevronDownIcon
          style={{ height: "16px", width: "16px", color: "white" }}
        />
      </header>
      {isOpen && (
        <section
          key={`noAnimation${i}`}
          style={{
            width: "300px",
            padding: "20px",
            cursor: "pointer",
            height: "auto",
            backgroundColor: "#d9d9d9",
            borderRadius: "8px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </section>
      )}
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
