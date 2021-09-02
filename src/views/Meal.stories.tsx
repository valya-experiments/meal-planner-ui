import * as React from "react";
import { MealView } from "./Meal";

export default {
  title: "Own / Meal page",
  component: MealView,
};

export const base = () => {
  return <MealView />;
};
