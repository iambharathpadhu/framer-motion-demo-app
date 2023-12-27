import { useState } from "react";
import { SimpleAccordion } from "./SimpleAccordion";
import { AnimatedAccordion } from "./AnimatedAccordion";

export function Accordion() {
  const [isAnimated, toggleAnimated] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          toggleAnimated((prev) => !prev);
        }}
      >
        Animate my accordion!
      </button>
      {isAnimated ? <AnimatedAccordion /> : <SimpleAccordion />}
    </div>
  );
}
