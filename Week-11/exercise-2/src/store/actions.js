import { ADD_STEP, RESET_STEP } from "./types";

export const addStep = () => dispatch => {
  dispatch({ type: ADD_STEP });
};

export const resetStep = () => dispatch => {
  dispatch({ type: RESET_STEP });
};
