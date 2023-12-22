import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { Lander } from "./Components/Lander";
import { Blog } from "./Components/Blog";
import { Accordion } from "./Components/Accordion";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Lander />,
    },
    {
      path: "/accordion",
      element: <Accordion />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
