import React from "react";
import { render, screen } from "utils/tests";
import { MealView } from "./Meal";

test("works with RTL", async () => {
  render(<MealView />);

  expect(screen.getByText("Meal page")).toBeVisible();
});

test("displays a list of meals fetched from API", async () => {
  render(<MealView />);

  expect(await screen.findByText("Fajitas")).toBeVisible();
  expect(await screen.findByText("Roasted Broccoli")).toBeVisible();
});
