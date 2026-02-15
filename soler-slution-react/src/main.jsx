import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AnimatedCursor from "react-animated-cursor";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="255, 0, 0"
      outerAlpha={0.25}
      innerScale={0.7}
      outerScale={5}
      outerStyle={{
        backgroundColor: "rgba(255,0,0,0.15)",
        boxShadow: "0 0 35px rgba(255,0,0,0.45)",
      }}
    />

    <App />
  </StrictMode>,
);
