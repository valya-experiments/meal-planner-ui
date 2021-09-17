import React from "react";
import { render, screen } from "utils/tests";
import { MealView } from "./Meal";

beforeEach(() => {
  render(<MealView />);
});

test("displays a list of meals fetched from API", async () => {
  expect(await screen.findByText("Fajitas")).toBeVisible();
  expect(await screen.findByText("Roasted Broccoli")).toBeVisible();
});
