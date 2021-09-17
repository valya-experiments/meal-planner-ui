import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render, screen } from "utils/tests";
import { MealView } from "./Meal";

beforeEach(() => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <MealView />
    </QueryClientProvider>
  );
});

test("displays a list of meals fetched from API", async () => {
  expect(await screen.findByText("Fajitas")).toBeVisible();
  expect(await screen.findByText("Roasted Broccoli")).toBeVisible();
});
