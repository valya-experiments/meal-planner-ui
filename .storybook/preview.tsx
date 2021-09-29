import "../src/tailwind.imports.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { DecoratorFn } from "@storybook/react";

const queryClient = new QueryClient();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withReactQuery: DecoratorFn = (storyFn) => (
  <QueryClientProvider client={queryClient}>
    {storyFn()}
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export const decorators = [withReactQuery];

if (typeof global.process === "undefined") {
  const { worker } = require("../src/api_mocks/browser");
  worker.start();
}
