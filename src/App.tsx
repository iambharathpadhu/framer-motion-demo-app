import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import React from "react";
import { Home } from "./pages/home";
import { Gallery } from "./template/Gallery";
import { londonPhotosMetadata } from "./data";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/accordion",
      element: <p>Hello World</p>,
    },
    {
      path: "/blog",
      element: (
        <Gallery
          photos={londonPhotosMetadata}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="canary"
          alt="A building in Canary Wharf"
        />
      ),
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
