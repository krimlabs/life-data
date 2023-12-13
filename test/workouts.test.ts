import { expect, test } from "bun:test";
import {
  fetchWorkoutSheetData,
  generateYearlyWorkoutAggregates,
  WorkoutSheetData,
} from "@src/workouts";

test("fetchSheetData", async () => {
  const result = await fetchWorkoutSheetData();
  const requiredKeys: Array<keyof WorkoutSheetData> = [
    "countByYearMonth",
    "aggregates",
  ];

  // Check if all keys are present
  requiredKeys.forEach((key) => {
    expect(result).toHaveProperty(key);
  });

  // Check if keys in countByYearMonth exist in aggregates
  const { countByYearMonth, aggregates } = result;
  Object.keys(countByYearMonth).forEach((year) => {
    expect(aggregates).toHaveProperty(year);
  });
});

test("generateYearlyWorkoutAggregates", () => {
  const countByYearMonth = {
    "2023": {
      "5": 16,
      "6": 19,
      "7": 16,
      "8": 17,
      "9": 7,
      "10": 7,
      "11": 5,
      "12": 6,
    },
    "2024": {
      "1": 12,
      "2": 14,
      "3": 18,
      "4": 22,
      "5": 25,
      "6": 28,
      "7": 30,
      "8": 19,
      "9": 26,
      "10": 20,
      "11": 18,
      "12": 15,
    },
  };

  const aggregates2023 = generateYearlyWorkoutAggregates(
    countByYearMonth["2023"],
  );
  const aggregates2024 = generateYearlyWorkoutAggregates(
    countByYearMonth["2024"],
  );

  expect(aggregates2023).toEqual({
    totalWorkouts: 93,
    averageWorkoutsPerMonth: 11.63,
    monthWithMostWorkouts: "6",
    monthWithLeastWorkouts: "11",
  });

  expect(aggregates2024).toEqual({
    totalWorkouts: 247,
    averageWorkoutsPerMonth: 20.58,
    monthWithMostWorkouts: "7",
    monthWithLeastWorkouts: "1",
  });
});
