import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Root } from "./Root";
import './index.scss';


// Get the root element
const rootElement = document.querySelector('#root');

// Create the root and render the application
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);