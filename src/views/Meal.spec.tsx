import React from "react";
import { render, screen } from "../../utils/tests";
import { MealView } from "./Meal";

test("works with RTL", async () => {
  render(<MealView />);

  expect(screen.getByText("Meal page")).toBeVisible();
});
