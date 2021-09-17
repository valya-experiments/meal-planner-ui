export enum MealType {
  // these integer strings match primary keys from the MealTypes table
  Breakfast = "10",
  Lunch = "20",
  Dinner = "30",
}

export interface Meal {
  id: string;
  name: string;
  type: MealType;
  date: string;
}

export interface DatabaseError {
  type: string;
  details: string;
}

export interface DatabaseResponse<DataType> {
  data: DataType | null;
  error: DatabaseError | null;
}
