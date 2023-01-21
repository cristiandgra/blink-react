import { EXCERCISE_TYPES } from "./excercise.types";

const createAction = (type, payload) => ({ type, payload });

export const setExcerciseResults = (payload) =>
  createAction(EXCERCISE_TYPES.SET_EXCERCISE_RESULTS, payload);
