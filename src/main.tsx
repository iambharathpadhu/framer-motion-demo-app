import "./index.css";
import * as ReactDOMClient from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
