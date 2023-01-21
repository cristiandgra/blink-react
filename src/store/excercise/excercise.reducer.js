import { EXCERCISE_TYPES } from "./excercise.types";

const EXCERCISE_INITIAL_STATE = {
  excerciseIsEmpty: true,
  excerciseResult: [],
};

export const excerciseReducer = (state = EXCERCISE_INITIAL_STATE, action) => {
  switch (action.type) {
    case EXCERCISE_TYPES.SET_EXCERCISE_RESULTS:
      return {
        ...state,
        excerciseResult: action.payload,
        excerciseIsEmpty: false,
      };
    default:
      return state;
  }
};
