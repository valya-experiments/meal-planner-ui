import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

(async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./api_mocks/browser");
    worker.start();
  }
})();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
