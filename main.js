import { createRoot } from "react-dom/client";
import Container from "./src/Container";
import "./src/styles/tailwind.css";

const appElement = createRoot(document.getElementById("App"));
appElement.render(Container());
