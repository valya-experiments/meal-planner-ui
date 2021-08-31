import { render, screen } from "../../utils/test";
import React from "react";
import { MealView } from "./Meal";

test("loads and displays greeting", async () => {
  render(<MealView />);

  expect(screen.getByText("Meal")).toBeVisible();
});
