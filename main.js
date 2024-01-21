import { createRoot } from "react-dom/client";
import Container from "./src/Container";
import "./src/styles/tailwind.css";

const bodyElement = createRoot(document.querySelector("body"));
bodyElement.render(Container());
