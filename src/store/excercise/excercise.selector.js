import { createSelector } from "reselect";

const selectExcercise = (state) => state.excercise;

export const selectExcerciseResult = createSelector(
  [selectExcercise],
  (excercise) => excercise.excerciseResult
);

export const selectExcerciseIsEmpty = createSelector(
  [selectExcercise],
  (excercise) => excercise.excerciseIsEmpty
);
