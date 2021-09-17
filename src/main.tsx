import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

(async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./api_mocks/browser");
    worker.start();
  }
})();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
