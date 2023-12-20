import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

export function AppWithUI() {
  return (
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
