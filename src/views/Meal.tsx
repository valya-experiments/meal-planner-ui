import React from "react";
import { useQuery } from "react-query";
import { DatabaseError, DatabaseResponse, Meal } from "src/model";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const MealView = () => {
  const {
    isLoading,
    error,
    data: resData,
  } = useQuery<DatabaseResponse<Meal[]>, DatabaseError>(
    "mealsList",
    async (): Promise<DatabaseResponse<Meal[]>> => {
      const res = await fetch("/api/meals/");
      return await res.json();
    }
  );
  return (
    <div className="px-4 py-2 text-red-500 bg-green-200 rounded home">
      <h1>Meal page</h1>

      {!!isLoading && <h3>Loading...</h3>}

      {error && <h3>{`${error}`}</h3>}

      {resData?.data && (
        <ul>
          {resData.data.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
