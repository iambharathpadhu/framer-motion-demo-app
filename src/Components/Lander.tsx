import { useState } from "react";
import { Home } from "./Home";
import { HomeWithoutAnimation } from "./HomeWithoutAnimation";

export function Lander() {
  const [isAnimated, setAnimated] = useState(false);
  return (
    <div>
      <button onClick={() => setAnimated(!isAnimated)}>
        Apply some magic to my homepage!!
      </button>
      {isAnimated ? <Home /> : <HomeWithoutAnimation />}
    </div>
  );
}
