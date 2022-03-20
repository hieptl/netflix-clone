import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import App component.
import App from "./App";
// replace App component to the root document.
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
