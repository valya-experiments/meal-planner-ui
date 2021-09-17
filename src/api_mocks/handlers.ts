import { rest } from "msw";
import { DatabaseResponse, Meal, MealType } from "../model";

export const handlers = [
  rest.get("/api/meals", (_req, res, ctx) => {
    const resPayload: DatabaseResponse<Meal[]> = {
      error: null,
      data: [
        {
          id: "111",
          name: "Fajitas",
          date: "19-01-2021",
          type: MealType.Lunch,
        },
        {
          id: "222",
          name: "Roasted Broccoli",
          date: "19-01-2021",
          type: MealType.Dinner,
        },
      ],
    };

    return res(ctx.json(resPayload));
  }),
];
