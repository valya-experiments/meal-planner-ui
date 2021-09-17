import React, { useEffect, useState } from "react";
import { Meal } from "src/model";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const MealView = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    async function fetchMeals() {
      try {
        const result = await fetch("/api/meals");

        if (!result.ok) {
          throw new Error(`Failed with status code: ${result.status}`);
        }

        const { data } = await result.json();

        setMeals(data as Meal[]);
      } catch (err) {
        console.log(err);
        setError(JSON.stringify(err));
      }
    }

    if (!meals.length) {
      fetchMeals();
    }
  }, []);

  return (
    <div className="px-4 py-2 text-red-500 bg-green-200 rounded home">
      <h1>Meal page</h1>
      <ul>
        {meals.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <h3>{error}</h3>
    </div>
  );
};
