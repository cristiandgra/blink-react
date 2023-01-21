import { combineReducers } from "redux";

import { excerciseReducer } from "./excercise/excercise.reducer";

export const rootReducer = combineReducers({
  excercise: excerciseReducer,
});
