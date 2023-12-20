import "./index.css";
import * as ReactDOMClient from "react-dom/client";
import { AppWithUI } from "./Components/AppWithUI";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
